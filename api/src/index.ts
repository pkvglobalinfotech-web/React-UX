import { config } from 'dotenv';
config();

import './Global';
import { Bootstrap } from './Bootstrap';
import { Sequence } from './Server/Modules/General/Common/Sequence.s';
import { FacilityPreferenceService } from './Server/Modules/SystemSettings/Service/Index';
import { FacilityPreferenceFilters } from './Server/Modules/SystemSettings/Common/Filters.e';
import { scheduleWhatsappAutomation } from './Server/WhatsappNotification/WhatsAppAutomation';

if (process.env.NODE_ENV !== 'production') {
    debugger;
}

async function startServer() {
    try {
        const app = new Bootstrap();

        // 1. Wait for Server, Database, and ORM models to fully initialize
        console.log('[Startup] Initializing application database and core dependencies...');
        await app.Init();
        app.Start();

        // 2. Initialize Sequences AFTER the DB models are ready
        console.log('[Startup] Synchronizing Sequences...');
        await Sequence.Init();

        // 3. Load Facility Preferences cleanly in parallel
        console.log('[Startup] Initializing Facility Preferences...');
        const prefService = new FacilityPreferenceService();

        const [smsRes, emailRes, waRes, localWellRes] = await Promise.all([
            prefService.GetFacilityPreferences({
                Id: 0,
                PageContext: { PageSize: 100, PageNumber: 1 },
                Params: [{ Key: FacilityPreferenceFilters.Category, Value: 'SMS' }]
            }),
            prefService.GetFacilityPreferences({
                Id: 0,
                PageContext: { PageSize: 100, PageNumber: 1 },
                Params: [{ Key: FacilityPreferenceFilters.Category, Value: 'EMAIL' }]
            }),
            prefService.GetFacilityPreferences({
                Id: 0,
                PageContext: { PageSize: 100, PageNumber: 1 },
                Params: [{ Key: FacilityPreferenceFilters.Category, Value: 'WHATSAPP' }]
            }),
            prefService.GetFacilityPreferences({
                Id: 0,
                PageContext: { PageSize: 100, PageNumber: 1 },
                Params: [{ Key: FacilityPreferenceFilters.Category, Value: 'LOCALWELL' }]
            })
        ]);

        // Map SMS Configurations
        smsRes?.Data?.forEach(pref => {
            SmsConfig[pref.PreferenceKey] = pref.PreferenceValue;
        });
        console.log('SMS Config loaded:', SmsConfig);

        // Map Email Configurations
        emailRes?.Data?.forEach(pref => {
            EmailConfig[pref.PreferenceKey] = pref.PreferenceValue;
        });
        console.log('Email Config loaded:', EmailConfig);

        // Map WhatsApp Configurations & Schedule Automation
        waRes?.Data?.forEach(pref => {
            WhatsAppConfig[pref.PreferenceKey] = pref.PreferenceValue;
        });
        console.log('WhatsApp Config loaded:', WhatsAppConfig);

        if (WhatsAppConfig['PROVIDER'] === 'JSS') {
            scheduleWhatsappAutomation();
        } else {
            console.log('WhatsApp automation not scheduled for this provider');
        }

        // Map LocalWell Configurations
        localWellRes?.Data?.forEach(pref => {
            LocalWellConfig[pref.PreferenceKey] = pref.PreferenceValue;
        });
        console.log('LocalWell Config loaded:', LocalWellConfig);

        console.log('[Startup] All boot steps completed successfully.');

    } catch (err) {
        console.error('[Startup Error] Application failed to initialize:', err);
        process.exit(1);
    }
}

startServer();
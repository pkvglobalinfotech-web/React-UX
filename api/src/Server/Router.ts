import { SessionConfig, CacheConfig } from '../config/index';
import { GetRouter, Router, AuthMiddleware, TransMiddleware, Request, Response, NextFunction } from './Core/Index';
import passport from 'passport';
import session from 'express-session';
import RedisStore from 'connect-redis';
import { Redis } from './Core/Wrapper/Index';
import NoUserCalls from './Modules/NoUserCalls/Router/Index';
import API from './Modules/API/Router/Index';
import Auth from './Modules/SystemSettings/Router/Auth';
import SystemSettings from './Modules/SystemSettings/Router/Index';
import LIS from './Modules/LIS/Router/Index';
import Options from './Modules/General/Router/Index';
import Registration from './Modules/Registration/Router/Index';
import GeneralMaster from './Modules/GeneralMaster/Router/Index';
import Pharmacy from './Modules/Pharmacy/Router/Index';
import ClinicalMaster from './Modules/ClinicalMaster/Router/Index';
import Appointment from './Modules/Appointment/Router/Index';
import EMR from './Modules/EMR/Router/Index';
import IPManagement from './Modules/IPManagement/Router/Index';
import Visit from './Modules/Visit/Router/Index';
import Billing from './Modules/Billing/Router/Index';
import AssetManagement from './Modules/AssetManagement/Router/Index';
import OtManagement from './Modules/OtManagement/Router/Index';
import DischargeSummary from './Modules/DischargeSummary/Router/Index';
import DoctorInvoice from './Modules/DoctorInvoice/Router/Index';
import AccidentEmergency from './Modules/AccidentEmergency/Router/Index';
import BillingMaster from './Modules/BillingMaster/Router/Index';
import BillModification from './Modules/BillModification/Router/Index';
import VirtualHealthcare from './Modules/VirtualHealthcare/Router/Index';
import CostManagement from './Modules/CostManagement/Router/Index';
import TaskManagement from './Modules/TaskManagement/Router/Index';

// Get the actual Redis client instance from your caching module singleton
const redisClient = Redis.Instance.Client;
// Initialize RedisStore dynamically depending on installed connect-redis version
let sessionStore: session.Store;

if (typeof RedisStore === 'function' && !(RedisStore.prototype instanceof (session as any).Store)) {
    // connect-redis v6 and below pattern
    const LegacyStoreConstructor = (RedisStore as any)(session);
    sessionStore = new LegacyStoreConstructor({ client: redisClient, ...CacheConfig });
} else {
    // connect-redis v7+ pattern
    sessionStore = new (RedisStore as any)({ client: redisClient });
}

SessionConfig.store = sessionStore;

// CORS middleware
var allowCrossDomain = function (req: Request, res: Response, next: NextFunction) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Authorization, Origin, X-Requested-With, Content-Type, Accept, x-api-key');

    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
};

var route: Router = GetRouter();

// Session & Authentication Middleware
route.use(session(SessionConfig as session.SessionOptions));
route.use((passport as any).initialize());
route.use((passport as any).session());
route.use(allowCrossDomain);

// Unauthenticated Routes
route.use('/v2/app', NoUserCalls);
route.use('/Auth', Auth);

// Authenticated Routes
route.use((passport as any).authenticate(['bearer'], { session: true }));
route.use(AuthMiddleware as any);
route.use(TransMiddleware as any);

// App Route Modules
route.use('/api', API);
route.use('/SystemSettings', SystemSettings);
route.use('/LIS', LIS);
route.use(Options);
route.use('/General', Options);
route.use('/Registration', Registration);
route.use('/GeneralMaster', GeneralMaster);
route.use('/Pharmacy', Pharmacy);
route.use('/ClinicalMaster', ClinicalMaster);
route.use('/Appointment', Appointment);
route.use('/EMR', EMR);
route.use('/IPManagement', IPManagement);
route.use('/Visit', Visit);
route.use('/Billing', Billing);
route.use('/AssetManagement', AssetManagement);
route.use('/OtManagement', OtManagement);
route.use('/DischargeSummary', DischargeSummary);
route.use('/DoctorInvoice', DoctorInvoice);
route.use('/AccidentEmergency', AccidentEmergency);
route.use('/BillingMaster', BillingMaster);
route.use('/BillModification', BillModification);
route.use('/VirtualHealthcare', VirtualHealthcare);
route.use('/CostManagement', CostManagement);
route.use('/TaskManagement', TaskManagement);

export = route;
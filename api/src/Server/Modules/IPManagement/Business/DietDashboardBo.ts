import * as SStatic from 'sequelize';
import { BaseBo } from '../../Base/Index';
import { BaseRequest } from '../../../Common/Index';
import { BoFactory } from '../../Base/Business/Index';
import { ItemMasterInstance, ItemMasterAttributes } from '../../Pharmacy/Model/Interface/Index';
import * as appoinmentbo from '../../Appointment/Business/Index';
import * as patientorderbo from '../../EMR/Business/Index';
import * as inpatientbo from '../../Visit/Business/Index';
import * as patientdietorderbo from '../../EMR/Business/Index';
import * as stockrequestbo from '../../Pharmacy/Business/Index';
import * as stockreceivebo from '../../Pharmacy/Business/Index';

export class DietDashboardBo extends BaseBo<ItemMasterInstance, ItemMasterAttributes> {

    public async GetDietDashboardOptions(req: BaseRequest): Promise<any> {
        let infoResponses: any = {};

        let filterAttributes = req.Attributes || {};
        let requestKeys: any[] = req?.Data?.Keys || [];

        const registry = this.getDietDashboardRegistry();

        await Promise.all(requestKeys.map(async (infoRequest: any): Promise<void> => {
            if (!infoRequest?.Key) {
                throw { code: 'INVALID_KEY', message: 'Request item key is missing' };
            }

            let func = registry[infoRequest.Key];
            if (func) {
                let bo = func();
                if (bo) {
                    bo.Request = filterAttributes;
                    infoResponses[infoRequest.Key] = await bo.GetDietDashboardInfo({ Data: filterAttributes || {} });
                } else {
                    throw { code: 'BO_CREATION_FAILED', message: 'Failed to create business object for key: ' + infoRequest.Key };
                }
            } else {
                throw { code: 'KEY_NOT_FOUND', message: 'DietDashboardRegistry does not contain Key:' + infoRequest.Key };
            }
        }));

        return infoResponses;
    }

    public GetModel(): SStatic.Model<ItemMasterInstance, ItemMasterAttributes> {
        return this.Models.ItemMaster;
    }

    private getDietDashboardRegistry(): { [key: string]: () => any } {
        return {
            checkedinpatientbo: () => BoFactory.GetBo(appoinmentbo.AppointmentBo, this.Request),
            appoinmentbo: () => BoFactory.GetBo(appoinmentbo.AppointmentBo, this.Request),
            patientdietorderbo: () => BoFactory.GetBo(patientdietorderbo.PatientDietOrderBo, this.Request),
            patientorderbo: () => BoFactory.GetBo(patientorderbo.PatientOrderBo, this.Request),
            inpatientbo: () => BoFactory.GetBo(inpatientbo.EncounterBo, this.Request),
            stockrequestbo: () => BoFactory.GetBo(stockrequestbo.StockRequestBo, this.Request),
            stockreceivebo: () => BoFactory.GetBo(stockreceivebo.StockTransferBo, this.Request),
        };
    }

}
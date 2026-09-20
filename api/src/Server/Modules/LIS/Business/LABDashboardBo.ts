import * as SStatic from 'sequelize';
import { BaseBo } from '../../Base/Index';
import { BaseRequest } from '../../../Common/Index';
import { BoFactory } from '../../Base/Business/Index';
import { PatientOrderInstance, PatientOrderAttributes } from '../../EMR/Model/Interface/Index';
import * as patemrbo from '../../EMR/Business/Index';
import * as lisbo from '../../LIS/Business/Index';

export class LABDashboardBo extends BaseBo<PatientOrderInstance, PatientOrderAttributes> {

    public async GetLABDashboardOptions(req: BaseRequest): Promise<any> {
        let infoResponses: any = {};

        let filterAttributes = req.Attributes || {};
        let requestKeys: any[] = req?.Data?.Keys || [];

        const registry = this.getLABDashboardRegistry();

        await Promise.all(requestKeys.map(async (infoRequest: any): Promise<void> => {
            if (!infoRequest?.Key) {
                throw { code: 'INVALID_KEY', message: 'Request item key is missing' };
            }

            let func = registry[infoRequest.Key];
            if (func) {
                let bo = func();
                if (bo) {
                    bo.Request = filterAttributes;
                    infoResponses[infoRequest.Key] = await bo.GetLABInfoDashBoard({ Data: filterAttributes || {} });
                } else {
                    throw { code: 'BO_CREATION_FAILED', message: 'Failed to create business object for key: ' + infoRequest.Key };
                }
            } else {
                throw { code: 'KEY_NOT_FOUND', message: 'LABDashboardRegistry does not contain Key:' + infoRequest.Key };
            }
        }));

        return infoResponses;
    }

    public GetModel(): SStatic.Model<PatientOrderInstance, PatientOrderAttributes> {
        return this.Models.PatientOrder;
    }

    private getLABDashboardRegistry(): { [key: string]: () => any } {
        return {
            patientorderbo: () => BoFactory.GetBo(patemrbo.PatientOrderDetailBo, this.Request),
            workordersamplebo: () => BoFactory.GetBo(lisbo.WorkOrderSampleDetailBo, this.Request),
            patientworkorderbo: () => BoFactory.GetBo(lisbo.PatientWorkorderdetailsBo, this.Request),
            patientorderdetailbo: () => BoFactory.GetBo(patemrbo.PatientOrderDetailBo, this.Request),
        };
    }

}
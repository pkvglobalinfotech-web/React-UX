import * as SStatic from 'sequelize';
import { BaseBo } from '../../Base/Index';
import { BaseRequest } from '../../../Common/Index';
import { BoFactory } from '../../Base/Business/Index';
import { EncounterInstance, EncounterAttributes } from '../../Visit/Model/Interface/Index';
import * as emrbo from '../../EMR/Business/Index';
import * as presbo from '../../EMR/Business/Index';
import * as orderbo from '../../EMR/Business/Index';
import * as surgbo from '../../OtManagement/Business/Index';
import * as admitbo from '../../IPManagement/Business/Index';

export class PatientEMRDashboardBo extends BaseBo<EncounterInstance, EncounterAttributes> {

    public async GetPatientEMRDashboardOptions(req: BaseRequest): Promise<any> {
        let infoResponses: any = {};

        let filterAttributes = req.Attributes || {};
        let requestKeys: any[] = req?.Data?.Keys || [];

        const registry = this.getPatientEMRDashboardRegistry();

        await Promise.all(requestKeys.map(async (infoRequest: any): Promise<void> => {
            if (!infoRequest?.Key) {
                throw { code: 'INVALID_KEY', message: 'Request item key is missing' };
            }

            let func = registry[infoRequest.Key];
            if (func) {
                let bo = func();
                if (bo) {
                    bo.Request = filterAttributes;
                    infoResponses[infoRequest.Key] = await bo.GetEMRDashBoardInfo({ Data: filterAttributes || {} });
                } else {
                    throw { code: 'BO_CREATION_FAILED', message: 'Failed to create business object for key: ' + infoRequest.Key };
                }
            } else {
                throw { code: 'KEY_NOT_FOUND', message: 'PatientEMRDashboardRegistry does not contain Key:' + infoRequest.Key };
            }
        }));

        return infoResponses;
    }

    public GetModel(): SStatic.Model<EncounterInstance, EncounterAttributes> {
        return this.Models.Encounter;
    }

    private getPatientEMRDashboardRegistry(): { [key: string]: () => any } {
        return {
            consultbo: () => BoFactory.GetBo(emrbo.ConsultationBo, this.Request),
            prescribebo: () => BoFactory.GetBo(presbo.PrescriptionBo, this.Request),
            orderbo: () => BoFactory.GetBo(orderbo.PatientOrderBo, this.Request),
            surgeryrequestbo: () => BoFactory.GetBo(surgbo.OtRequestBo, this.Request),
            documentbo: () => BoFactory.GetBo(emrbo.ClinicalDocumentBo, this.Request),
            admitrequestbo: () => BoFactory.GetBo(admitbo.AdmissionRequestBo, this.Request),
            allergybo: () => BoFactory.GetBo(emrbo.PatientAllergyBo, this.Request),
            labresultbo: () => BoFactory.GetBo(orderbo.PatientOrderBo, this.Request),
            radiologyresultbo: () => BoFactory.GetBo(orderbo.PatientOrderBo, this.Request),
            endoscopyresultbo: () => BoFactory.GetBo(orderbo.PatientOrderBo, this.Request),
            lensprescribebo: () => BoFactory.GetBo(presbo.LensPrescriptionBo, this.Request),
        };
    }

}
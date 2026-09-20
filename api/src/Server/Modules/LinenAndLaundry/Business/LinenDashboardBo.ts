import * as SStatic from 'sequelize';
import { BaseBo } from '../../Base/Index';
import { BaseRequest } from '../../../Common/Index';
import { BoFactory } from '../../Base/Business/Index';
import { LinenStockEntryInstance, LinenStockEntryAttributes } from '../Model/Interface/Index';
import * as linenandlaundrybo from '../../LinenAndLaundry/Business/Index';

export class LinenDashboardBo extends BaseBo<LinenStockEntryInstance, LinenStockEntryAttributes> {

    public async GetLinenDashboardOptions(req: BaseRequest): Promise<any> {
        let infoResponses: any = {};

        let filterAttributes = req.Attributes || {};
        let requestKeys: any[] = req?.Data?.Keys || [];

        const registry = this.getLinenDashboardRegistry();

        await Promise.all(requestKeys.map(async (infoRequest: any): Promise<void> => {
            if (!infoRequest?.Key) {
                throw { code: 'INVALID_KEY', message: 'Request item key is missing' };
            }

            let func = registry[infoRequest.Key];
            if (func) {
                let bo = func();
                if (bo) {
                    bo.Request = filterAttributes;
                    infoResponses[infoRequest.Key] = await bo.GetLinenDashboardInfo({ Data: filterAttributes || {} });
                } else {
                    throw { code: 'BO_CREATION_FAILED', message: 'Failed to create business object for key: ' + infoRequest.Key };
                }
            } else {
                throw { code: 'KEY_NOT_FOUND', message: 'LinenDashboardRegistry does not contain Key:' + infoRequest.Key };
            }
        }));

        return infoResponses;
    }

    public GetModel(): SStatic.Model<LinenStockEntryInstance, LinenStockEntryAttributes> {
        return this.Models.LinenStockEntry;
    }

    private getLinenDashboardRegistry(): { [key: string]: () => any } {
        return {
            stockentrybo: () => BoFactory.GetBo(linenandlaundrybo.LinenStockEntryBo, this.Request),
            issuebookbo: () => BoFactory.GetBo(linenandlaundrybo.LinenStockTransferBo, this.Request),
            receiptbo: () => BoFactory.GetBo(linenandlaundrybo.LinenStockTransferBo, this.Request),
            stockstatusbo: () => BoFactory.GetBo(linenandlaundrybo.LinenStockItemsBo, this.Request),
        };
    }

}
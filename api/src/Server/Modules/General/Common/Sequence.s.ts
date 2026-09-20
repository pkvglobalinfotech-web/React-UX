import { BoFactory } from '../../Base/Index';
import { SequenceMastersBo } from '../Business/Index';
import { Request, SequenceGenerator } from '../../../Core/Index';
import { SequenceMastersAttributes } from '../Model/Interface/Index';

/**
 * Base Sequence Identifier Keys mapped to core sequence master identifiers.
 * Facility and Store suffixes are appended dynamically at runtime based on context.
 */
export const SequenceKeys = {
  // Core Patient & Billing
  PatientId: 'PatientIdentifier',
  TempPatientId: 'PatientTempIdentifier',
  FamilyPatientId: 'FamilyLinkIdentifier',
  PrescriptionId: 'PrescriptionIdentifier',
  PatientOrderId: 'PatientOrderIdentifier',
  OPBillNumberId: 'OPBillNumberIdentifier',
  OPCreditBillNumberId: 'OPCreditBillNumberIdentifier',
  BarcodeNumberId: 'BarcodeNumberIdentifier',
  ReceiptNrId: 'ReceiptNumberIdentifier',
  IpAdvanceNrId: 'IPAdvanceNumberIdentifier',
  IPReceiptNrId: 'IPReceiptNumberIdentifier',
  RefundNrId: 'RefundIdentifier',
  IPRefundNrId: 'IPRefundIdentifier',
  AdmissionRequest: 'AdmissionRequestIdentifier',
  Admission: 'AdmissionIdentifier',
  InsuranceTempBill: 'InsuranceTempBillIdentifier',
  DayCareAdmission: 'DayCareAdmissionIdentifier',
  OPEncounter: 'OPEncounterIdentifier',
  BedHousekeeping: 'BedHousekeepingIdentifier',
  ServiceRequest: 'TicketNumberIdentifier',
  BedTransportation: 'BedTransportIdentifier',
  BedTransferIdentifier: 'BedTransferIdentifier',
  PatientLISWorkOrder: 'PatientLISWorkOrderIdentifier',
  PatientRISWorkOrder: 'PatientRISWorkOrderIdentifier',
  PatientENDOWorkOrder: 'PatientENDOWorkOrderIdentifier',
  IPBillNumberId: 'IPBillNumberIdentifier',
  AutoJobIPBillNumberId: 'AutoJobIPBillNumberIdentifier',
  OTrequestNoId: 'OTrequestNoIdentifier',
  IPFinalBillNumberId: 'IPFinalBillNumberIdentifier',
  DayCareIPFinalBillNumberId: 'DayCareIPFinalBillNumberIdentifier',
  IPCreditFinalBillNumberId: 'IPCreditFinalBillNumberIdentifier',
  BedOccupancyTranscationId: 'BedOccupancyTranscationIdentifier',
  OTIdentifierId: 'OTIdentifier',
  CreditNoteIdentifier: 'CreditNoteIdentifier',
  MLCNoId: 'MLCNoIdentifier',
  PatientDietOrderId: 'PatientOrderIdentifier',
  DGBillNumberId: 'DGIdentifier',
  MrdRequestId: 'MrdRequestIdentifier',
  MrdIssueId: 'MrdIssueIdentifier',
  AERegistration: 'AERIdentifier',
  DoctorInvoice: 'DoctorInvoice',
  DoctorPayment: 'DoctorPayment',
  CategoryIdentifier: 'CategoryIdentifier',
  ConceptIdentifier: 'ConceptIdentifier',
  InsurancePaymentIdentifier: 'InsurancePaymentIdentifier',
  ClaimNumber: 'ClaimNumber',
  SampleDetailIdentifier: 'SampleDetailIdentifier',
  PatientAMBWorkOrder: 'PatientAMBWorkOrderIdentifier',
  CustomerBillNumberId: 'CustomerBillNumberIdentifier',
  MyExpenseId: 'MyExpenseIdentifier',
  ConsultationId: 'ConsultationIdentifier',
  AppointmentTokenNo: 'AppointmentTokenNo',
  UserBillingCounterNo: 'UserBillingCounterNo',
  PhysiotheraphyId: 'PhysiotherapyIdentifier',
  LensPrescriptionId: 'LensPrescriptionIdentier',
  BloodRequestId: 'BloodRequestIdentier',
  LHRCVoucherId: 'LHRCVoucherIdentifier',
  CustomerBillId: 'CustomerBillNumberIdentifier',
  StaffCreditPaymentId: 'StaffCreditPaymentId',
  VirtualOrderId: 'VirtualOrderIdentifier',
  VirtualBillId: 'VirtualBillIdentifier',
  VirtualPaymentId: 'VirtualPaymentIdentifier',
  GatePassId: 'GatePassNo',
  AssetTransferId: 'AssetTransferNo',
  UserId: 'UserIdentifier',
  MedicineOrderId: 'MedicineOrderIdentifier',
  PatientSickLeaveFormId: 'LeaveFormIdentifier',
  TreatmentPlanId: 'TreatmentPlanIdentifier',

  // Inventory Sequence Identifiers
  MDOpeningStockId: 'MDOpeningStockEntryIdentifier',
  NMDOpeningStockId: 'NMDOpeningStockEntryIdentifier',
  MDPurchaseRequestId: 'MDPurchaseRequestIdentifier',
  NMDPurchaseRequestId: 'NMDPurchaseRequestIdentifier',
  MDPurchaseOrderId: 'MDPurchaseOrderIdentifier',
  NMDPurchaseOrderId: 'NMDPurchaseOrderIdentifier',
  GeneralPurchaseOrderId: 'GeneralPurchaseOrderIdentifier',
  MDGoodsReceiptNoteId: 'MDGoodsReceiptNoteIdentifier',
  GeneralGoodsReceiptNoteId: 'GeneralGoodsReceiptNoteIdentifier',
  NMDGoodsReceiptNoteId: 'NMDGoodsReceiptNoteIdentifier',
  ConsignmentNoteId: 'ConsignmentNoteIdentifier',
  MDPurchaseReturn: 'MDPurchaseReturnIdentifier',
  NMDPurchaseReturn: 'NMDPurchaseReturnIdentifier',
  MDStockRequest: 'MDStockRequestIdentifier',
  NMDStockRequest: 'NMDStockRequestIdentifier',
  MDStockTransfer: 'MDStockTransferIdentifier',
  NMDStockTransfer: 'NMDStockTransferIdentifier',
  MDStockReceive: 'MDStockReceiveIdentifier',
  NMDStockReceive: 'NMDStockReceiveIdentifier',
  MDStockConsumption: 'MDStockConsumptionIdentifier',
  NMDStockConsumption: 'NMDStockConsumptionIdentifier',
  MDStockAdjustment: 'MDStockAdjustmentIdentifier',
  NMDStockAdjustment: 'NMDStockAdjustmentIdentifier',
  InvWorkorderId: 'InvWorkorderIdentifier',
  ServiceBillEntryId: 'ServiceBillEntryIdentifier',
  OpticalGoodsReceiptNoteId: 'OpticalGoodsReceiptNoteIdentifier',
  OpticalEntryId: 'OpticalEntryIdentifier',
  VendorPaymentId: 'VendorPaymentIdentifier',

  // Pharmacy Sequence Identifiers
  PharmacyBillNumberId: 'PharmacyBillNumberIdentifier',
  PharmacyDueBillNumberId: 'PharmacyDueBillNumberIdentifier',
  PharmacyIPBillNumberId: 'PharmacyIPBillNumberIdentifier',
  PharmacyReturnNumberId: 'PharmacyReturnNumberIdentifier',
  PatientRequestNumberId: 'PatientRequestNumberIdentifier',
  PatientReturnNumberId: 'PatientReturnNumberIdentifier',
  PatientDispenseNumberId: 'PatientDispenseNumberIdentifier',
  PatientDispenseReturnNumberId: 'PatientDispenseReturnNumberIdentifier',
  GeneralExpenseId: 'GeneralExpenseIdIdentier',
  PharmacyBillClaimNumberId: 'PharmacyBillClaimNumberIdentifier',
  PharmacyCreditBill: 'PharmacyCreditBillIdentifier',
  PharmacyCreditIPBill: 'PharmacyCreditIPBillIdentifier',
  PharmacyCashBill: 'PharmacyCashBillIdentifier',
  PharmacyManualBill: 'PharmacyManualBillIdentifier',
  PharmacyRetCreditBill: 'PharmacyRetCreditBillIdentifier',
  PharmacyRetCashBill: 'PharmacyRetCashBillIdentifier',
  PharmacyRetManualBill: 'PharmacyRetManualBillIdentifier',

  // Store Sequence Identifiers
  GRNStore: 'GRNStoreIdentifier',
  PharmacyBillStore: 'SaleStoreIdentifier',
  PharmacyReturnStore: 'ReturnStoreIdentifier',
  DispenseStore: 'DispenseStoreIdentifier',
  DispenseReturnStore: 'DispenseReturnStoreIdentifier',

  // Blood Bank Sequence Identifiers
  DonorRegistrationId: 'DonorRegPINIdentifier',
  BloodScreeningId: 'BloodScreeningIdentifier',
  BloodDonationId: 'BloodDonationIdentifier',
  BloodRequestionId: 'BloodRequestNoIdentifier',
  BloodCrossMatchId: 'BloodCrossMatchIdentifier',
  BloodExternalIssueId: 'BloodExternalIssueIdentifier',

  // Miscellaneous
  WasteId: 'TransactionNoIdentifier',
  LinenTransferId: 'LinenTransferIdentifier',
  LinenStockEntryId: 'LinenStockEntryIdentifier',
  BankStatementNumberId: 'BankStatementIdentifier',

  // Store Specific Override Sequences
  PharmacyBillNumberId_S1: 'PharmacyBillNumberIdentifierS-1',
  PharmacyReturnNumberId_S1: 'PharmacyReturnNumberIdentifierS-1'
} as const;

export type SequenceKeyType = typeof SequenceKeys[keyof typeof SequenceKeys] | string;

export class Sequence {
  private static sequenceMastersBoInstance: SequenceMastersBo | null = null;
  private static sequenceCacheMap: Map<string, SequenceMastersAttributes> = new Map();

  /**
   * Lazy accessor for SequenceMastersBo to avoid initialization before DB/ORM is ready.
   */
  private static getSequenceBo(): SequenceMastersBo {
    if (!Sequence.sequenceMastersBoInstance) {
      Sequence.sequenceMastersBoInstance = BoFactory.GetBo(SequenceMastersBo);
    }
    return Sequence.sequenceMastersBoInstance;
  }

  /**
   * Initializes sequence metadata and synchronizes local cache with Redis.
   */
  public static async Init(): Promise<void> {
    const pageContext = { PageSize: -1, PageNumber: 1 };
    const bo = Sequence.getSequenceBo();

    const response = await bo.GetSequenceMasterss({
      Id: null,
      Attributes: null,
      PageContext: pageContext,
      Params: []
    });

    const data: SequenceMastersAttributes[] = response?.Data || [];
    Sequence.sequenceCacheMap.clear();

    await Promise.all(
      data.map(async (si) => {
        Sequence.sequenceCacheMap.set(si.SeqName, si);

        const currentRedisVal = await SequenceGenerator.GetSequence(si.SeqName);
        const requiresRedisUpdate = currentRedisVal < si.SeqStartId;

        if (requiresRedisUpdate) {
          await SequenceGenerator.SetSequence(si.SeqName, si.SeqStartId);
        }

        console.log(
          `[Sequence Init] Key: ${si.SeqName} | DB: ${si.SeqStartId} | Redis: ${currentRedisVal} | Synchronized: ${requiresRedisUpdate}`
        );
      })
    );
  }

  /**
   * Resolves the next auto-increment formatted sequence string.
   */
  public static async Next(key: string, propertyName?: string, facilityId?: number): Promise<string> {
    let identifierKey = key;

    if (facilityId && facilityId > 1) {
      identifierKey += facilityId;
    }

    let sequence = Sequence.sequenceCacheMap.get(identifierKey);

    // Fallback lookup: handle pass-through legacy raw keys (e.g., 'PatientIdentifier2')
    if (!sequence && (identifierKey.endsWith('2') || identifierKey.endsWith('4'))) {
      const baseKey = identifierKey.slice(0, -1);
      sequence = Sequence.sequenceCacheMap.get(baseKey);
    }

    if (!sequence) {
      throw new Error(`Given Key '${identifierKey}' is not registered in Sequence Master.`);
    }

    const syncIdentifiers = [
      'DayCareIPFinalBillNumberIdentifier',
      'IPFinalBillNumberIdentifier',
      'IPCreditFinalBillNumberIdentifier'
    ];

    const clientCode = (process.env.CLIENT_CODE || '').toLowerCase();

    if (clientCode === 'jsshospital' && syncIdentifiers.includes(sequence.SeqName)) {
      await Sequence.syncRedisWithMaxTableSequence(sequence);
    }

    try {
      return await SequenceGenerator.Next({
        key: sequence.SeqName,
        prefix: sequence.SeqPrefix,
        suffix: sequence.SeqSuffix,
        isdailyreset: sequence.IsDailyReset,
        seqbaseid: sequence.SeqBaseId
      });
    } catch (err) {
      console.error(`[Sequence Engine] Failed generating sequence for key '${sequence.SeqName}':`, err);
      throw new Error(`Failed to generate final sequence for key: ${sequence.SeqName}`);
    }
  }

  /**
   * Flushes deferred sequences tied to an active transaction scope.
   */
  public static async ProcessDeferredSequences(request: Request): Promise<boolean> {
    const isTransactionValid = request?.transaction && request.transaction.finished !== 'rollback';

    if (!isTransactionValid || !Array.isArray(request.deferredSequences) || request.deferredSequences.length === 0) {
      return true;
    }

    try {
      for (const dsi of request.deferredSequences) {
        const generatedCode = await Sequence.Next(dsi.key);

        await dsi.bo.Update(
          { Id: dsi.id, [dsi.propertyName]: generatedCode } as Record<string, unknown>,
          { where: { Id: dsi.id } }
        );

        if (Array.isArray(dsi.afterEvents)) {
          for (const evtFn of dsi.afterEvents) {
            if (typeof evtFn === 'function') {
              try {
                await evtFn(generatedCode);
              } catch (evtError) {
                console.error(`[Deferred Events] Execution error in hook [${evtFn.name || 'anonymous'}]:`, evtError);
              }
            } else {
              console.warn('[Deferred Events] Skipped invalid non-function hook:', evtFn);
            }
          }
        }
      }
    } catch (ex) {
      const failedKey = request.deferredSequences?.[0]?.key || 'Unknown';
      console.error('[Sequence Processing Error] Deferred execution failed:', ex);
      throw new Error(`Error processing deferred sequence execution for key: ${failedKey}`);
    } finally {
      request.deferredSequences = null;
    }

    return true;
  }

  /**
   * Synchronizes Redis sequence key counter with maximum sequence ID recorded in the DB table.
   */
  private static async syncRedisWithMaxTableSequence(sequence: SequenceMastersAttributes): Promise<void> {
    let redisValue = 0;
    let maxSeq = 0;
    const bo = Sequence.getSequenceBo();

    try {
      redisValue = await SequenceGenerator.GetSequence(sequence.SeqName);
    } catch (err) {
      console.error(`[Redis Error] Failed fetching sequence for key ${sequence.SeqName}:`, err);
      throw new Error(`Redis lookup failed for key: ${sequence.SeqName}`);
    }

    try {
      maxSeq = await bo.getMaxSequenceFromTable(sequence);
    } catch (err) {
      console.error(`[DB Error] Failed fetching max sequence for table ${sequence.TableName}:`, err);
      throw new Error(`Sequence lookup failed on table: ${sequence.TableName}`);
    }

    if (maxSeq !== redisValue) {
      try {
        await SequenceGenerator.SetSequence(sequence.SeqName, Number(maxSeq));
      } catch (err) {
        console.error(`[Redis Error] Sync set failed for key ${sequence.SeqName}:`, err);
        throw new Error(`Failed synchronizing Redis counter for key: ${sequence.SeqName}`);
      }
    }
  }
}
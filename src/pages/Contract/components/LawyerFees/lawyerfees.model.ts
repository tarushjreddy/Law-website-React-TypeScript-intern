export interface ContractDateInterface {
  ondate: string;
}

export interface FirstPartyDetailInterface {
  method: string;
  name: string;
  licenseNo: string;
  IDnum: string;
  city: string;
  neighborhood: string;
  street: string;
  phone: string;
}
export interface SecondPartyDetailInterface {
  firstName: string;
  name: string;
  nationality: string;
  IDnum: string;
  city: string;
  neighborhood: string;
  phone: string;
  email: string;
  POBox: string;
  street: string;
  contract: string;
  nationalID: string;
}

export interface ServiceTypeInterface {
  serviceType: string;
}
export interface TravelExpenseInterface {
  travel: string;
  amount: string;
}

export interface SecondPartyFeeInterface {
  canceled: string;
  payTime: string;
  date: string;
  place: string;
  accountNo: string;
}

export interface TermsConditionsInterface {
  jdArea: string;
  terms: boolean;
}

export interface LawyerFeeFormDataTypes {
  contractDate: ContractDateInterface;
  firstPartyDetail: FirstPartyDetailInterface;
  secondPartyDetail: SecondPartyDetailInterface;
  serviceDetail: ServiceTypeInterface;
  travelExpenseDetail: TravelExpenseInterface;
  secondPartyFeeDetail: SecondPartyFeeInterface;
  termsConditionsDetail: TermsConditionsInterface;
}

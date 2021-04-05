export interface ContractDateInterface {
  ondate: string;
}
export interface BasicDetailInterface {
  name: string;
  nationality: string;
  IDnumber: string;
  resisndence: string;
}
export interface FirstPartyDetailInterface {
  name: string;
  nationality: string;
  IDnumber: string;
  city: string;
  street: string;
  phone: string;
  neighborhood: string;
}

export interface SecondPartyDetailInterface {
  name: string;
  nationality: string;
  IDnumber: string;
  city: string;
  street: string;
  phone: string;
  neighborhood: string;
}

export interface CarDetailsInterface {
  modal: string;
  brand: string;
  plate: string;
}

export interface PriceAndPaymentsInterface {
  price: string;
  method: string;
  accountNo: string;
}

export interface InstallmentsInterface {
  canceled: string;
  installments: number;
  firstPayment: string;
  secondPayment: string;
  secondDate: string;
  thirdPayment: string;
  thirdDate: string;
  fourthPayment: string;
  fourthDate: string;
}

export interface TermsConditionsInterface {
  jdArea: string;
  terms: boolean;
}

export interface ReviewDetailInterface {
  additionalInfo: string;
  file: null | File;
}

export interface TransportFormDataTypes {
  contractDate: ContractDateInterface;
  basicDetail: BasicDetailInterface;
  firstPartyDetail: FirstPartyDetailInterface;
  secondPartyDetail: SecondPartyDetailInterface;
  carDetails: CarDetailsInterface;
  priceAndPayments: PriceAndPaymentsInterface;
  installments: InstallmentsInterface;
  termsConditions: TermsConditionsInterface;
}

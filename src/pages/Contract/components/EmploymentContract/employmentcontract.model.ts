export interface ContractDateInterface {
  date: string;
}

export interface firstPartyDetailInterface {
  name: string;
  type: string;
  registrationNum: string;
  issueDate: string;
  issuePlace: string;
  source: string;
  represented: string;
}
export interface secondPartyDetailInterface {
  name: string;
  nationality: string;
  passNumber: string;
  issueDate: string;
  issuePlace: string;
  phone: string;
  email: string;
  POBox: string;
}

export interface jobDetailInterface {
  job: string;
  organization: string;
  branch: string;
  city: string;
}

export type ContractDurationType = "Limited" | "Unlimited" | "";

export interface contractDurationInterface {
  duration: ContractDurationType;
  start?: string;
  end?: string;
}

export interface noticePeriodInterface {
  period: string;
  fee: string;
  isCancellable: boolean;
}

export interface otherBenefitsInterface {
  benefits: string[];
}

export interface AnnualLeaveInterface {
  leave: string;
  terms: boolean;
}

export interface EmploymentFormDataTypes {
  contractDate: ContractDateInterface;
  firstPartyDetail: firstPartyDetailInterface;
  secondPartyDetail: secondPartyDetailInterface;
  jobDetail: jobDetailInterface;
  contractDuration: contractDurationInterface;
  noticePeriod: noticePeriodInterface;
  otherBenefits: otherBenefitsInterface;
  annualLeave: AnnualLeaveInterface;
}

export interface ReviewDetailInterface {
  additionalInfo: string;
  file: null | File;
}

export interface ContractCardDetailType {
  date: string;
  contractType: string;
  category: string;
  type: string;
  fileStatus: string;
  firstPartyDetail: {
    name: string;
    nationalId: string;
    phoneNo: string;
  };
  secondPartyDetail: {
    name: string;
    nationalId: string;
    phoneNo: string;
  };
}

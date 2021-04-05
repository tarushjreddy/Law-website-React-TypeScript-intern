import { ContractCardDetailType } from "./contracts.model";

interface CONTRACTS_DATA_TYPE {
  byAI: ContractCardDetailType[];
  newContract: ContractCardDetailType[];
  reviewContract: ContractCardDetailType[];
}

export const CONTRACTS_DATA: CONTRACTS_DATA_TYPE = {
  byAI: [
    {
      date: "12-March-2020",
      contractType: "Legal Agreement",
      category: "Lawyer Fees",
      type: "Company",
      fileStatus: "",
      firstPartyDetail: {
        name: "First 1",
        nationalId: "first1",
        phoneNo: "1000000001",
      },
      secondPartyDetail: {
        name: "Second 1",
        nationalId: "second1",
        phoneNo: "2000000001",
      },
    },
    {
      date: "13-March-2020",
      contractType: "Legal Agreement",
      category: "Lawyer Fees",
      type: "Company",
      fileStatus: "",
      firstPartyDetail: {
        name: "First 2",
        nationalId: "first2",
        phoneNo: "1000000001",
      },
      secondPartyDetail: {
        name: "Second 2",
        nationalId: "second2",
        phoneNo: "2000000001",
      },
    },
  ],
  newContract: [
    {
      date: "14-March-2020",
      contractType: "Employment Contract",
      category: "Lawyer Fees",
      type: "Company",
      fileStatus: "",
      firstPartyDetail: {
        name: "First 1",
        nationalId: "first1",
        phoneNo: "1000000001",
      },
      secondPartyDetail: {
        name: "Second 1",
        nationalId: "second1",
        phoneNo: "2000000001",
      },
    },
    {
      date: "15-March-2020",
      contractType: "Transport Contract",
      category: "Lawyer Fees",
      type: "personal",
      fileStatus: "",
      firstPartyDetail: {
        name: "First 2",
        nationalId: "first2",
        phoneNo: "1000000001",
      },
      secondPartyDetail: {
        name: "Second 2",
        nationalId: "second2",
        phoneNo: "2000000001",
      },
    },
  ],
  reviewContract: [
    {
      date: "12-March-2020",
      contractType: "Legal Agreement",
      category: "Lawyer Fees",
      type: "Company",
      fileStatus: "In Review",
      firstPartyDetail: {
        name: "First 1",
        nationalId: "first1",
        phoneNo: "1000000001",
      },
      secondPartyDetail: {
        name: "Second 1",
        nationalId: "second1",
        phoneNo: "2000000001",
      },
    },
    {
      date: "16-March-2020",
      contractType: "Transport Contract",
      category: "Lawyer Fees",
      type: "Company",
      fileStatus: "In Review",
      firstPartyDetail: {
        name: "First 2",
        nationalId: "first2",
        phoneNo: "1000000004",
      },
      secondPartyDetail: {
        name: "Second 2",
        nationalId: "second2",
        phoneNo: "2000000005",
      },
    },
  ],
};

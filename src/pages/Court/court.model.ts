export type CourtCategoriesType =
  | "Pleading / Argument"
  | "Memorandum"
  | "Assigning a case"
  | "Case Study"
  | "Mediation"
  | "Others"
  | "";

export interface CaseTypeInterface {
  caseTypeName: string;
}

export interface InformationInterface {
  name: string;
  ID: string;
  address: string;
  mobile: string;
}

export interface CaseDetailsInterface {
  typeofCase: string;
  fillingStatus: string;
  courtDetail: string;
  defendentDetail: string;
}

export interface UerDetailsInterface {
  userType: string;
  companyType: string;
}

export interface SSDetailsInterface {
  serviceType: string;
}

export interface TextInfoInterface {
  textDetail: string;
}

export interface ConsultionTypeInterface {
  type: string;
}

export interface OnlinePlatformInterface {
  platformName: string;
}

export interface OfflinePlatformInterface {
  type: string;
  address: string;
}

export interface AudioType {
  blobUrl: string;
  duration: number;
}

export interface AudioInfoInterface {
  audios: AudioType[];
}

export interface FileInfoInterface {
  files: File[];
}

export interface FormDataInterface {
  caseType: CaseTypeInterface;
  information: InformationInterface;
  caseDetails: CaseDetailsInterface;
  userDetails: UerDetailsInterface;
  sSDetails: SSDetailsInterface;
  audioInfo: AudioInfoInterface;
  fileInfo: FileInfoInterface;
  textInfo: TextInfoInterface;
  consultionType: ConsultionTypeInterface;
  onlinePlatform: OnlinePlatformInterface;
  offlinePlatform: OfflinePlatformInterface;
}

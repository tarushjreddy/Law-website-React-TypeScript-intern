export interface ParamTypes {
  page: string;
}

export interface ApplicationData {
  ID: string;
  address: string;
  city: string;
  consultationType: string;
  date: string;
  domain: string;
  entity: string;
  from: string;
  mode: string;
  name: string;
  pay_link: string;
  phone: string;
  sector: string;
  status: string;
  duration: string;
}

export interface ApplicationState {
  applications: ApplicationData[];
  isLoading: boolean;
}

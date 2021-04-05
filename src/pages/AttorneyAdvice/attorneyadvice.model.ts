export interface EntityDataType {
  entity: any;
  name: string;
  phone: string;
  id: string;
  address: string;
  city: string;
  type: string;
}

export interface SectorDataType {
  sector: string;
  subject: string;
  details: string;
  type: string;
}

export interface SlotDataType {
  date: string;
  fromTime: string;
  toTime: string;
}

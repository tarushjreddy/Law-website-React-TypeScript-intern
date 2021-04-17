// For Login
export interface LoginValues {
  email: string;
  password: string;
}
interface LoginUser {
  _id: string;
  name: string;
  email: string;
  role: string[];
  name_arb: string;
  phone: string;
  phone_arb: string;
  telephone: string;
  telephone_visible: boolean;
  info: {
    title: string;
    title_arb: string;
    profile: string;
    education: [];
    education_arb: [];
    expertise: [];
    expertise_arb: [];
    testimonial: string;
    testimonial_arb: string;
    description: string;
    description_arb: string;
  };
}
export interface LoginResponseFail {
  data: {
    error: string;
    token: string;
  };
  message: string;
  status: string;
}
export interface LoginResponseSuccess {
  data: {
    user: LoginUser;
    token: string;
  };
  message: string;
  status: string;
}

// FOR SignUp
interface SignUpUser {
  _id: string;
  name: string;
  email: string;
  role: string[];
  name_arb: string;
  phone: string;
  phone_arb: string;
  telephone: string;
  info: {
    title: string;
    title_arb: string;
    profile: string;
    education: [];
    education_arb: [];
    expertise: [];
    expertise_arb: [];
    testimonial: string;
    testimonial_arb: string;
    description: string;
    description_arb: string;
  };
}

export interface SignUpValues extends LoginValues {}

export interface SignUpResponseFail {
  data: {
    error: string;
    token: string;
  };
  message: string;
  status: string;
}
export interface SignUpResponseSuccess {
  data: {
    user: SignUpUser;
    token: string;
  };
  message: string;
  status: string;
}

// FOR getAllApplicationsRequests

interface SubServiceId {
  _id: string;
  external_location: {
    type: "Point";
    coordinates: [0, 0];
  };
  service_type: string;
  minutes: 30;
  meeting_date: null;
  remote: false;
  remote_tool: string;
  remote_meeting_link: string;
  in_person: false;
  company_office: null;
  external_place_address: string;
  consultation_accepted: false;
  consultation_payment_link: string;
  consultation_payment_done: false;
  consultation_payment_not_paid_reason: string;
  consultation_feedback_given: false;
  consultation_feedback_satisfied: false;
  consultation_feedback_description: string;
  consultation_rejected: false;
  consultation_rejected_reason: string;
  consultation_rejected_reason_description: string;
  updatedAt: string;
  createdAt: string;
  __v: 0;
}

interface LayerDetail {
  _id: string;
  info: {
    title: string;
    title_arb: string;
    profile: string;
    education: [];
    education_arb: [];
    expertise: [];
    expertise_arb: [];
    testimonial: string;
    testimonial_arb: string;
    description: string;
    description_arb: string;
  };
  name_arb: string;
  email_visible: true;
  isEmailVerified: false;
  phone: string;
  phone_visible: true;
  phone_arb: string;
  isPhoneVerified: false;
  telephone: string;
  telephone_visible: true;
  role: string[];
  status: string;
  expertise: [];
  name: string;
  email: string;
}
interface Slider {
  data: string[];
  button: {
    title: String;
    title_arb: String;
    link: String;
  };
  createdAt: String;
  heading: String;
  heading_arb: String;
  image: String;
  subheading: String;
  subheading_arb: String;
  updatedAt: String;
}


interface TravelInsurance {
  image: String;
  benefits:[
icon: String,
text_arb: String,
text_eng: String,
_id: String


  ];
 
  subtitle: String;
  description: String;
}







interface CustomerProfile {
  _id: string;
  info: {
    title: string;
    title_arb: string;
    profile: string;
    education: [];
    education_arb: [];
    expertise: [];
    expertise_arb: [];
    testimonial: string;
    testimonial_arb: string;
    description: string;
    description_arb: string;
  };
  name: null;
  name_arb: string;
  email_visible: true;
  isEmailVerified: false;
  phone: null;
  phone_visible: true;
  phone_arb: string;
  isPhoneVerified: false;
  telephone: string;
  telephone_visible: true;
  role: string[];
  status: string;
  expertise: [];
  email: string;
}

interface Customer {
  customer_name: string;
  customer_address: string;
  customer_other_info: string;
  customer_phone: string;
  customer_city: string;
  customer_type: string;
  customer_sector: string;
}

interface InternalInfo {
  subject: string;
  description: string;
  files: [];
}

interface Applications {
  _id: string;
  customer: Customer;
  mode: string;
  specialty: string;
  chatId: string;
  sub_serviceId: SubServiceId;
  lawyer_detail: LayerDetail;
  completion_status: number;
  completed_date: null;
  status: string;
  service_accepted: boolean;
  service_payment_amount: string;
  service_payment_created: null;
  service_payment_done_date: null;
  service_payment_done_mode: string;
  service_payment_link: string;
  service_payment_done: boolean;
  service_payment_not_paid_reason: string;
  service_feedback_given: boolean;
  service_feedback_satisfied: boolean;
  service_feedback_description: string;
  name: string;
  type: string;
  sub_type: string;
  customer_profile: CustomerProfile;
  initial_info: InternalInfo;
  updatedAt: string;
  createdAt: string;
  __v: number;
}

export interface GetAllApplicationsResponse {
  status: string;
  message: string;
  data: Applications[];
}

export interface GetAllSliderDetails {
  status: string;
  message: string;
  data: Slider[];
}

export interface GetAllTravelInsurance {
  status: string;
  message: string;
  data: TravelInsurance[];
}
// FOR Update Profile

export interface UpdateProfileValues {
  name: string;
  email?: string;
  mobile: string;
  address?: string;
  typeOfSector?: string;
  commerialRegister?: string;
}

export interface UpdateProfileData {
  _id: string;
  name: string;
  email: string;
  role: string[];
  name_arb: string;
  phone: string;
  phone_arb: string;
  telephone: string;
  email_visible: boolean;
  phone_visible: boolean;
  telephone_visible: boolean;
  info: {
    title: string;
    title_arb: string;
    profile: string;
    education: [];
    education_arb: [];
    expertise: [];
    expertise_arb: [];
    testimonial: string;
    testimonial_arb: string;
    description: string;
    description_arb: string;
  };
}
export interface UpdateProfileResponseSuccess {
  status: string;
  message: string;
  data: UpdateProfileData;
}

// FOR Change Password

export interface ChangePasswordValues {
  current: string;
  new: string;
  confirmNew?: string;
}
export interface ChangePasswordResponseSuccess {
  status: string;
  message: string;
  data: {};
}

// For getAllSectors
interface SectorDataType {
  description: string;
  description_arb: string;
  _id: string;
  name: string;
  name_arb: string;
  updatedAt: string;
  createdAt: string;
}

export interface GetAllSectorsResponseType {
  status: string;
  message: string;
  data: SectorDataType[];
}

// For GetAllEntitiesResponseType
interface EntityDataType {
  name_arb: string;
  _id: string;
  name: string;
  updatedAt: string;
  createdAt: string;
}
export interface GetAllEntitiesResponseType {
  status: string;
  message: string;
  data: EntityDataType[];
}

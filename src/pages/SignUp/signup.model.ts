export interface SignUpValues {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
}

export interface SignUpResponseStatus {
  status: string;
  msg: string;
}

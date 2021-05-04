export interface SignUpValues {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  password: string;
}

export interface SignUpValuesotpone {
  otp_val: string;
}

export interface SignUpResponseStatus {
  status: string;
  msg: string;
}
export interface LoginResponseOTPStatus {
  status: string;

  msg: string;
}

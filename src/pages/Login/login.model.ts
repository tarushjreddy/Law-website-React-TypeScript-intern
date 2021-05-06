export interface LoginValues {
  email: string;
  password: string;
}
export interface otpValues {
  otp: string;
}
export interface LoginResponseStatus {
  status: string;

  msg: string;
}
export interface LoginResponseOTPStatus {
  status: string;

  msg: string;
}

export interface LoginPhoneValues {
  message: string;
  phone: string;
}

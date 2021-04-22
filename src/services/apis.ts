import axios from "axios";

import { API_BASE_URL } from "../constants";
import {
  GetAllApplicationsResponse,
  GetWhatsAppDetails,
  GetAllSliderDetails,
  LoginValues,
  OtpValues,
  OtpResponseSuccess,
  OtpResponseFail,
  SignUpResponseFail,
  GetAllTravelInsurance,
  SignUpResponseSuccess,
  SignUpValues,
  LoginResponseSuccess,
  LoginResponseFail,
  UpdateProfileValues,
  UpdateProfileResponseSuccess,
  ChangePasswordResponseSuccess,
  ChangePasswordValues,
  GetAllEntitiesResponseType,
  GetAllSectorsResponseType,
} from "./models";

export const updateBearToken = () => {
  const AUTH_TOKEN = localStorage.getItem("AUTH_TOKEN");

  axios.defaults.baseURL = API_BASE_URL;
  if (AUTH_TOKEN)
    axios.defaults.headers.common["Authorization"] = `Bearer ${AUTH_TOKEN}`;
};

updateBearToken();

export const login = async (
  loginValues: LoginValues
): Promise<LoginResponseSuccess | LoginResponseFail> => {
  try {
    console.log("this is the request", loginValues);
    const response = await axios.post("/auth/login", loginValues);
    return response.data;
  } catch (error) {
    const errorResponseData = error?.response?.data;
    return errorResponseData;
  }
};

export const Otp = async (
  otpValues: OtpValues
): Promise<OtpResponseSuccess | OtpResponseFail> => {
  try {
    console.log("this is the request", otpValues);
    const response = await axios.post("/auth/login", otpValues);
    return response.data;
  } catch (error) {
    const errorResponseData = error?.response?.data;
    return errorResponseData;
  }
};


export const signUp = async (
  signUpValues: SignUpValues
): Promise<SignUpResponseSuccess | SignUpResponseFail> => {
  try {
    const response = await axios.post("/auth/signup", signUpValues);
    return response.data;
  } catch (error) {
    const errorResponseData = error?.response?.data;
    return errorResponseData;
  }
};











export const getAllApplicationsRequests = async (): Promise<
  GetAllApplicationsResponse
> => {
  try {
    const response = await axios.get<GetAllApplicationsResponse>(
      "/service/all"
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return { data: [], message: "", status: "" };
  }
};


export const getAllSliderDetails = async (): Promise<GetAllSliderDetails> => {
  try {
    const response = await axios.get<GetAllSliderDetails>("/slider/all");
    return response.data;
  } catch (error) {
    console.log(error);
    return { data: [], message: "", status: "" };
  }
};





export const WhatsAppDetails = async (): Promise<GetWhatsAppDetails> => {
  try {
    const response = await axios.get<GetWhatsAppDetails>("/whatsapp");
    return response.data;
  } catch (error) {
    console.log(error);
    return { data: [], message: "", status: "" };

  }
};




export const getAllSectors = async (): Promise<GetAllSectorsResponseType> => {
  try {
    const response = await axios.get("/expertise/all");
    return response.data;
  } catch (error) {
    console.log(error);
    const errorResponseData = error?.response?.data;
    return errorResponseData;
  }
};

export const getAllEntities = async (): Promise<GetAllEntitiesResponseType> => {
  try {
    const response = await axios.get("/type/all");
    return response.data;
  } catch (error) {
    console.log(error);
    const errorResponseData = error?.response?.data;
    return errorResponseData;
  }
};

export const updateUserProfile = async (
  updateProfileValues: UpdateProfileValues
): Promise<UpdateProfileResponseSuccess> => {
  try {
    const response = await axios.post(
      "/auth/update-profile",
      updateProfileValues
    );
    return response.data;
  } catch (error) {
    const errorResponseData = error?.response?.data;
    return errorResponseData;
  }
};

export const TravelInsurance = async (): Promise<GetAllTravelInsurance> => {
  try {
    const response = await axios.get<GetAllTravelInsurance>(
      "/home-service/all"
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return { data: [], message: "", status: "" };
  }
};


export const changePassword = async (
  changePasswordValues: ChangePasswordValues
): Promise<ChangePasswordResponseSuccess> => {
  try {
    const response = await axios.post(
      "/auth/change-password",
      changePasswordValues
    );
    return response.data;
  } catch (error) {
    const errorResponseData = error?.response?.data;
    return errorResponseData;
  }
};

export const updateLegalService = async (requestBody: any, id: any) => {
  try {
    const response = await axios.put(
      API_BASE_URL + "/service/update/" + id,
      requestBody,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
        },
      }
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const registerLegalAdvice = async (
  requestBody: any,
  setResponseState: any,
  responseState: any
) => {
  try {
    const response = await axios.post(
      API_BASE_URL + "/service/create/",
      requestBody,
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("AUTH_TOKEN"),
          "Content-Type": "application/json",
        },
      }
    );
    console.log(response);

    setResponseState({
      ...responseState,
      ...response.data,
    });

    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
};

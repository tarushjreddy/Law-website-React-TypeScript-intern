import { updateBearToken } from "../services/apis";
import { LoginResponseSuccess } from "../services/models";

export const setUserDetailReducer = (global: any, dispatch: any) => {
  const USER_DATA: LoginResponseSuccess = JSON.parse(
    localStorage.getItem("USER_DATA") || "{}"
  );

  const isLoginned = !!localStorage.getItem("AUTH_TOKEN");

  const userDetail = {
    name: "",
    mobile: "",
    email: "",
    isLoginned: isLoginned,
  };

  if (isLoginned && USER_DATA.data) {
    const {
      data: { user },
    } = USER_DATA;

    userDetail.email = user.email;
    userDetail.name = user.name;
    userDetail.mobile = user.phone;
    userDetail.isLoginned = isLoginned;
  }

  updateBearToken();

  return {
    ...global,
    userDetail: {
      ...userDetail,
    },
  };
};

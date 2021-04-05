import "reactn";

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

interface UserDetail {
  name: string;
  email: string;
  mobile: string;
  isLoginned: boolean;
}

declare module "reactn/default" {
  export interface Reducers {
    append: (
      global: State,
      dispatch: Dispatch,
      ...strings: any[]
    ) => Pick<State, "value">;

    increment: (
      global: State,
      dispatch: Dispatch,
      i: number
    ) => Pick<State, "count">;

    doNothing: (global: State, dispatch: Dispatch) => null;
  }

  export interface State {
    userDetail: UserDetail;
  }
}

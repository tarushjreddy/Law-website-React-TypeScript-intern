import React, { useGlobal } from "reactn";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import DashboardPage from "./pages/Dashboard";
import AttorneyAdvicePage from "./pages/AttorneyAdvice";
import ContactUsPage from "./pages/ContactUs";
import HelpPage from "./pages/Help";
import OurServicePage from "./pages/OurServices";
import ContractPage from "./pages/Contract";
import CourtPage from "./pages/Court";

interface PrivateRouteProps {
  component: React.FC;
  exact?: boolean;
  path: string;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  ...rest
}) => {
  console.log("USER : :", useGlobal("userDetail"));

  const { isLoginned } = useGlobal("userDetail")[0];

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoginned ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/advice" component={AttorneyAdvicePage} />
        <PrivateRoute exact path="/dashboard" component={DashboardPage} />
        <PrivateRoute exact path="/dashboard/:page" component={DashboardPage} />
        <Route exact path="/contact" component={ContactUsPage} />
        <Route exact path="/help" component={HelpPage} />
        <Route exact path="/services" component={OurServicePage} />
        <Route exact path="/contract" component={ContractPage} />
        <Route exact path="/court" component={CourtPage} />
      </Switch>
    </div>
  );
};

export default Routes;

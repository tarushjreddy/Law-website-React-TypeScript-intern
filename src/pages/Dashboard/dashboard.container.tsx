import React from "react";
import { useParams } from "react-router-dom";

import DashboardView from "./dashboard.view";
import { ParamTypes } from "./dashboard.model";

const Dashboard = () => {
  const { page } = useParams<ParamTypes>();

  return <DashboardView page={page} />;
};

export default Dashboard;

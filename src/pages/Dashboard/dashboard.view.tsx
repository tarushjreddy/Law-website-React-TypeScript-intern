import React from "react";

import styles from "./dashboard.module.scss";
import LinkDrawer from "./components/LinkDrawer";
import ApplicationContainer from "./components/ApplicationContainer";
import ProfileContainer from "./components/ProfileContainer";
import Nav from "../../components/Nav";
import Home from "./components/Home";
import Contracts from "./components/Contracts";

interface DashboardViewProps {
  page: string;
}

const DashboardView: React.FC<DashboardViewProps> = ({ page = "" }) => {
  return (
    <div className={styles["dashContainer"]}>
      <Nav defaultScrolled={true} />
      <div className={styles["rootDashboard"]}>
        <LinkDrawer />
        <main
          className={styles["content"]}
          style={{
            paddingTop: "10em",

            background: "transparent",
            height: "100vh",
          }}
        >
          <div>
            <div className={styles["rightRoot"]}>
              <div className={styles["rightContent"]}>
                {page === "" && <Home />}
                {page === "profile" && <ProfileContainer />}
                {page === "services" && <ApplicationContainer />}
                {page === "contracts" && <Contracts />}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardView;

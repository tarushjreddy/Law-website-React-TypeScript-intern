import React, { useEffect, useState } from "react";

import {
  getAllApplicationsRequests,
  getAllEntities,
  getAllSectors,
} from "../../../../services/apis";
import { ApplicationData, ApplicationState } from "../../dashboard.model";
import Loading from "../Loading";

import ApplicationContainerView from "./applicationcontainer.view";
import Application from "./components/Application";

const ApplicationContainer = () => {
  const [applicationsState, setApplicationState] = useState<ApplicationState>({
    applications: [],
    isLoading: true,
  });

  interface SectorState {
    id: string;
    name: string;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [sectorState, setSectorState] = useState<SectorState[]>([]);

  const getEntity = (id: string, ents: SectorState[]): string => {
    for (let el of ents) {
      if (el.id === id) {
        return el.name;
      }
    }
    return "";
  };

  const getSector = (id: string, sects: SectorState[]) => {
    for (let el of sects) {
      if (el.id === id) {
        return el.name;
      }
    }

    return "";
  };

  const formatDate = (date: string) => {
    const index = date.indexOf("T");
    date = date.slice(0, index);

    return date;
  };

  const getStatusText = (status: string) => {
    let statusText = "";

    if (status === "200") statusText = "Accepted";
    else if (status === "pending_approval") statusText = "Pending";
    else statusText = "Ongoing";

    return statusText;
  };

  useEffect(() => {
    async function getData() {
      // const id = await getProfileId();
      const applications = await getAllApplicationsRequests();
      const sectors = await getAllSectors();
      const entities = await getAllEntities();
      console.log(entities);
      let sects = [];
      let ents = [];
      for (let el of sectors.data) {
        sects.push({ id: el._id, name: el.name });
      }
      for (let el of entities.data) {
        ents.push({ id: el._id, name: el.name });
      }
      setSectorState(sects);
      console.log(ents);
      console.log(applications);

      let apps: ApplicationData[] = [];
      if (applications) {
        for (let el of applications.data) {
          let app: ApplicationData = {
            consultationType: el.mode === "verbal" ? "Verbal" : "Written",
            entity: getEntity(el.customer.customer_type, ents),
            sector: getSector(el.customer.customer_sector, sects),
            date: formatDate(el.createdAt),
            status: getStatusText(el.status),
            name: el.customer.customer_name,
            phone: el.customer.customer_phone,
            ID: "ABC1234",
            address: el.customer.customer_address,
            city: el.customer.customer_city,
            domain: getSector(el.customer.customer_sector, sects),
            from: "10:00 A.M",
            duration: "30",
            mode: el.sub_serviceId?.remote ? "Online" : "Offline",
            pay_link: el.service_payment_link,
          };
          apps.push(app);
        }
      }

      console.log("APPLICATIONS : ", apps);

      setApplicationState({
        applications: apps,
        isLoading: false,
      });
    }

    getData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startIndex = () => {
    if (window.location.hash === "#ongoing") return 1;
    else if (window.location.hash === "#complete") return 2;
    else return 0;
  };

  const [value, setValue] = React.useState(startIndex());
  const [pending, setPending] = React.useState(true);
  const [outgoing, setOutgoing] = React.useState(false);
  const [completed, setCompleted] = React.useState(false);
  const [locationHash, setLocationHash] = React.useState(
    window.location.hash || "#pending"
  );

  const handleChangeHash = (hash: string) => {
    setLocationHash(hash);
  };

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    if (newValue === 0) {
      setPending(true);
      setOutgoing(false);
      setCompleted(false);
    } else if (newValue === 1) {
      setOutgoing(true);
      setPending(false);
      setCompleted(false);
    } else {
      setCompleted(true);
      setOutgoing(false);
      setPending(false);
    }
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const getFilteredApplicationsCode = (filterText: string) => {
    if (applicationsState.isLoading === true) return <Loading />;
    if (applicationsState.applications.length === 0)
      return <Loading text="No Application Found" />;

    return applicationsState.applications
      .filter((application, index) => application.status === filterText)
      .map((application: ApplicationData, index: number) => {
        return <Application key={index} data={application} />;
      });
  };

  return (
    <ApplicationContainerView
      completed={completed}
      getFilteredApplicationsCode={getFilteredApplicationsCode}
      handleChange={handleChange}
      handleChangeIndex={handleChangeIndex}
      outgoing={outgoing}
      pending={pending}
      value={value}
      handleChangeHash={handleChangeHash}
      locationHash={locationHash}
    />
  );
};

export default ApplicationContainer;

import React from "react";

import ProfileContainerView from "./profilecontainer.view";

const ProfileContainer = () => {
  const [locationHash, setLocationHash] = React.useState(
    window.location.hash || "#upadteProfile"
  );

  const handleChangeIndex = (hash: string) => {
    setLocationHash(hash);
  };

  return (
    <ProfileContainerView
      handleChangeIndex={handleChangeIndex}
      locationHash={locationHash}
    />
  );
};

export default ProfileContainer;

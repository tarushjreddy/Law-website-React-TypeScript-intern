import React from "react";

interface ServicesListItemGoldProps {
  serviceName: string;
}

const ServicesListItemGold: React.FC<ServicesListItemGoldProps> = ({
  serviceName,
}) => {
  return (
    <div
      className="card-shadow-container-row"
      style={{ padding: "7.1px", marginBottom: "-20px" }}
    >
      <div
        className="card btnGold"
        style={{
          color: "white",
          borderRadius: "5px",
          backgroundImage: "linear-gradient(to left, #b8a046, #876f18)",
          padding: "5px",
          width: "40%",
          margin: "10px",
        }}
      >
        {serviceName}
      </div>
    </div>
  );
};

export default ServicesListItemGold;

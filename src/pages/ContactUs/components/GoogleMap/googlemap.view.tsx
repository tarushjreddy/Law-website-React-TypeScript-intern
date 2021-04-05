import React from "react";

interface GoogleMapViewProps {
  mapSrc: string;
}

const GoogleMapView: React.FC<GoogleMapViewProps> = ({ mapSrc }) => {
  return (
    <iframe
      width="100%"
      height="100%"
      title="map"
      className="absolute inset-0"
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
      scrolling="no"
      src={mapSrc}
      style={{ filter: "greyscale(100%)" }}
    ></iframe>
  );
};

export default GoogleMapView;

import React from "react";

interface CustomTabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
  style?: any;
}

const CustomTabPanelView: React.FC<CustomTabPanelProps> = ({
  children,
  value,
  index,
  ...other
}) => {
  return (
    <div
      dir={localStorage.getItem("lang") === "ar" ? "rtl" : "ltr"}
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <div className="p-4">
          <div
            style={{
              fontSize: "1rem",
              fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
              fontWeight: 400,
              lineHeight: 1.5,
              letterSpacing: "0.00938em",
            }}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomTabPanelView;

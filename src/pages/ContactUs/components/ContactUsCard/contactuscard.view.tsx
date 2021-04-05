import React from "react";

interface ContactUsCardViewProps {
  cardIcon: string;
  cardName: string;
}

const ContactUsCardView: React.FC<ContactUsCardViewProps> = ({
  cardIcon,
  cardName,
}) => {
  return (
    <section className="row" style={{ margin: "4vh 8vh 0 0 " }}>
      <img
        src={cardIcon}
        alt="cardIcon"
        style={{ width: "10vh", marginRight: "20px" }}
      />
      <h3 style={{ fontSize: "3vh", marginTop: "1vh" }}>{cardName}</h3>
    </section>
  );
};

export default ContactUsCardView;

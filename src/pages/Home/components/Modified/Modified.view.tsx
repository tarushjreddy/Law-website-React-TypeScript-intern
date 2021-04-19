import React, { useEffect, useState } from "react";
import styles from "./Modified.module.scss";
import imgpro from "./pexels-eberhard-grossgasteiger-691668.jpg";
//  className={`${styles["si\]UpContainer"]}`}
import { createUseStyles } from "react-jss";
import { TravelInsurance } from "../../../../services/apis";

// import { TravelInsurance } from "../../../../services/models";
interface CustomInputFieldProps {
  styling: String;
}

const Modified: React.FC<CustomInputFieldProps> = ({ styling }) => {
  const [Headding, setHeadding] = useState("");
  const [details, setdetails] = useState<any[]>([]);
  const [subHeadding, setsubHeadding] = useState<any[]>([]);

  useEffect(() => {
    async function getData() {
      const data = await TravelInsurance();

      let abc1 = data.data[0];
      setHeadding(`${abc1}`);
      setdetails([data.data[0]]);

      setsubHeadding([...data.data[0].benefits]);
    }
    window.dispatchEvent(new Event("resize"));

    getData();
  }, []);
  let abc = 2;

  console.log("anything", details);

  const useStyles = createUseStyles({
    App: {
      flexDirection: `(${abc === 1}? 'row' : 'row-reverse')`,

      color: "red",
      height: "100%",
      marginTop: "40px",

      display: "flex",
      flexWrap: "inherit",

      justifyContent: "space-between",
    },
  });

  const classes = useStyles();
  return (
    <>
      {details.map((post) => (
        <div className={classes.App} id={`${styles["Maincontainer"]}`}>
          <div className={`${styles["leftContainer"]}`}>
            <h1 className={`${styles["header"]}`}>{post.title}</h1>
            <p className={`${styles["paragraph"]}`}>{post.subtitle}</p>
            <p className={`${styles["divider_text"]}`}>Main benefits:</p>
            <hr className={`${styles["divider"]}`} />
            <div className={`${styles["logo_option"]}`} style={{}}>
              {subHeadding.map((post) => (
                <div className={`${styles["logo_parts"]}`}>
                  <div className={`${styles["info"]}`}>
                    <img
                      src={post.icon}
                      className={`${styles["logo_rounded"]}`}
                    ></img>
                    <div className={`${styles["logo_rounded_info"]}`}>
                      {post.text_eng}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <hr className={`${styles["divider"]}`} />
            <button className={`${styles["Button_part"]}`}>Lets do it</button>
          </div>
          <div className={`${styles["rightConatiner"]}`}>
            <img src={post.image} alt="" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Modified;

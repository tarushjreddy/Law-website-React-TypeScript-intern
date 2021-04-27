import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";

import { TravelInsurance } from "../../../../../services/apis";
import styles from "../Modified.module.scss";
import "./ret.scss";
// import "./ret.scss";
function Retrival() {
  const [posts, setposts] = useState<any[]>([]);

  useEffect(() => {
    async function getData() {
      const data = await TravelInsurance();

      console.log(data.data);
      setposts(data.data);
    }
    window.dispatchEvent(new Event("resize"));

    getData();
  }, []);
  console.log(posts.length);
  let abc = 1;
  const useStyles = createUseStyles({
    App: {
      color: "red",
      height: "100%",
      marginTop: "40px",

      display: "flex",
      flexWrap: "inherit",

      justifyContent: "space-between",
    },
    Appone: {
      //   flexDirection: `(${abc === 1}? 'row' : 'row-reverse')`,
      flexDirection: `row`,

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
    <div>
      <div className="media_off">
        {posts.map((data, i) => (
          <>
            <div className={`${styles["media_off"]}`}>
              <div
                // className={`${i % 2 !== 0}? ${classes.Appone}:${classes.App}`}
                className={classes.App}
                // id={
                //   i % 2 === 0
                //     ? `${styles["Maincontainerone"]}`
                //     : `${styles["Maincontainer"]}`
                // }
                style={{
                  flexDirection: i % 2 === 0 ? "row" : "row-reverse",
                  marginRight: "6.6rem",
                  marginLeft: "6.6rem",
                }}
                //   style={{ flexDirection: `(${abc === 1}? 'row' : 'row-reverse')` }}
              >
                <div className={`${styles["leftContainer"]}`}>
                  <h1 className={`${styles["header"]}`}>{data.title}</h1>
                  <p className={`${styles["paragraph"]}`}>{data.subtitle}</p>
                  <p className={`${styles["divider_text"]}`}>Main benefits:</p>
                  <hr className={`${styles["divider"]}`} />
                  <div className={`${styles["logo_option"]}`} style={{}}>
                    {/* {subHeadding.map((post) => ( */}
                    <div className={`${styles["logo_parts"]}`}>
                      <div
                        style={{
                          display: "flex",
                          backgroundColor: "transparent",
                          width: "100%",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <div className={`${styles["info"]}`}>
                          <img
                            src={data.benefits[0].icon}
                            className={`${styles["logo_rounded"]}`}
                          ></img>
                          <div className={`${styles["logo_rounded_info"]}`}>
                            {data.benefits[0].text_eng}
                          </div>
                        </div>

                        <div className={`${styles["info"]}`}>
                          <img
                            src={data.benefits[1].icon}
                            className={`${styles["logo_rounded"]}`}
                          ></img>
                          <div className={`${styles["logo_rounded_info"]}`}>
                            {data.benefits[1].text_eng}
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          backgroundColor: "transparent",
                          width: "100%",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <div className={`${styles["info"]}`}>
                          <img
                            src={data.benefits[2].icon}
                            className={`${styles["logo_rounded"]}`}
                          ></img>
                          <div className={`${styles["logo_rounded_info"]}`}>
                            {data.benefits[2].text_eng}
                          </div>
                        </div>

                        <div className={`${styles["info"]}`}>
                          <img
                            src={data.benefits[3].icon}
                            className={`${styles["logo_rounded"]}`}
                          ></img>
                          <div className={`${styles["logo_rounded_info"]}`}>
                            {data.benefits[3].text_eng}
                          </div>
                        </div>
                      </div>

                      {/* {console.log("mainone", data.benefits[5]._id)} */}
                      {/* {console.log("mainone", data.benefits[4].text_eng)} */}
                      <div
                        style={{
                          display: "flex",
                          backgroundColor: "transparent",
                          width: "100%",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <div className={`${styles["info"]}`}>
                          <img
                            src={data.benefits[4].icon}
                            className={`${styles["logo_rounded"]}`}
                          ></img>
                          <div
                            className={`${styles["logo_rounded_info"]}`}
                            style={{ minWidth: "40px" }}
                          >
                            {data.benefits[4].text_eng}
                          </div>
                        </div>

                        <div
                          className={`${styles["info"]}`}
                          style={{ marginLeft: "20px" }}
                        >
                          <img
                            src={data.benefits[5].icon}
                            className={`${styles["logo_rounded"]}`}
                          ></img>
                          <div className={`${styles["logo_rounded_info"]}`}>
                            {data.benefits[5].text_eng}
                          </div>
                        </div>
                      </div>
                      {/* <div className={`${styles["info"]}`}>
                  <img
                    src={data.benefits[6].icon}
                    className={`${styles["logo_rounded"]}`}
                  ></img>
                  <div className={`${styles["logo_rounded_info"]}`}>
                    {data.benefits[6].text_eng}
                  </div>
                </div> */}
                    </div>
                    {/*  ))}*/}
                  </div>
                  <hr className={`${styles["divider"]}`} />
                  <button className={`${styles["Button_part"]}`}>
                    {data.button.title}
                  </button>
                </div>
                <div className={`${styles["rightConatiner"]}`}>
                  <img src={data.image} alt="" />
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <div className={`${styles["media_on"]}`}>
        {posts.map((data, i) => (
          <div className="media_on">
            <div
              // className={`${i % 2 !== 0}? ${classes.Appone}:${classes.App}`}
              className={classes.App}
              // id={
              //   i % 2 === 0
              //     ? `${styles["Maincontainerone"]}`
              //     : `${styles["Maincontainer"]}`
              // }
              style={{
                flexDirection: "column-reverse",
                display: "flex",
                alignItems: "center",

                justifyContent: "center",
                margin: "2.3rem",
              }}
              //   style={{ flexDirection: `(${abc === 1}? 'row' : 'row-reverse')` }}
            >
              <div
                // className={`${styles["leftContainer"]}`}
                id="leftContainer_pro"
              >
                <h1 className={`${styles["header"]}`} id="header_text">
                  {data.title}
                </h1>
                <p className={`${styles["paragraph"]}`} id="paragraph_pro">
                  {data.subtitle}
                </p>
                <p className={`${styles["divider_text"]}`}>Main benefits:</p>
                <hr className={`${styles["divider"]}`} />
                <div id="logo_option_pro" style={{}}>
                  {/* {subHeadding.map((post) => ( */}
                  <div className={`${styles["logo_parts"]}`}>
                    <div
                      style={{
                        display: "flex",
                        backgroundColor: "transparent",
                        width: "100%",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className={`${styles["info"]}`}>
                        <img
                          src={data.benefits[0].icon}
                          className={`${styles["logo_rounded"]}`}
                        ></img>
                        <div className={`${styles["logo_rounded_info"]}`}>
                          {data.benefits[0].text_eng}
                        </div>
                      </div>

                      <div className={`${styles["info"]}`}>
                        <img
                          src={data.benefits[1].icon}
                          className={`${styles["logo_rounded"]}`}
                        ></img>
                        <div className={`${styles["logo_rounded_info"]}`}>
                          {data.benefits[1].text_eng}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        backgroundColor: "transparent",
                        width: "100%",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className={`${styles["info"]}`}>
                        <img
                          src={data.benefits[2].icon}
                          className={`${styles["logo_rounded"]}`}
                        ></img>
                        <div className={`${styles["logo_rounded_info"]}`}>
                          {data.benefits[2].text_eng}
                        </div>
                      </div>

                      <div className={`${styles["info"]}`}>
                        <img
                          src={data.benefits[3].icon}
                          className={`${styles["logo_rounded"]}`}
                          id="info_pro_max"
                        ></img>
                        <div className={`${styles["logo_rounded_info"]}`}>
                          {data.benefits[3].text_eng}
                        </div>
                      </div>
                    </div>

                    {/* {console.log("mainone", data.benefits[5]._id)} */}
                    {/* {console.log("mainone", data.benefits[4].text_eng)} */}
                    <div
                      style={{
                        display: "flex",
                        backgroundColor: "transparent",
                        width: "100%",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                      <div className={`${styles["info"]}`}>
                        <img
                          src={data.benefits[4].icon}
                          className={`${styles["logo_rounded"]}`}
                        ></img>
                        <div className={`${styles["logo_rounded_info"]}`}>
                          {data.benefits[4].text_eng}
                        </div>
                      </div>

                      <div className={`${styles["info"]}`}>
                        <img
                          src={data.benefits[5].icon}
                          className={`${styles["logo_rounded"]}`}
                        ></img>
                        <div className={`${styles["logo_rounded_info"]}`}>
                          {data.benefits[5].text_eng}
                        </div>
                      </div>
                    </div>
                    {/* <div className={`${styles["info"]}`}>
                  <img
                    src={data.benefits[6].icon}
                    className={`${styles["logo_rounded"]}`}
                  ></img>
                  <div className={`${styles["logo_rounded_info"]}`}>
                    {data.benefits[6].text_eng}
                  </div>
                </div> */}
                  </div>
                  {/*  ))}*/}
                </div>
                <hr className={`${styles["divider"]}`} />
                <button id="button_part_pro">{data.button.title}</button>
              </div>
              <div
                className={`${styles["rightConatiner"]}`}
                id="image_holder_pro"
              >
                <img src={data.image} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Retrival;

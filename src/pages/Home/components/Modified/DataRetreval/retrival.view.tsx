import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TravelInsurance } from "../../../../../services/apis";
import styles from "../Modified.module.scss";
import "./ret.scss";
// import "./ret.scss";
function Retrival() {
  const lang = localStorage.getItem("lang") || "en";
  console.log(lang, "this is the language");
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
                  // marginRight: "6.6rem",
                  alignItems: "center",
                  // marginLeft: "6.6rem",
                }}
                //   style={{ flexDirection: `(${abc === 1}? 'row' : 'row-reverse')` }}
              >
                <div className={`${styles["leftContainer"]}`}>
                  <div
                    className={`${styles["header"]}`}
                    id="header_text_desktop"
                  >
                    {lang === "en" ? data.title : data.title_arb}
                  </div>
                  <p className={`${styles["paragraph"]}`}>
                    {lang === "en" ? data.subtitle : data.subtitle_arb}
                  </p>
                  <p className={`${styles["divider_text"]}`}>Main benefits:</p>
                  <hr className={`${styles["divider"]}`} />
                  <div className={`${styles["logo_option"]}`} style={{}}>
                    {/* {subHeadding.map((post) => ( */}
                    <div className={`${styles["logo_parts"]}`}>
                      <Container
                      // style={{
                      //   display: "flex",
                      //   backgroundColor: "transparent",
                      //   width: "100%",
                      //   flexDirection: "row",
                      //   justifyContent: "space-between",
                      // }}
                      >
                        <Row xs={1} md={2}>
                          <Col className={`${styles["info"]}`}>
                            <img
                              src={data.benefits[0].icon}
                              className={`${styles["logo_rounded"]}`}
                            ></img>
                            <div className={`${styles["logo_rounded_info"]}`}>
                              {lang === "en"
                                ? data.benefits[0].text_eng
                                : data.benefits[0].text_arb}
                            </div>
                          </Col>

                          <Col className={`${styles["info"]}`}>
                            <img
                              src={data.benefits[1].icon}
                              className={`${styles["logo_rounded"]}`}
                            ></img>

                            <div className={`${styles["logo_rounded_info"]}`}>
                              {lang === "en"
                                ? data.benefits[1].text_eng
                                : data.benefits[1].text_arb}
                            </div>
                          </Col>
                          {/* </Row>
                        <Row> */}
                          <Col className={`${styles["info"]}`}>
                            <img
                              src={data.benefits[2].icon}
                              className={`${styles["logo_rounded"]}`}
                            ></img>
                            <div className={`${styles["logo_rounded_info"]}`}>
                              {lang === "en"
                                ? data.benefits[2].text_eng
                                : data.benefits[2].text_arb}
                            </div>
                          </Col>
                          <Col className={`${styles["info"]}`}>
                            <img
                              src={data.benefits[3].icon}
                              className={`${styles["logo_rounded"]}`}
                            ></img>
                            <div className={`${styles["logo_rounded_info"]}`}>
                              {lang === "en"
                                ? data.benefits[3].text_eng
                                : data.benefits[3].text_arb}
                            </div>
                          </Col>
                          <Col className={`${styles["info"]}`}>
                            <img
                              src={data.benefits[4].icon}
                              className={`${styles["logo_rounded"]}`}
                            ></img>
                            <div
                              className={`${styles["logo_rounded_info"]}`}
                              // style={{ minWidth: "40px" }}
                            >
                              {lang === "en"
                                ? data.benefits[4].text_eng
                                : data.benefits[4].text_arb}
                            </div>
                          </Col>
                          <Col
                            className={`${styles["info"]} `}
                            // style={{ marginLeft: "10px" }}
                          >
                            <img
                              src={data.benefits[5].icon}
                              className={`${styles["logo_rounded"]}`}
                              // style={{ marginRight: "15px" }}
                            />
                            <div
                              className={`${styles["last-info-fix"]} `}
                              // style={{ marginLeft: "15px" }}
                            >
                              {lang === "en"
                                ? data.benefits[5].text_eng
                                : data.benefits[5].text_arb}
                            </div>
                          </Col>
                        </Row>
                      </Container>
                      {/* <div
                        style={{
                          display: "flex",
                          backgroundColor: "transparent",
                          width: "100%",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        
                      </div> */}

                      {/* {console.log("mainone", data.benefits[5]._id)} */}
                      {/* {console.log("mainone", data.benefits[4].text_eng)} */}
                      {/* <div
                        style={{
                          display: "flex",
                          backgroundColor: "transparent",
                          width: "100%",
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      ></div> */}
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
                  <a href={`${data.button.link}`} target="_blank">
                    <button className={`${styles["Button_part"]}`}>
                      {lang === "en"
                        ? data.button.title
                        : data.button.title_arb}
                    </button>
                  </a>
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
                <h2 className={`${styles["header"]}`} id="header_text">
                  {data.title}
                </h2>
                <p className={`${styles["paragraph"]}`} id="paragraph_pro">
                  {data.subtitle}
                </p>
                <p className={`${styles["divider_text"]}`}>Main benefits:</p>
                <hr className={`${styles["divider"]}`} />
                <div id="logo_option_pro" style={{}}>
                  {/* {subHeadding.map((post) => ( */}
                  <div className={`${styles["logo_parts"]}`}>
                    <Container
                    // style={{
                    //   display: "flex",
                    //   backgroundColor: "transparent",
                    //   width: "100%",
                    //   flexDirection: "row",
                    //   justifyContent: "space-between",
                    // }}
                    >
                      <Row xs={2} md={2}>
                        <Col className={`${styles["info"]}`}>
                          <img
                            src={data.benefits[0].icon}
                            className={`${styles["logo_rounded"]}`}
                          ></img>
                          <div className={`${styles["logo_rounded_info"]}`}>
                            {data.benefits[0].text_eng}
                          </div>
                        </Col>

                        <Col className={`${styles["info"]}`}>
                          <img
                            src={data.benefits[1].icon}
                            className={`${styles["logo_rounded"]}`}
                          ></img>
                          <div className={`${styles["logo_rounded_info"]}`}>
                            {data.benefits[1].text_eng}
                          </div>
                        </Col>

                        <Col className={`${styles["info"]}`}>
                          <img
                            src={data.benefits[2].icon}
                            className={`${styles["logo_rounded"]}`}
                          ></img>
                          <div className={`${styles["logo_rounded_info"]}`}>
                            {data.benefits[2].text_eng}
                          </div>
                        </Col>

                        <Col className={`${styles["info"]}`}>
                          <img
                            src={data.benefits[3].icon}
                            className={`${styles["logo_rounded"]}`}
                          ></img>
                          <div className={`${styles["logo_rounded_info"]}`}>
                            {data.benefits[3].text_eng}
                          </div>
                        </Col>

                        <Col className={`${styles["info"]}`}>
                          <img
                            src={data.benefits[4].icon}
                            className={`${styles["logo_rounded"]}`}
                          ></img>
                          <div className={`${styles["logo_rounded_info"]}`}>
                            {data.benefits[4].text_eng}
                          </div>
                        </Col>

                        <Col className={`${styles["info"]}`}>
                          <img
                            src={data.benefits[5].icon}
                            className={`${styles["logo_rounded"]}`}
                          ></img>
                          <div className={`${styles["last-info-fix"]}`}>
                            {data.benefits[5].text_eng}
                          </div>
                        </Col>
                      </Row>
                    </Container>
                    {/* <div
                      style={{
                        display: "flex",
                        backgroundColor: "transparent",
                        width: "100%",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >
                    </div> */}

                    {/* {console.log("mainone", data.benefits[5]._id)} */}
                    {/* {console.log("mainone", data.benefits[4].text_eng)} */}
                    {/* <div
                      style={{
                        display: "flex",
                        backgroundColor: "transparent",
                        width: "100%",
                        flexDirection: "row",
                        justifyContent: "space-between",
                      }}
                    >                      
                    </div> */}
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

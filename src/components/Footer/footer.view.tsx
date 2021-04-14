// import React from "react";
// import WhatsAppIcon from "@material-ui/icons/WhatsApp";
// const FooterView = () => {
//   return (
//     <footer>
//       <div className="my-address">
//         <div className="container">
//           <div className="my-address-content ">
//             <div style={{ display: "flex", flexDirection: "row" }}>
//               <div className="col-sm-12 col-md-4">
//                 <div className="my-add-element">
//                   <div className="my-add-head">
//                     <img src="media/images/location-icon.png" alt="address" />
//                     Address
//                   </div>
//                   <div className="my-add-body">
//                     King Abdullah Road - Al Zagzouq <br />
//                     Business Tower - Jeddah
//                   </div>
//                 </div>
//               </div>
//               <div className="col-sm-12 col-md-4 my-add-mid">
//                 <div className="my-add-element">
//                   <div className="my-add-head">
//                     <img src="media/images/email-icon.png" alt="" />
//                     Email Address
//                   </div>
//                   <div className="my-add-body">
//                     info@almuehi.com <br />
//                     support@almuehi.com
//                   </div>
//                 </div>
//               </div>
//               <div className="col-sm-12 col-md-4">
//                 <div className="my-add-element">
//                   <div className="my-add-head">
//                     <img src="media/images/Phone-icon.png" alt="" />
//                     Phone
//                   </div>
//                   <div className="my-add-body">
//                     <a href="tel:+966 920008434">+966 920008434</a>
//                   </div>
//                 </div>
//               </div>

//               <div className="col-sm-12 col-md-4">
//                 <div className="my-add-element">
//                   <div className="my-add-head">
//                     <WhatsAppIcon
//                       style={{
//                         fontSize: "35px",
//                         color: "#b8a046",
//                         marginRight: "10px",
//                       }}
//                     />
//                     Whatsapp
//                   </div>
//                   <div className="my-add-body">
//                     <a href="tel:+966 920008434">+966 920008434</a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container">
//         <div className="my-footer">
//           <div className="row">
//             <div className="col-sm-12 col-md-3">
//               <div className="footer-link-section">
//                 <h1>Company</h1>
//                 <ul className="footer-ul">
//                   <li className="foot-link">
//                     {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//                     <a href="#">About Legalzoom</a>
//                   </li>
//                   <li className="foot-link">
//                     {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//                     <a href="#">Contact Us</a>
//                   </li>
//                   <li className="foot-link">
//                     {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//                     <a href="#">Latest Blog</a>
//                   </li>
//                   <li className="foot-link">
//                     {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//                     <a href="#">Terms &amp; Conditions</a>
//                   </li>
//                   <li className="foot-link">
//                     {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//                     <a href="#">Privacy Policy</a>
//                   </li>
//                   <li className="foot-link">
//                     {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//                     <a href="#">Payment Policy</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-sm-12 col-md-3">
//               <div className="footer-link-section">
//                 <h1>Support</h1>
//                 <ul className="footer-ul">
//                   <li className="foot-link">
//                     {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//                     <a href="#">Order Status</a>
//                   </li>
//                   <li className="foot-link">
//                     {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//                     <a href="#">Customer Care</a>
//                   </li>
//                   <li className="foot-link">
//                     {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//                     <a href="#">Speak with an attorney</a>
//                   </li>
//                   <li className="foot-link">
//                     {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//                     <a href="#">join our attorney team</a>
//                   </li>
//                   <li className="foot-link">
//                     {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//                     <a href="#">Question &amp; Answer</a>
//                   </li>
//                   <li className="foot-link">
//                     {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//                     <a href="#">See all services</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-sm-12 col-md-3">
//               <div className="footer-link-section">
//                 <h1>Quick Links</h1>
//                 <ul className="footer-ul">
//                   <li className="foot-link">
//                     {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//                     <a href="#">Knowdege center</a>
//                   </li>
//                   <li className="foot-link">
//                     {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//                     <a href="#">Populer service</a>
//                   </li>
//                   <li className="foot-link">
//                     {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//                     <a href="#">Life plan</a>
//                   </li>
//                   <li className="foot-link">
//                     {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//                     <a href="#">Addisional Resources</a>
//                   </li>
//                   <li className="foot-link">
//                     {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//                     <a href="#">Legal forms</a>
//                   </li>
//                   <li className="foot-link">
//                     {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
//                     <a href="#">Life Plan</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-sm-12 col-md-3">
//               <div className="footer-link-section social-lnk">
//                 <h1>About Al-Muehi</h1>
//                 <p>
//                   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Quisquam veritatis esse magni cumque quae recusandae
//                   consequuntur, aspernatur vel dolorem! Eligendi illum
//                   voluptatem necessitatibus
//                 </p>
//                 <a href="www.facebook.com/">
//                   <i className="fa fa-facebook" />
//                 </a>
//                 <a href="www.twitter.com/">
//                   <i className="fa fa-twitter" />
//                 </a>
//                 <a href="www.youtube.com/">
//                   <i className="fa fa-youtube" />
//                 </a>
//                 <a href="www.linkedin.com/">
//                   <i className="fa fa-linkedin" />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="my-copy-right">
//           <p>
//             &copy; {new Date().getFullYear()} Al-Muhei | All Rights Reserved
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default FooterView;

import React from "react";
import "./fotter.scss";
const FooterView = () => {
  return (
    <footer>
      <div className="my-address">
        <div className="container">
          <div className="my-address-content">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <div className="my-add-element">
                  <div className="my-add-head">
                    <img src="media/images/location-icon.png" alt="address" />
                    Address
                  </div>
                  <div className="my-add-body">
                    King Abdullah Road - Al Zagzouq <br />
                    Business Tower - Jeddah
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 my-add-mid">
                <div className="my-add-element">
                  <div className="my-add-head">
                    <img src="media/images/email-icon.png" alt="" />
                    Email Address
                  </div>
                  <div className="my-add-body">
                    info@almuehi.com <br />
                    support@almuehi.com
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="my-add-element">
                  <div className="my-add-head">
                    <img src="media/images/Phone-icon.png" alt="" />
                    Phone
                  </div>
                  <div className="my-add-body">
                    <a href="tel:+966 920008434">+966 920008434</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container" id="footer_pro-1">
        <div className="my-footer">
          <div className="row">
            <div className="col-sm-12 col-md-3">
              <div className="footer-link-section">
                <h1>Company</h1>
                <ul className="footer-ul">
                  <li className="foot-link">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">About Legalzoom</a>
                  </li>
                  <li className="foot-link">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">Contact Us</a>
                  </li>
                  <li className="foot-link">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">Latest Blog</a>
                  </li>
                  <li className="foot-link">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li className="foot-link">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li className="foot-link">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">Payment Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className="footer-link-section">
                <h1>Support</h1>
                <ul className="footer-ul">
                  <li className="foot-link">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">Order Status</a>
                  </li>
                  <li className="foot-link">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">Customer Care</a>
                  </li>
                  <li className="foot-link">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">Speak with an attorney</a>
                  </li>
                  <li className="foot-link">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">join our attorney team</a>
                  </li>
                  <li className="foot-link">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">Question &amp; Answer</a>
                  </li>
                  <li className="foot-link">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">See all services</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className="footer-link-section">
                <h1>Quick Links</h1>
                <ul className="footer-ul">
                  <li className="foot-link">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">Knowdege center</a>
                  </li>
                  <li className="foot-link">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">Populer service</a>
                  </li>
                  <li className="foot-link">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">Life plan</a>
                  </li>
                  <li className="foot-link">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">Addisional Resources</a>
                  </li>
                  <li className="foot-link">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">Legal forms</a>
                  </li>
                  <li className="foot-link">
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">Life Plan</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-12 col-md-3">
              <div className="footer-link-section social-lnk">
                <h1>About Al-Muehi</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quisquam veritatis esse magni cumque quae recusandae
                  consequuntur, aspernatur vel dolorem! Eligendi illum
                  voluptatem necessitatibus
                </p>
                <a href="www.facebook.com/">
                  <i className="fa fa-facebook" />
                </a>
                <a href="www.twitter.com/">
                  <i className="fa fa-twitter" />
                </a>
                <a href="www.youtube.com/">
                  <i className="fa fa-youtube" />
                </a>
                <a href="www.linkedin.com/">
                  <i className="fa fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="my-copy-right">
          <p>
            &copy; {new Date().getFullYear()} Al-Muhei | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterView;

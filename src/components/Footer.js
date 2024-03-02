import React from "react";
import footerLogo from '../img/sym-logo.svg'
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
 
      
        <div className="footer-legal">
          <div className="container">
            <div className="copyright">
              <span id="copyright">
                <script>
                  document.getElementById('copyright').appendChild(document.createTextNode(new
                  Date().getFullYear()) )
                </script>
              </span>
              &copy;  Copyright
              <span> Nexton Plastics Pvt. Ltd </span>. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
      
    </>
  )
  
};

export default Footer;

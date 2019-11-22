import React, { Component } from "react";
// get our fontawesome imports
import { CardImg } from "reactstrap";
// import { faHome, faRegistered, faTrademark } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./media/logo01.png";
class FooterComponent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div
          className="container col-12"
          style={{
            color: "white",
            background:
              "linear-gradient(90deg, rgba(19,46,55,1) 0%, #3b5998 100%)",
            padding: "10px 50px",
            position: "fixed",
            bottom: "0px",
            marginTop: "60px"
          }}
        >
          <div className="container col-md-4" style={{ fontSize: "10px" }}>
            <div className="col-lg-4 col-md-6 col-6 mt-4 ml-auto mr-auto">
              <CardImg
                alt="Card image cap....."
                width="65%"
                src={logo}
              ></CardImg>
            </div>
            Panama 2019, comentaygana.com 
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FooterComponent;

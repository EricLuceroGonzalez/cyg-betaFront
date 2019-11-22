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
      <div
        className="container col-12"
        style={{
          color: "white",
          background:
            "linear-gradient(90deg, rgba(19,46,55,1) 0%, #3b5998 100%)",
          position: "fixed",
          bottom: "0px"
        }}
      >
        <div className="col-lg-2 col-sm-4 col-4 mt-4 ml-auto mr-auto">
          <CardImg
            alt="Comenta y Gana"
            width="25%"
            src={logo}
            // style={{border: '1px solid white'}}
          ></CardImg>
        </div>
        <p
          style={{
            color: "white",
            fontSize: "0.65em",
            fontFamily: "montserrat-ExtraBold",
            textTransform: "uppercase"
          }}
        >
          pronto tus comentarios te harán ganar
        </p>
        <p style={{marginTop: '-22px'}}>
          <span style={{ color: "red" }}>*</span>
          <span style={{ color: "gray", fontSize: "0.45em" }}>
            no enviamos correo spam.
          </span>
        </p>
      </div>
    );
  }
}

export default FooterComponent;

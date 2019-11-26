import React, { Component } from "react";
import { Button, CardImg, Form, FormGroup, Input } from "reactstrap";
import logo from "./media/Comentaygana-allWhite.png";
import { FormErrors } from "./FormErrors";
import api from "../api/index";

const inputSty = {
  outline: "none",
  display: "block",
  background: "rgba(4,20,175, 0.75)",
  width: "100%",
  border: "0",
  borderRadius: "4px",
  padding: "8px 20px",
  color: "white",
  fontFamily: "inherit",
  fontSize: "inherit",
  fontWeight: "500",
  lineHeight: "inherit",
  transition: "0.3s ease",
  fontFamily: 'montserrat-Bold'
};
// const labelSty = {
//   display: "block",
//   margin: "0 0 10px",
//   color: "gray",
//   fontSize: "12px",
//   fontWeight: "500",
//   lineHeight: "1",
//   textTransform: "uppercase",
//   letterSpacing: ".2em"
// };

const formBg = {
  backgroundColor: "rgba(255,255,255,0.3)",
  padding: "5px 5px",
  borderRadius: "16px"
};
class FormComponent extends Component {
  state = {
    date: "",
    email: "",
    sendedForm: "",
    formErrors: { email: "" },
    emailValid: false,
    formValid: false,
    activeBtn: false
  };

  sendFormData = () => {
    console.log("\n\n inside sendFormData()");
    console.log(this.state);

    api
      .postMail(this.state)
      .then(res => {
        this.setState({ sendedForm: "   goForm" });
        console.log({
          mensaje: "Post exitoso",
          response: res.data
        });
      })
      .catch(err => {
        this.setState({ sendedForm: "errorForm" });
        console.log({
          mensaje: "Post Fallido",
          response: err
        });
      });
  };

  handleUserInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
    console.log(this.getCurrentDate());
    this.setState({ date: this.getCurrentDate() });
    // console.log(this.state);

    console.log(this.state);
  };

  
  //Validation of fields:
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " incorrecto";
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid });
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  getCurrentDate = () => {
    let separator = "-";
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let hour = newDate.getHours();
    let minutes = newDate.getMinutes();
    let seconds = newDate.getSeconds();

    return `${year}${separator}${
      month < 10 ? `0${month}` : `${month}`
    }${separator}${date} ${hour}:${minutes}:${seconds}`;
  };
  render() {
    return (
      <React.Fragment>
        <div className="col-lg-4 col-md-6 col-8 mt-4 ml-auto mr-auto">
          <CardImg alt="Card image cap....." width="65%" src={logo}></CardImg>
        </div>

        <div
          className={`col-xs-8 col-md-8 col-sm-4 col-lg-4 col-10 mt-4 ml-auto mr-auto ${this.state.sendedForm}`}
          style={formBg}
        >
          <Form
            // style={formBg}
            className="col-sm-10 col-xs-12 ml-auto mr-auto"
            onReset={this.resetForm}
          >
            <div className="mt-5 mb-3 text-question montserrat-Black">
              <h3 style={{ fontSize: "0.65em", textAlign: "center", color: 'white' }}>
              COMPARTE Y PREPARATE PARA GANAR
              <span style={{color: 'red'}}>*</span>
              </h3>
            </div>
            {/** <p
            //   style={{
            //     fontSize: "0.75em",
            //     fontFamily: "montserrat-Thin",
            //     marginTop: "-15px"
            //   }}
            // >
            //   COMPARTE Y PREPARATE PARA GANAR
            // </p>
          */}
            <FormGroup>
              <div
                className={`form-group ${this.errorClass(
                  this.state.formErrors.email
                )}`}
              ></div>

              <Input
                onChange={event => this.handleUserInput(event)}
                style={inputSty}
                type="email"
                name="email"
                id="email"
                className="col-12"
                value={this.state.mail}
                placeholder="Correo"
              />
              <div className="justify-content-center">
                <FormErrors formErrors={this.state.formErrors} />
              </div>
            </FormGroup>
            <div className="mt-25 ">
              <Button
                style={{ backgroundColor: "rgba(25,90,225,1)", color: "white" }}
                className="montserrat-Black"
                onClick={this.sendFormData}
              >
                Enviar
              </Button>
            </div>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

export default FormComponent;

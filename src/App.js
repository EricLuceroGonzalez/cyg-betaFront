import React from "react";
import "./App.css";
import FormComponent from "./components/FormComponent";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterComponent from "./components/Footer";
function App() {
  return (
    <div className="App">
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <FormComponent></FormComponent>
      <FooterComponent></FooterComponent>

    </div>
    // #ff6a00
    // #3b5998
  );
}

export default App;

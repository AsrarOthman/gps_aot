import { useState } from "react";
import "./App.css";
import aotLogo from "./assets/aot-logo2.png";
import wgpsLogo from "./assets/logo.ong.png";

function App() {
  return (
    <>
      <div className="bp1 frr ">
        <div className="bp5 fcse ai-c">
          <div className="bp4 fcc tx-c tx-main">
            <a>Welcome To Our Telematic System</a>
          </div>
          <div className="bp4 tx-c">
            <a style={{ fontSize: "20px" }}>
              This is our innovative system in 2023, where we have integrated
              our telematic systems with the cutting-edge WhatsGPS Platform to
              provide exceptional service to our valued clients.
            </a>
            <div className=" frc ai-c " style={{ marginTop: "50px" }}>
              <div className="">
                <img src={aotLogo} width="100px" height="100px" />
              </div>
              <div className=" mg-30" style={{ fontSize: "40px" }}>
                <a>+</a>
              </div>
              <div className="">
                <img src={wgpsLogo} width="100px" height="100px" />
              </div>
            </div>
          </div>
          <div className="bp4 fcb tx-c">
            <a className="">Copyright@2023AoTechology</a>
          </div>
        </div>
        <div className="bp2 fcc ai-c ">
          <div className="bp3 boxs-1 fcse ai-c">
            <div className="bp9 tx-main tx-c fcc" style={{ fontSize: "20px" }}>
              <a className="mg-10" style={{ fontSize: "23px" }}>
                GPS Telematic System
              </a>
              <a>
                You are invited to access our platform by clicking the login
                button below.
              </a>
            </div>
            <div className="bp9 fcc ai-c">
              <div className="box-button boxs-1 fcc ai-c">
                <a
                  href="https://www.whatsgps.com/#/login"
                  class=""
                  style={{ color: "white" }}
                >
                  Click here to login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

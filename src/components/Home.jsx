import React from "react";

export default function Home() {
  return (
    <div
      id="home"
      className="home"
      style={{
        height: "100vh",
        alignContent: "center",
        fontFamily: "roboto",
        color: "white",
      }}
    >
      <div style={{ justifyContent: "center", textAlign: "center" }}>
        <h1>
          Hi{" "}
          <img
            src="/output-onlinegiftools.gif"
            style={{ height: "50px", width: "50px" }}
          ></img>
        </h1>
        <h1>I am Pragnan Kasarla</h1>
        <h1 class="gradient-text-contact">I am a Web Developer</h1>
        <a href="https://drive.google.com/file/d/1AKPqpF_4T79ClGTHfapSzwRcueXjCWat/view?usp=drive_link" target="_blank">
          
          <button className="rbutton">Resume</button>
        </a>
      </div>
    </div>
  );
}

import React from "react";

export default function Home() {
  return (
    <div
      id="home"
      className="home bg-black h-[90vh] font-sans text-white justify-center content-center mt-10 fade-in"
    >
      <div className="justify-center text-center font-serif font-semibold text-[46px] fade-in">
        <h1 className="flex justify-center gap-4 mb-5">
          Hi{" "}
          <img
            src="/output-onlinegiftools.gif"
            className="h-[50px] w-[50px]"
            style={{ height: "50px", width: "50px" }}
          />
        </h1>
        <h1 className="text-[42px] mb-5">I am Pragnan Kasarla</h1>
        <h1 className="gradient-text-contact text-[45px] font-extrabold mb-5">
          I am a Web Developer
        </h1>
        <a href="/resume">
          <button className="rbutton">Resume</button>
        </a>
      </div>
    </div>
  );
}

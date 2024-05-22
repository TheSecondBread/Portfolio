import React from "react";
export default function About() {
  return (
    <div id="about" className="About">
      <div style={{ marginLeft: "100px", width: "40vw" }}>
        <h1 className="gradient-text-about">About Me</h1>
        <h3 style={{ color: "white" }}>
          I'm Kasarla Pragnan, a web developer with a focus on both front-end
          development and backend. Currently fueled by a deep passion for the
          web and emerging technologies, I thrive on continuous learning and
          exploration. I'm committed to crafting elegant solutions that push the
          boundaries of user experience. Driven by a fascination for interface
          design and user-centric experiences, I'm dedicated to creating
          intuitive interfaces that meet user expectations.
        </h3>
      </div>
      <div
        style={{
          fontFamily: "sans-serif",
          width: "40vw",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <h1 className="gradient-text-about">Tech Stack</h1>
        <div className="techstack-container">
          <div className="techstack-box">
            <img className="techstack" src="/html.svg" alt="HTML" />
          </div>
          <div className="techstack-box">
            <img className="techstack" src="/csss.svg" alt="CSS" />
          </div>
          <div className="techstack-box">
            <img className="techstack" src="/boot.svg" alt="Bootstrap" />
          </div>
          <div className="techstack-box">
            <img className="techstack" src="/javas.svg" alt="JavaScript" />
          </div>
          <div className="techstack-box">
            <img className="techstack" src="/react.svg" alt="React" />
          </div>
          <div className="techstack-box">
            <img className="techstack" src="/mongo.svg" alt="MongoDB" />
          </div>
          <div className="techstack-box">
            <img className="techstack" src="/my.svg" alt="MongoDB" />
          </div>
          <div className="techstack-box">
            <img className="techstack" src="/post.svg" alt="PostgreSQL" />
          </div>
          <div className="techstack-box">
            <img className="techstack" src="/node.svg" alt="Node.js" />
          </div>
          <div className="techstack-box">
            <img className="techstack" src="/java.svg" alt="Java" />
          </div>
          <div className="techstack-box">
            <img className="techstack" src="/spring.svg" alt="Spring" />
          </div>
          <div className="techstack-box">
            <img className="techstack" src="/py.svg" alt="Python" />
          </div>
        </div>
      </div>
    </div>
  );
}

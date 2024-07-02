import React from "react";

export default function About() {
  return (
    <div id="about" className="About bg-black text-white flex flex-col lg:flex-row justify-center items-center font-serif lg:space-x-8 py-8">
      <div className="w-full lg:w-[90vh] mx-4  flex flex-col justify-center items-center p-4">
        <h1 className="gradient-text-about font-serif text-[36px] lg:text-[54px] font-bold text-center">About Me</h1>
        <h3 className="text-[18px] lg:text-[18px] text-center font-semibold ">
          I'm Kasarla Pragnan, a web developer with a focus on both front-end
          development and backend. Currently fueled by a deep passion for the
          web and emerging technologies, I thrive on continuous learning and
          exploration. I'm committed to crafting elegant solutions that push the
          boundaries of user experience. Driven by a fascination for interface
          design and user-centric experiences, I'm dedicated to creating
          intuitive interfaces that meet user expectations.
        </h3>
      </div>
      <div className="w-full lg:w-[40vw] mx-4 flex flex-col justify-center items-center p-4">
        <h1 className="gradient-text-about font-serif text-[36px] lg:text-[54px] font-bold text-center">Tech Stack</h1>
        <div className="flex flex-wrap gap-4 lg:gap-[35px] justify-center content-center">
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
            <img className="techstack" src="/my.svg" alt="MySQL" />
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

import React from "react";
import Project from "./Project";

export default function Projects() {
  return (
    <div
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center bg-black text-white p-5 mt-20"
    >
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 gradient-text-about">
        My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
        <Project
          name={"CodeIT"}
          tech={["REACT", "NODEJS", "MONGODB"]}
          git={"https://github.com/TheSecondBread"}
          live={"https://blog-coral-tau-75.vercel.app/"}
          des={
            "A platform which I am currently working on that is similar to Leetcode where users can solve problems and participate in contests"
          }
          imgs={"./projects/code.png"}
        />
        <Project
          name={"BLOGIFY"}
          tech={["REACT", "NODEJS", "MONGODB"]}
          git={"https://github.com/TheSecondBread/blog"}
          live={"https://blog-coral-tau-75.vercel.app/"}
          des={
            "A web platform that allows users to post, read, and share blogs, providing a community-driven space for content creators."
          }
          imgs={"./projects/blog.png"}
        />
        <Project
          name={"Portfolio"}
          tech={["REACT", "HTML", "TailwindCSS"]}
          git={"https://github.com/TheSecondBread/Portfolio"}
          live={"https://rent-ease-gamma.vercel.app/"}
          des={
            "A personal website showcasing my projects, skills, and professional background."
          }
          imgs={"./projects/port.png"}
        />
        <Project
          name={"RentEase"}
          tech={["REACT", "NODEJS", "MONGODB"]}
          git={"https://github.com/TheSecondBread/RentEase"}
          live={"https://blog-coral-tau-75.vercel.app/"}
          des={
            "A property rental service similar to NoBroker, designed to connect tenants and landlords directly without intermediaries."
          }
          imgs={"./projects/rent.png"}
        />
        <Project
          name={"URL Shortener"}
          tech={["REACT", "Java Spring", "PostgreSQL"]}
          git={"https://github.com/TheSecondBread/url-shortener-frontend"}
          live={"https://rent-ease-gamma.vercel.app/"}
          des={
            "A web application that shortens long URLs, making them easier to share and manage."
          }
          imgs={"image.png"}
        />
      </div>
    </div>
  );
}

import React from "react";
import Project from "./Project";

export default function Projects() {
  return (
    <>
    <div id="projects" className="project" style={{height:"100vh",placeContent:"center"}}>
      <h1  className="gradient-text-about" style={{marginBottom:"100px"}}>My Projects</h1>

      <div
        className="cards"
      >
        <Project name={"REAL ESTATE"}></Project>
        <Project name={"PORTFOLIO"}  tech={["HTML","CSS","REACT"]}></Project>
        <Project name={"URL SHORTENER"} tech={["REACT","JAVA SPRING","POSTGRESQL"]}></Project>
        
      </div>
    </div>
    </>
    
  

  );
}

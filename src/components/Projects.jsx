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
        <Project name={"BLOGIFY"} tech={["REACT","NODEJS","MONGODB"]} git={"https://github.com/TheSecondBread/blog"} live={"https://blog-coral-tau-75.vercel.app/"}></Project>
        <Project name={"REAL ESTATE"} tech={["REACT","MONGODB","NODEJS"]} git={"https://github.com/TheSecondBread/RentEase"} live={"https://rent-ease-gamma.vercel.app/"}></Project>
        <Project name={"PORTFOLIO"}  tech={["HTML","CSS","REACT"]} git={"https://github.com/TheSecondBread/portfolio"} live={"https://pragnan.vercel.app/"}></Project>
        
        
      </div>
    </div>
    </>
    
  

  );
}

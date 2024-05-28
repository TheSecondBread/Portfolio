import React from "react";

export default function Project({name,tech,git,live}) {
  console.log(tech)
  
  return (
    <div className="pbox" style={{ placeContent: "center", color:"white" }}>
      <div
        style={{ width: "380px", height: "250px"}}
      >
        <div style={{gap:"15px",display:"flex",marginTop:"1rem",marginLeft:"18rem"}}>
          <a href={git} target="_blank"> 
          <img
            src="/github-mark-white.png"
            style={{ width: "28px", height: "28px" }}
          />
          </a>
          <a href={live} target="_blank">
          <img
            src="/icons8-next-50.png"
            style={{ width: "27px", height: "29px",zIndex:"1000px" }}
          />
          </a>
        </div>
        <div style={{marginTop:"3rem"}}>
          <h3>{name}</h3>
          <div style={{display:"flex",justifyContent:"center",gap:"1rem",fontFamily:"roboto"}}>
          {tech != undefined ? tech.map((b)=>(
             <h4 key={b}>{b}</h4>
          )): <h3>CURRENT</h3>
          }

          </div>
          
        </div>
      </div>
    </div>
  );
}

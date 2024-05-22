import React from "react";

export default function Project({name,tech}) {
  console.log(tech)
  
  return (
    <div className="pbox" style={{ placeContent: "center", color:"white" }}>
      <div
        style={{ width: "380px", height: "250px"}}
      >
        <div style={{gap:"15px",display:"flex",marginTop:"1rem",marginLeft:"18rem"}}>
          <img
            src="/github-mark-white.png"
            style={{ width: "28px", height: "28px" }}
          />
          <img
            src="/icons8-next-50.png"
            style={{ width: "27px", height: "29px" }}
          />
        </div>
        <div style={{marginTop:"3rem"}}>
          <h3>{name}</h3>
          <div style={{display:"flex",justifyContent:"center",gap:"1rem",fontFamily:"roboto"}}>
          {tech != undefined ? tech.map((b)=>(
             <h5 key={b}>{b}</h5>
          )): <h3>CURRENT</h3>
          }

          </div>
          
        </div>
      </div>
    </div>
  );
}

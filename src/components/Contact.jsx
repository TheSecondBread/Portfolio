import React from "react";

export default function Contact() {
  return (
    <div
      id="contact"
      className="contac"
      style={{
        height: "100vh",
        placeContent: "center",
        fontFamily: "roboto",
      }}
    >
      <h1 className="gradient-text-contact ani" style={{fontWeight:"bold", cursor: "default" }}>
        Contact Me
      </h1>
      <div>
        <div style={{ width: "620px" }}>
          <p style={{ fontSize: "30px" }}>
            My inbox is always open. Whether you have a question, need advice,
            or just want to chat. Feel free to reach out anytime. Your thoughts,
            inquiries, and messages are always welcome and valued.
          </p>
        </div>

        <a href="mailto:pragnank2@gmail.com">
          <button class="button-64" role="button"><span class="text">Mail Me</span></button>
        </a>
          
      </div>
     
    </div>
  );
}

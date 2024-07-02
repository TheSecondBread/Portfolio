import React from "react";

export default function Contact() {
  return (
    <div
      id="contact"
      className="font-serif text-white h-screen flex flex-col justify-center items-center"
    >
      <h1 className="text-4xl font-bold gradient-text-contact animate-pulse ani mb-20 " style={{ cursor: "default" }}>
        Contact Me
      </h1>
      <div className="text-center max-w-lg px-4 mt-10">
        <p className="text-[24px]">
          My inbox is always open. Whether you have a question, need advice,
          or just want to chat. Feel free to reach out anytime. Your thoughts,
          inquiries, and messages are always welcome and valued.
        </p>
      </div>

      <a href="mailto:pragnank2@gmail.com" className="mt-4">
        <button className="button-64">
          <span className="text">Mail Me</span>
        </button>
      </a>
    </div>
  );
}

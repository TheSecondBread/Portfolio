import React from "react";

export default function Project({ name, tech, git, live,des,imgs }) {
  return (
    <a href={git}>
    <div className="max-w-sm mx-auto sm:min-h-[550px] mb-5 bg-black hover:bg-[#141414] text-white shadow-md overflow-hidden md:max-w-2xl rounded-xl" style={{ maxWidth: "calc(100% - 40px) " }}>
      <div>
        <img className="w-full object-cover" src={imgs} alt="Mentor Labs" />
      </div>
      <div className="p-6">
        <h2 className="uppercase tracking-wide text-sm text-indigo-400 font-semibold">{name}</h2>
        <p className="mt-2 text-lg font-medium">
          {des}
        </p>
        <div className="mt-4">
          {tech.map((techItem, index) => (
            <span key={index} className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-gray-400 mr-2 mt-1">
              {techItem}
            </span>
          ))}
        </div>
        <div className="mt-4">
          <a href={git} target="blank">
          <img className="h-6 w-6" src="/github-mark-white.png" alt="GitHub" />
          </a>
        </div>
      </div>
    </div>
    </a>
  );
}

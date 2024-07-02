import "./home.css";

function ResumeProjects() {
  return (
    <div className="title">
      <h2 className="heading text-[22px] font-bold mb-10">Projects</h2>

      <div className="card mb-5">
        <h3 className="project-info text-[20px] font-semibold underline mb-5">
          <a
            className="resume"
            href="https://github.com/TheSecondBread/BLOG"
            target="blank"
          >
            BLOGIFY
          </a>
        </h3>
        <p className="mb-5">
          A web platform that allows users to post, read, and share blogs,
          providing a community-driven space for content creators.
        </p>
        <p>
          <strong>Tech stack:</strong> React, Node.js , MongoDB, Express.js
        </p>
      </div>

      <div className="card mb-5">
        <h3 className="project-info text-[20px] font-semibold underline mb-5">
          <a
            className="resume"
            href="https://github.com/TheSecondBread/RentEase"
            target="blank"
          >
            RentEase
          </a>
        </h3>
        <p className="mb-5">
          A property rental service similar to NoBroker, designed to connect
          tenants and landlords directly without intermediaries
        </p>

        <p>
          <strong>Tech stack:</strong> React, MongoDB, Node.js, Express.js
        </p>
      </div>

      <div className="card mb-5">
        <h3 className="project-info text-[20px] font-semibold underline mb-5">
          <a
            className="resume"
            href="https://github.com/TheSecondBread/portfolio"
            target="blank"
          >
            Portfolio
          </a>
        </h3>
        <p className="mb-5">
         A personal website showcasing my projects, skills, and professional background.
        </p>
        <p>
          <strong>Tech stack:</strong> React, HTML, Tailwind CSS
        </p>
      </div>

      <div className="card mb-5">
        <h3 className="project-info text-[20px] font-semibold underline mb-5">
          <a className="resume" href="https://github.com/TheSecondBread/url-shortener-frontend">
            URL Shortener
          </a>
        </h3>
        <p className="mb-5">
          A tiny URL shortener written in Java, React.
        </p>
        <p>
          <strong>Tech stack:</strong> React.js, Java Spring, PostgreSQL
        </p>
      </div>
    </div>
  );
}

export default ResumeProjects;

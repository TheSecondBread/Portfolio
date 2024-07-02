import "./home.css";
import ResumeProjects from "./ResumeProjects";

function HomePage() {
  return (
    <div className="box">
      <nav>
        <ul className="navbar">
          <div className="nav-items">
            <a href="/" className="nav-item">
              home
            </a>
          </div>
        </ul>
      </nav>
      <div className="title">
        <img
          src="https://avatars.githubusercontent.com/u/136884806?s=400&u=1e6f1662e39d5ba4b3f432851f1bf546cbc25925&v=4"
          width={100}
          height={100}
          className="profile-pic mb-10"
        ></img>
        <h2 className="text-[22px] text-white font-bold mb-8">Pragnan Kasarla</h2>
        <div className="title-bio">
          <p className="mb-5">
            I'm a FullStack Developer specializing in React, Node.js, Java Spring, Docker.
          </p>
          <p className="mb-5">
            If you'd like to collaborate, please{" "}
            <a className="email" href="mailto:pragnank2@gmail.com">
              send me an email
            </a>{" "}
            or reach out on any of my social handles.
          </p>
        </div>

        <div className="socials mb-8">
          <div>
            <a href="https://www.linkedin.com/in/pragnan-kasarla-394749307/" target="blank">
              <svg
                className="social-icon"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20px"
                height="20px"
                viewBox="0 0 26 26"
              >
                <path d="M 21.125 0 L 4.875 0 C 2.183594 0 0 2.183594 0 4.875 L 0 21.125 C 0 23.816406 2.183594 26 4.875 26 L 21.125 26 C 23.816406 26 26 23.816406 26 21.125 L 26 4.875 C 26 2.183594 23.816406 0 21.125 0 Z M 8.039063 22.070313 L 4 22.070313 L 3.976563 9.976563 L 8.015625 9.976563 Z M 5.917969 8.394531 L 5.894531 8.394531 C 4.574219 8.394531 3.722656 7.484375 3.722656 6.351563 C 3.722656 5.191406 4.601563 4.3125 5.945313 4.3125 C 7.289063 4.3125 8.113281 5.191406 8.140625 6.351563 C 8.140625 7.484375 7.285156 8.394531 5.917969 8.394531 Z M 22.042969 22.070313 L 17.96875 22.070313 L 17.96875 15.5 C 17.96875 13.910156 17.546875 12.828125 16.125 12.828125 C 15.039063 12.828125 14.453125 13.558594 14.171875 14.265625 C 14.066406 14.519531 14.039063 14.867188 14.039063 15.222656 L 14.039063 22.070313 L 9.945313 22.070313 L 9.921875 9.976563 L 14.015625 9.976563 L 14.039063 11.683594 C 14.5625 10.875 15.433594 9.730469 17.519531 9.730469 C 20.105469 9.730469 22.039063 11.417969 22.039063 15.046875 L 22.039063 22.070313 Z"></path>
              </svg>
            </a>
          </div>

          <div>
            <a href="https://github.com/TheSecondBread" target="blank">
              <svg
                className="social-icon"
                height="20px"
                width="20px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="M296.133,354.174c49.885-5.891,102.942-24.029,102.942-110.192   c0-24.49-8.624-44.448-22.67-59.869c2.266-5.89,9.515-28.114-2.734-58.947c0,0-18.139-5.898-60.759,22.669   c-18.139-4.983-38.09-8.163-56.682-8.163c-19.053,0-39.011,3.18-56.697,8.163c-43.082-28.567-61.22-22.669-61.22-22.669   c-12.241,30.833-4.983,53.057-2.718,58.947c-14.061,15.42-22.677,35.379-22.677,59.869c0,86.163,53.057,104.301,102.942,110.192   c-6.344,5.452-12.241,15.873-14.507,30.387c-12.702,5.438-45.808,15.873-65.758-18.592c0,0-11.795-21.31-34.012-22.669   c0,0-22.224-0.453-1.813,13.592c0,0,14.96,6.812,24.943,32.653c0,0,13.6,43.089,76.179,29.48v38.543   c0,5.906-4.53,12.702-15.865,10.89C96.139,438.977,32.2,354.626,32.2,255.77c0-123.807,100.216-224.022,224.03-224.022   c123.347,0,224.023,100.216,223.57,224.022c0,98.856-63.946,182.754-152.828,212.688c-11.342,2.266-15.873-4.53-15.873-10.89   V395.45C311.1,374.577,304.288,360.985,296.133,354.174L296.133,354.174z M512,256.23C512,114.73,397.263,0,256.23,0   C114.73,0,0,114.73,0,256.23C0,397.263,114.73,512,256.23,512C397.263,512,512,397.263,512,256.23L512,256.23z" />
                </g>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <p className="mb-5 underline">
            <a className="resume" href="https://drive.google.com/file/d/1b3hkn3ABquMiKTsJQ6SeaZ9dWm-8eUVg/view?usp=drive_link" target="_blank">
              View full resume
            </a>
          </p>
        </div>

        <div className="card">
          <h3 className="heading text-[20px] font-bold mb-6">Skills</h3>
          <p className="mb-5">
            <strong>Languages: </strong>
           Node.js, Java, Python, C, SQL(Postgres), MongoDB
          </p>
          <p className="mb-5">
            <strong>Frameworks: </strong>
           Spring, ReactJS, ExpressJS
          </p>
          <p className="mb-5">
            <strong>Technologies: </strong>
            Git, Docker, GitHub
            Actions
          </p>
        </div>
      </div>

      {/* <div id="experience">
        <Experience />
      </div> */}

      <div id="projects">
        <ResumeProjects/>
      </div>
    </div>
  );
}

export default HomePage;

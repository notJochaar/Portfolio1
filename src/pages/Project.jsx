import "../Styles/Project.css";

import CodingPic from "../Images/codingImg.png";
import RunningPic from "../Images/running.png";
import GamingPic from "../Images/gamingImg.png";
import GhostPic from "../Images/ghostDrawing.png";

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>

      <div className="project-card">
        <img className="project-card__img" src={GhostPic} alt="Drawing" />

        <div className="project-card__overlay">
          <div className="project-card__text">
            <h2>Drawing</h2>
            <p>One of my hobbies is drawing, this is a collection of some drawings.</p>
          </div>
        </div>
      </div>

      <div className="project-card">
        <img className="project-card__img" src={CodingPic} alt="Coding" />

        <div className="project-card__overlay">
          <div className="project-card__text">
            <h2>Coding</h2>
            <p>Some coding projects and experiments I’ve built.</p>
          </div>
        </div>
      </div>

      <div className="project-card">
        <img className="project-card__img" src={RunningPic} alt="Running" />

        <div className="project-card__overlay">
          <div className="project-card__text">
            <h2>Running</h2>
            <p>Fitness / running milestones and tracking projects.</p>
          </div>
        </div>
      </div>

      <div className="project-card">
        <img className="project-card__img" src={GamingPic} alt="Editing" />

        <div className="project-card__overlay">
          <div className="project-card__text">
            <h2>Editing</h2>
            <p>Video edits, creative work, and content experiments.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;

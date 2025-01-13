import DashboardNav from "../Dashboard/DashboardNav/DashboardNav";
import "./ProjectTracker.css";
import "../../index.css";
import ProjectHeader from "./ProjectHeader";
import { useState } from "react";

const allProjects = {
  projectName: {
    name: "",
    status: "",
  },
};

export default function ProjectTracker() {
  const [projectsList, setProjectsList] = useState({
    projectName: {
      name: "",
      status: "",
    },
  });

  function handleClickSubmit() {
    setProjectsList((prevList) => ({
      ...prevList,
      projectName: {
        // Add a new projectName object
        name: "New Project",
        status: "not started",
      },
    }));

    console.log(projectsList);
  }

  return (
    <>
      {/* <DashboardNav /> */}
      <section className="project-tracker-section">
        <ProjectHeader onClickHandle={handleClickSubmit} />
        <ProjectBody />
      </section>
    </>
  );
}

function ProjectBody() {
  return <div className="project-body-container"></div>;
}

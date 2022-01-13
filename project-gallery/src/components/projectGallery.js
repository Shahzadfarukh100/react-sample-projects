import { useState } from "react";
import SingleProject from "./singleProject";
import { projectsList } from "../utils/data";
import ProjectCategories from "./projectCategories";

const ProjectGallery = () => {
  const [projects, setProjects] = useState(projectsList);

  const filterProjects = (category) => {
    if (category === "All") {
      setProjects(projectsList);
    } else {
      const newProjects = projectsList.filter((project) =>  project.category === category);
      setProjects(newProjects);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center">Project Gallery</h1>
      <ProjectCategories filterProjects={filterProjects}></ProjectCategories>

      <div className="row">
        {projects.map((project) => {
          return <SingleProject key={project.id} {...project}></SingleProject>;
        })}
      </div>
    </div>
  );
};

export default ProjectGallery;

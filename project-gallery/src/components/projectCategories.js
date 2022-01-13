import { useState } from "react";
import { useEffect } from "react";
import { projectsList } from "../utils/data";

const allCategores = new Set(projectsList.map((project) => project.category));
const categores = ["All", ...allCategores];
const ProjectCategories = ({ filterProjects }) => {

const [selectedCategory, setSelectedCategory] = useState('All')


const selectCategory = (category) =>{
    setSelectedCategory(category)
    filterProjects(category)

}

  return (
    <>
      {categores.map((category) => {
        return (
          <span
            className={"project-category " + (selectedCategory===category ? 'selected':'') }
            key={category}
            onClick={() => selectCategory(category)}
          >
            {category}
          </span>
        );
      })}
    </>
  );
};

export default ProjectCategories;

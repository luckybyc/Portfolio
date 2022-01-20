import React from "react";
import ProjectsCard from "./project-card";
import { ProjectData } from "../../data/projectsData"
import { ProjectsContainer,ProjectsTitle,ProjectContainerWrapper } from "../../StyledElements/projects.StyledElements";
const Projects = () => {
  const data = ProjectData;
  return (
    <>
      <ProjectsContainer  lightBg={true}  id='Projects'>
          <ProjectContainerWrapper>
          <ProjectsTitle>Projects</ProjectsTitle>
        <div>
          {data.map((project) => {
            return <ProjectsCard project={project} />;
          })}
        </div>
          </ProjectContainerWrapper>
      
      </ProjectsContainer>
    </>
  );
};

export default Projects;

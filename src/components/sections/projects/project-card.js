import React from "react";
import {ProjectCardContainer,ProjectTags,ProjectLink,ProjectLinks,ProjectTitle,ProjectsInfo,LinkButton,ImgWrap,Img,Tag} from '../../StyledElements/projectsCardStyledElements'
import { Subtitle } from "../../StyledElements/section.StyledElemnts";

const ProjectsCard = ({project}) => {
  return (
    <>
      <ProjectCardContainer>
      <ProjectsInfo>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectLinks>
          {project.demo && (
            <ProjectLink href={project.demo}>
              <LinkButton>
              <i class="fas fa-globe"></i>
                Demo
              </LinkButton>
            </ProjectLink>
          )}
          {project.github && (
            <ProjectLink href={project.github}>
              <LinkButton>
                <i class="devicon-github-original colored"></i> GIthub
              </LinkButton>
            </ProjectLink>
          )}
        </ProjectLinks>
        <Subtitle darkText={true} >{project.about}</Subtitle>
        <ProjectTags>
          {project.tags.map((tag) => {
            return <Tag>{tag}</Tag>;
          })}
        </ProjectTags>
      </ProjectsInfo>
      <ImgWrap >
      <Img src={project.image} className="project-photo" />
      </ImgWrap>
    
    </ProjectCardContainer>
    </>
  )
}

export default ProjectsCard

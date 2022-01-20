import React from "react";
import { SkillCardSection,SkillIcon,SkillName } from "../../StyledElements/skillsCard.StyledElements";
function SkillCard({ skill }) {
  return (
    <SkillCardSection>
      <SkillIcon><i className={skill.icon}></i></SkillIcon>
      <SkillName>{skill.name}</SkillName>
    </SkillCardSection>
     
  
  );
}

export default SkillCard;

import React from "react";
import {
  InfoContainer,
  SkillsSection,
  SkillsWrapper,
  SkillsList,
  SkillsSectionTitle,
  SkillsContainer,
  SkillsTitle
} from "../../StyledElements/skillsInfo.StyledElements";
import { SkillsData } from "../../data/skillsdata";
import SkillCard from "../skills/skill-card";
const SkillsInfo = () => {
  const data = SkillsData;

  return (
    <>
      <InfoContainer lightBg={true} id="Skills">
        <SkillsWrapper>
          <SkillsTitle>Skills</SkillsTitle>
          <SkillsContainer>
            {data.map((item) => {
              return (
                <SkillsSection>
                  <SkillsSectionTitle>{item.type}</SkillsSectionTitle>
                  <SkillsList>
                    {item.list.map((skill) => {
                      return <SkillCard skill={skill} />;
                    })}
                  </SkillsList>
                </SkillsSection>
              );
            })}
          </SkillsContainer>
        </SkillsWrapper>
      </InfoContainer>
    </>
  );
};

export default SkillsInfo;

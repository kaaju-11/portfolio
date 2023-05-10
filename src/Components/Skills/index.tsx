import React from "react";
import { RiHtml5Fill, RiReactjsLine } from "react-icons/ri";
import {
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandTypescript,
} from "react-icons/tb";
import { BiGitMerge } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import {
  Container,
  FlexContainer,
  FlexItem,
  Heading,
  WrapperContainer,
  SkilName,
} from "style/Skill";

const SkillsSec = () => {
  return (
    <WrapperContainer>
      <Container>
        <Heading>
          <GiSkills />
          Skills
        </Heading>
        <FlexContainer>
          <SkilName>
            <FlexItem>
              <RiHtml5Fill />
            </FlexItem>
            <h3
              style={{
                color: "white",
                marginRight: "12px",
                marginTop: "-15px",
              }}
            >
              Html
            </h3>
          </SkilName>
          <SkilName>
            <FlexItem>
              <TbBrandCss3 />
            </FlexItem>
            <h3
              style={{
                color: "white",
                marginRight: "10px",
                marginTop: "-15px",
              }}
            >
              Css
            </h3>
          </SkilName>
          <SkilName>
            <FlexItem>
              <TbBrandJavascript />
            </FlexItem>
            <h3
              style={{ color: "white", marginRight: "8px", marginTop: "-15px" }}
            >
              JavaScript
            </h3>
          </SkilName>
          <SkilName>
            <FlexItem>
              <RiReactjsLine />
            </FlexItem>
            <h3
              style={{
                color: "white",
                marginRight: "12px",
                marginTop: "-15px",
              }}
            >
              React
            </h3>
          </SkilName>
          <SkilName>
            <FlexItem>
              <BiGitMerge />
            </FlexItem>
            <h3
              style={{ color: "white", marginRight: "8px", marginTop: "-15px" }}
            >
              Git
            </h3>
          </SkilName>
          <SkilName>
            <FlexItem>
              <TbBrandTypescript />
            </FlexItem>
            <h3
              style={{ color: "white", marginRight: "0px", marginTop: "-15px" }}
            >
              TypeScript
            </h3>
          </SkilName>

          <SkilName>
            <FlexItem>
              <BiGitMerge />
            </FlexItem>
            <h3
              style={{ color: "white", marginRight: "8px", marginTop: "-15px" }}
            >
              Git
            </h3>
          </SkilName>
          <SkilName></SkilName>
        </FlexContainer>
      </Container>
    </WrapperContainer>
  );
};

export default SkillsSec;

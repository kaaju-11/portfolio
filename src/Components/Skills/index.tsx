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
import NextIcon from "assets/svg/NextIcon";
import ReactVite from "assets/svg/ReactVite";

const SkillsSec = () => {
  const key = new Date().getTime();
  return (
    <WrapperContainer>
      <Container>
        <Heading key={key}>
          <GiSkills />
          Professional Skills
        </Heading>
        <FlexContainer>
          <SkilName>
            <FlexItem>
              <RiHtml5Fill />
            </FlexItem>
            <h3
            >
              Html
            </h3>
          </SkilName>
          <SkilName>
            <FlexItem>
              <TbBrandCss3 />
            </FlexItem>
            <h3>Css</h3>
          </SkilName>
          <SkilName>
            <FlexItem>
              <TbBrandJavascript />
            </FlexItem>
            <h3>JavaScript</h3>
          </SkilName>
          <SkilName>
            <FlexItem>
              <RiReactjsLine />
            </FlexItem>
            <h3
            >
              React
            </h3>
          </SkilName>
          <SkilName>
            <FlexItem>
              <BiGitMerge />
            </FlexItem>
            <h3>Git</h3>
          </SkilName>
          <SkilName>
            <FlexItem>
              <TbBrandTypescript />
            </FlexItem>
            <h3
            >
              TypeScript
            </h3>
          </SkilName>

          <SkilName>
            <FlexItem className="next-icon">
              <NextIcon />
            </FlexItem>
            <h3>Next Js</h3>
          </SkilName>
          <SkilName>
            <FlexItem className="next-icon">
              <ReactVite />
            </FlexItem>
            <h3>React Vite</h3>
          </SkilName>
        </FlexContainer>
      </Container>
    </WrapperContainer>
  );
};

export default SkillsSec;

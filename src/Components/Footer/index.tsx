import { ChildContainer, FooterContainer, Para } from "style/Footer";

const Footer = () => {
  return (
    <FooterContainer>
      <ChildContainer>
        {/* <Heading>Web Developer</Heading> */}
        <Para>
        {/* Designed and Developed by Kajal Raj  */}
        © 2024 All rights reserved by Kajal Raj
        {/* © 2024 All rights reserved by ThemeJunction */}
        </Para>
        {/* <SocialSec>
          <AnkerTag href="#">
            <FaFacebookF />
          </AnkerTag>
          <AnkerTag href="#">
            <RiInstagramFill />
          </AnkerTag>
          <AnkerTag href="#">
            <AiFillLinkedin />
          </AnkerTag>
          <AnkerTag href="#">
            <AiOutlineGithub />
          </AnkerTag>
          <AnkerTag href="#">
            <RiGitlabFill />
          </AnkerTag>
        </SocialSec> */}
      </ChildContainer>
    </FooterContainer>
  );
};

export default Footer

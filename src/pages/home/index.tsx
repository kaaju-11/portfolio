
import StarryBackground from "Components/Spiral";
import ContactHome from "views/Contact";
import EducationHome from "views/Education";
import FooterHome from "views/Footer";
import HomePge from "views/Home";
import NavHome from "views/Navbar";
import SkillHome from "views/Skill";
import TestoHome from "views/Testomonial";

const Home: React.FC = () => {

  return (
    <div>
      <NavHome />
      <HomePge />
      <SkillHome />
      <EducationHome />
      {/* <TestoHome /> */}
      <StarryBackground />
      <ContactHome />
      <FooterHome />
    </div>
  );
};

export default Home;

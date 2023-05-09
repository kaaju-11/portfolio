import React from "react";
import ContactHome from "views/Contact/Contact";
import EducationHome from "views/edu";
import FooterHome from "views/footer";
import HomePge from "views/home";
import NavHome from "views/navbar.view";
import SkillHome from "views/skill.view";
import TestoHome from "views/tesomonial";

const Home = () => {
  return (
    <div>
      <NavHome />
      <HomePge />
      <SkillHome />
      <EducationHome />
      <TestoHome />
      <ContactHome />
      <FooterHome />
    </div>
  );
};

export default Home;

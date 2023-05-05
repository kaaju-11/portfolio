import React from "react";
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
      <TestoHome />
    </div>
  );
};

export default Home;

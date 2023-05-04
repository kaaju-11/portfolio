import React from "react";
import HomePge from "views/home";
import NavHome from "views/navbar.view";
import SkillHome from "views/skill.view";

const Home = () => {
  return (
    <div>
      <NavHome />
      <HomePge />
      <SkillHome />
    </div>
  );
};

export default Home;

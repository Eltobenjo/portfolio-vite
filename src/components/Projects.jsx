import React from "react";
import ProjectItem from "./ProjectItem";
import cookbook from "../assets/cookbook.png";
import enterprise from "../assets/enterprise.jpg";
import p64 from "../assets/Logo.png";
import cmscookbook from "../assets/cmscookbook.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-center py-8">
        Fugiat nostrud in voluptate irure et culpa minim et consequat dolor
        exercitation ullamco nisi. Veniam aliquip aliqua ea consequat laborum
        esse do laborum esse ipsum do. Mollit excepteur nostrud est dolor magna
        veniam sunt ipsum adipisicing. Ipsum laborum aute proident culpa eu
        voluptate do non proident proident Lorem.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={cookbook}
          link="https://eltobenjo.github.io/Cookbook/"
          title="cookbook"
        />
        <ProjectItem
          img={enterprise}
          link="https://eltobenjo.github.io/Star-Trek/"
          title="enterprise"
        />
        <ProjectItem img={p64} link="https://pokoje64.pl" title="pokoje64" />
        <ProjectItem img={cmscookbook} link="" title="CMScookbook" />
      </div>
    </div>
  );
};

export default Projects;

import React from "react";
import Projectviewer from "./Projectviewer";

function Projects() {
  const projects = [
    {
      name: "ToDoList",
      desc: "Responsive ToDoList app using React Hooks and Bootstrap",
      link: "https://project-todolist-1.netlify.app/",
      pic: "/pic/todolist.png",
    },

    {
      name: "BrainFlix",
      desc: "Responsive cloned YouTube using React, Node.js, API functions",
      link: "https://github.com/pouyanzar/brainflix",
      pic: "/pic/brainflixSC.png",
    },
    {
      name: "FoodFinder",
      desc: "Responsive receipe search engine using React, Node.js, edamam website's APIs",
      link: "https://modest-booth-b055ca.netlify.app/",
      pic: "/pic/receipeSC.png",
    },
    {
      name: "Inventory",
      desc: "As a member of a collaborative project, a warehouse designed with the possibility of adding, sorting, deleting branches, users, and items. The developers communicated via GitHub and Jira",
      link: "https://inventap.herokuapp.com",
      pic: "/pic/inventorySC.png",
    },
    {
      name: "Finder",
      desc: "MySQL, Node.js, React have been used to build a search engine for truck parts with ability of filtering fields. ",
      link: "https://github.com/pouyanzar/finderapp",
      pic: "/pic/finderSC.png",
    },
    {
      name: "QFP",
      desc: "MySQL, Node.js, React have been used to build a online store for truck parts.",
      link: "https://github.com/pouyanzar/qfp",
      pic: "/pic/qfpSC.png",
    },
  ];

  return (
    <section id="Projects">
      <h2 className="section__title">Projects</h2>
      <p></p>
      <Projectviewer projects={projects} />
    </section>
  );
}

export default Projects;

import React from "react";

export default function Skills() {
  const skills = [
    "/pic/html51.svg",
    "/pic/css3.svg",
    "/pic/sass.svg",
    "/pic/js.svg",
    "/pic/react.png",
    "/pic/npm.svg",
    "/pic/nodejs3.svg",
    "/pic/sql.png",
    "/pic/mysql.png",
    "/pic/mongodb.png",
    "/pic/postgresql.png",
    "/pic/mocha_chai.png",
    "pic/storybook.png",
    "pic/cypress.webp",
  ];

  return (
    <section id="Skills" className="skill">
      <h2 className="section__title">Skills</h2>
      <div className="skill__img">
        {skills.map((skill, index) => {
          return (
            <img
              src={skill}
              className="skill__img--pic"
              key={index}
              alt={skill}
            />
          );
        })}
      </div>
    </section>
  );
}

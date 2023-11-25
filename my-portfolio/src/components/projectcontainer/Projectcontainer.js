import React from "react";
import { Element } from "react-scroll";
import Project from "../project/Project";
import "./Projectcontainer.css";

const Projectcontainer = () => {
  const projects = [
    {
      img: "https://cache.careers360.mobi/media/article_images/2022/11/18/JS-Full-Form.webp",
      title: "Register Page",
      desc: "A user-friendly registration page crafted with HTML, CSS, and JavaScript. It's a place where individuals come together to connect.",
      link: "https://github.com/Aravii-27/learning-javascript/tree/main/register%20page",
    },
    {
      img: "https://cache.careers360.mobi/media/article_images/2022/11/18/JS-Full-Form.webp",
      title: "Digital Clock",
      desc: "The Digital Clock project is a web-based clock that displays the current time. It's created using HTML, CSS, and JavaScript and is a handy tool for keeping track of time.",
      link: "https://github.com/Aravii-27/learning-javascript/tree/main/digital%20clock",
    },
    {
      img: "https://cache.careers360.mobi/media/article_images/2022/11/18/JS-Full-Form.webp",
      title: "Booksky",
      desc: "Booksky is a web application for managing a personal book collection. It provides features for adding, editing, and deleting books, complete with title, author, and descriptions.",
      link: "https://github.com/Aravii-27/learning-javascript/tree/main/booksky",
    },
    {
      img: "https://cache.careers360.mobi/media/article_images/2022/11/18/JS-Full-Form.webp",
      title: "Todo List",
      desc: "The Todo List project is a task management tool that lets you add, edit, and remove tasks. It's built using HTML, CSS, and JavaScript, and it can help you stay organized.",
      link: "https://github.com/Aravii-27/learning-javascript/tree/main/todo-list%20with%20local%20storage",
    },
    {
      img: "https://cache.careers360.mobi/media/article_images/2022/11/18/JS-Full-Form.webp",
      title: "COMING SOON",
      desc: ".....",
      link: "#",
    },
    {
      img: "https://cache.careers360.mobi/media/article_images/2022/11/18/JS-Full-Form.webp",
      title: "COMING SOON",
      desc: ".....",
      link: "#",
    },
  ];
  return (
    <Element className="projectcontainer" name="projects">
      <h1>PROJECTS</h1>
      <p>Here are some projects which I done in this learning phase</p>
      <div className="projectcontainer__projects">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              img={project.img}
              title={project.title}
              desc={project.desc}
              link={project.link}
            />
          );
        })}
      </div>
    </Element>
  );
};

export default Projectcontainer;

// Imports the images for each project

import imgSocialNetworkAPI from "../../images/social-network-api.jpg";
import imgECommerceBackend from "../../images/e-commerce-back-end.jpg";
import imgEmployeeTracker from "../../images/employee-tracker.jpg";
import imgNoteTaker from "../../images/note-taker.jpg";
import imgReadmeGenerator from "../../images/readme-generator.jpg";
import imgTechBlog from "../../images/imgTech.png";
// Export and array of project objects
export const projects = [
  {
    title: "Tech Blog",
    url: "https://challenge14-tech-blog-c9ae4888ab1b.herokuapp.com/",
    image: imgTechBlog,
    description:
      "Challenge #14 for the University of Texas, Austin Coding Bootcamp 2023. The purpose of this challenge is to build a CMS-style blog site following the MVC paradigm, where developers can publish their blog posts and comment on other developers' posts as well.",
    technologies:
      "Node.js, Express.js, MySQL, Sequelize, Handlebars.js, & express-session",
    GitHubRepo: "https://github.com/fibikunle/challenge14-tech-blog",
  },
  {
    title: "Social Network API",
    url: "https://github.com/fibikunle/challenge18-social-network-api",
    image: imgSocialNetworkAPI,
    description:
      "Challenge #18 for the University of Texas, Austin Coding Bootcamp 2023. The purpose of this challenge is to understand the unstructured nature of NoSQL by building an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.",
    technologies: "Node.js, Express.js, MongoDB, & Mongoose",
    GitHubRepo: "https://github.com/fibikunle/challenge18-social-network-api",
  },

  {
    title: "E-Commerce Back End",
    url: "https://github.com/fibikunle/challenge13-orm-ecommerce",
    image: imgECommerceBackend,
    description:
      "Challenge #13 for the University of Texas, Austin Coding Bootcamp 2023. The purpose of this challenge is to build a back end for a generic e-commerce site using one-to-many and many-to-many database relationships.",
    technologies: "Node.js, Express.js, MySQL, & Sequelize",
    GitHubRepo: "https://github.com/fibikunle/challenge13-orm-ecommerce",
  },
  {
    title: "Employee Tracker",
    url: "https://github.com/fibikunle/challenge12-employee-tracker",
    image: imgEmployeeTracker,
    description:
      "Challenge #12 for the University of Texas, Austin Coding Bootcamp 2023. The purpose of this challenge is to build a command-line application to manage a company's employee database.",
    technologies: "Node.js, Inquirer v8.2.4, dotenv, & MySQL",
    GitHubRepo: "https://github.com/fibikunle/challenge12-employee-tracker",
  },
  {
    title: "Note Taker",
    url: "https://challenge11-note-taker-82045ac135ab.herokuapp.com/",
    image: imgNoteTaker,
    description:
      "Challenge #11 for the University of Texas, Austin Coding Bootcamp 2023. The purpose of this challenge is to build a note taker application to save and retreive data from a JSON file.",
    technologies: "Node.js, Express.js",
    GitHubRepo: "https://github.com/fibikunle/challenge11-note-taker",
  },
  {
    title: "Readme Generator",
    url: "https://github.com/fibikunle/README-generator",
    image: imgReadmeGenerator,
    description:
      "Challenge #9 for the University of Texas, Austin Coding Bootcamp 2023. The purpose of this challenge is to build a GitHub README generator.",
    technologies: "Node.js & Inquirer v8.2.4",
    GitHubRepo: "https://github.com/fibikunle/README-generator",
  },
];

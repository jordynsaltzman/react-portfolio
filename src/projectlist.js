const projectlist = [
  {
    projectId: 0,
    projectName: "Stovetop",
    projectDescription:
      "Recipe app with minimalist design for users to store and share home recipes",
    projDetails:
      "I created this app along with two team members for our second project at The Coding Bootcamp at Johns Hopkins. We had two weeks to design and build a full-stack web application. Our goal was to create an app where users could post home recipes that perhaps were written on notecards or paper, and save all of them to one place. Upon posting the recipe, users can select whether to make them public or private. Users can also search for public recipes posted by other users, and save them to their 'My Stovetop' page. We unfortunately did not achieve the user login functionality within the deadline, so our original vision did not fully come to life. My role on this application was to desing the UI, and I also created the 'Add Recipe' form on which users can recipes to our own API. I also created a working search bar that uses multiple SQL queries to search the database for given keywords. Users can type one or more keywords into the search bar. ",
    githubLink: "https://github.com/JEmnetu/Stovetop",
    websiteLink: "http://stovetop.herokuapp.com/",
  },
  {
    projectId: 1,
    projectName: "Alumni App",
    projectDescription:
      "A web application designed to attract millenials to join the Morgan State Univeristy alumni group. Users can host or RSVP to upcoming events, begin making donations, and paying membership dues to become a lifetime member of MSU Alumni.",
    githubLink: "https://github.com/kshep425/ALUM-APP",
    websiteLink: "https://msu-alumni-hoco.herokuapp.com/",
  },
  {
    projectId: 2,
    projectName: "Cohort Collab",
    projectDescription:
      "Cohort Collab is a place where developers of all skill levels can come to learn something new and relax at the same time! With our design we aim to make life a little bit more easier for the developer in all of us!",
    projDetails:
      "The goal of this application was to create a simple and easy to use job search application for new web developers. We expanded upon this idea to create a one stop shop for new developers, especially those who have recently completed a Bootcamp, to learn about the latest news in web development, find jobs, or practice their skills with a curated list of coding resources. This was our first project at the Coding Bootcamp at Johns Hopkins Engineering, where we had just finished learning how to make API calls. We designed our application using Material Design Lite as a CSS framework. We used the Adzuna job search API as well as the News API in order to provide the latest news and job information. Due to the time constraint of this assignment, we were not able to acheive our full vision for the application. For example, we envisioned users being able to connect and collaborate with one another through the app, but we had to sacrifice that goal in order to have a fully functional MVP by the deadline.",
    githubLink: "https://github.com/anzook/The-Git-Gud-Team",
    websiteLink: "https://anzook.github.io/The-Git-Gud-Team/",
  },
  {
    projectId: 3,
    projectName: "Google Books Search",
    projectDescription:
      "A React-based Google Books Search web application, where users can search for and save books of interest. ",
    projDetails:
      "This assignment required us to create React components, work with helper/util functions, and utilize React lifecycle methods to query and display books based on user searches. I also used Node, Express and MongoDB so that users can save books to review or purchase later. This is a SPA (Single Page Application) that uses react-router-dom to navigate, hide and show React components without changing the route within Express. On the 'Search' page, the user can search for books via the Google Books API, which will render on the page. The user has the option to view a book, bringing them to the book on Google Books, or save a book, saving it to the Mongo database. The 'Reading List' page renders all books saved to the Mongo database. The user has an option to view the book, bringing them to the book on Google Books, or delete a book, removing it from the Mongo database. For the UI, I used a muted 'library-esque' color palatte and created a responsive layout with Bootstrap.",
    githubLink: "https://github.com/jordynsaltzman/google-books-search",
    websiteLink: "https://googlebookssearchreact1.herokuapp.com/",
  },
  {
    projectId: 4,
    projectName: "Employee Directory",
    projectDescription:
      "An employee directory app built with React, created for The Coding Bootcamp at Johns Hopkins Engineering. Users can use this application to explore an employee roster through filtering, sorting, and searching.",
    projDetails:
      "This assignment required us to break up our application's UI into components, manage component state, and respond to user events. It gave me experience using React hooks such as useState and useEffect, and I also got additional practice using JavaScript array methods like map and filter. I originally wanted to generate my employee data from the Random User Generator API, but unfortunately the site's server was down when I was working on it and had to resort to using my own data from a JSON file. I still wanted to incorporate an API, so I ended up getting 'headshots' from the Adorable Avatars API.",
    githubLink: "https://github.com/jordynsaltzman/employee-directory",
    websiteLink: "https://jordyns-budget-tracker.herokuapp.com/",
  },
  {
    projectId: 5,
    projectName: "Budget Tracker",
    projectDescription:
      "A Progressive Web Application to track your budget, utilizing MongoDB, IndexedDB, Cache API, and Service Workers to provide an offline experience for the application.     ",
    projDetails:
      "To create this application, I used the Service Worker and Cache APIs to cache assets and API responses to ensure the application works without an internet connection. Users can enter transactions while offline, and when brought back online, the withdrawals, deposits, and account balance will populate accordingly.",
    githubLink: "https://github.com/jordynsaltzman/budget-tracker",
    websiteLink: "https://jordyns-budget-tracker.herokuapp.com/",
  },
  {
    projectId: 6,
    projectName: "Sandwich Logger",
    projImgRef: "SandwichLogger",
    projImg: "sandwich_logger.JPG",
    projectDescription:
      "The Sandwich Logger is a restaurant app made with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Following the MVC design pattern, it uses Node and MySQL to query and route data in the app, and Handlebars to generate HTML.",
    githubLink: "https://github.com/jordynsaltzman/sandwich-app",
    websiteLink: "https://sandwich-logger.herokuapp.com/",
  },
  {
    projectId: 7,
    projectName: "Fitness Tracker",
    projImg: "fitness_tracker.JPG",
    projectDescription:
      "This application allows users to track their workouts so that they are more likely to acheive their fitness goals. It uses a Mongo database with a Mongoose schema and handles routes with Express.",
    projDetails:
      "For this assignment, we were provided with the frondend code (some of which was broken) and were required to write code to connect to a NoSQL database. I created the model used in the database based on the provided seed file, then wrote code for the routes based off of the methods used in the frontend api.js file. App intended functionality was slightly unclear, but it is working as intended (although not how I would design this app.) When the user loads the page, they are given the option to create a new workout, or continue with their last workout. The user is able to add exercises to a previous workout plan, add new exercises to a new workout plan, and view the combined weight of multiple exercises on the stats page.",
    githubLink: "https://github.com/jordynsaltzman/fitness-tracker",
    websiteLink: "https://jordyns-fitness-tracker.herokuapp.com/",
  },
  {
    projectId: 8,
    projectName: "Profile Generator",
    projImg: "dev_profile_gen.JPG",
    projectDescription:
      "A simple command-line application that takes a Github username and favorite color, and dynamically generates a PDF user profile.",
    githubLink: "https://github.com/jordynsaltzman/developer-profile-generator",
  },
  {
    projectId: 9,
    projectName: "Template Engine",
    projImg: "template_engine.JPG",
    projectDescription:
      "This is a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person.",
    githubLink: "https://github.com/jordynsaltzman/template-engine",
  },
  {
    projectId: 10,
    projectName: "Note Taker",
    projectDescription:
      "This is a simple note taking application, which uses an express backend to save, retrieve, and delete note data from a JSON file.",
    githubLink: "https://github.com/jordynsaltzman/note-taker",
    websiteLink: "https://jordyns-note-taker.herokuapp.com/",
  },
  {
    projectId: 11,
    projectName: "React Portfolio",
    projectDescription:
      "Designed and built my developer portfolio using React. No screenshot necessary!",
    projDetails:
      "For my updated portfolio, I wanted to create a minimalist design with a retro, 2D feel. I initially did all of the styling using my own CSS in order to acheive the specific layout I desired. However, I faced some issues with mobile responsiveness and eventually incorporated Bootstrap as a framework and media queries as well. This project provided me with additional experience creating reusable components in React, which I find much more efficient than templating engines such as Handlebars used in previous projects. I also got more practice using state and turnary operators for conditional rendering. Overall I am pleased with how it turned out, but in the future I would love to redesign my portfolio using a more modern UI design, possibly using split screen. I felt a bit constrained by the retro look in what animations, shadow effects, and layouts I could incorporate, as I was trying to be consistent with the existing design.",
    githubLink: "https://github.com/jordynsaltzman/react-portfolio",
    websiteLink: "https://jordynsaltzman.herokuapp.com/",
  },
];

export default projectlist;

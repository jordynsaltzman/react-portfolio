const projectlist = [
  {
    projectId: 0,
    projectName: "Stovetop",
    projectDescription:
      "Recipe app with minimalist design for users to store and share home recipes",
    projDetails:
      "I created this app with two team members for our second project at The Coding Bootcamp at Johns Hopkins. We had two weeks to design and build a full-stack web application.",
    githubLink: "https://github.com/JEmnetu/Stovetop",
    websiteLink: "http://stovetop.herokuapp.com/",
  },
  {
    projectId: 1,
    projectName: "Morgan State Universiy - Alumni App",
    projectDescription:
      "Website to attract millenials to join the alumni chapter learn about upcoming events, begin making donations, and paying membership dues to become a lifetime member of MSU.",
    githubLink: "https://github.com/kshep425/ALUM-APP",
    websiteLink: "https://msu-alumni-hoco.herokuapp.com/",
  },
  {
    projectId: 2,
    projectName: "Cohort Collab",
    projectDescription:
      "Cohort Collab is a place where developers of all skill levels can come to learn something new and relax at the same time! With our design we aim to make life a little bit more easier for the developer in all of us!",
    projDetails:
      "We were given this task to complete as part of Johns Hopkins Coding Bootcamp as a way to test our skills and use everything we have used from day one to put together an application that anyone can use the help better their everyday lives. We came up with the idea to make a one stop hub for developers instead of using google and getting a more generalized overview. The framework of our project lies with Material Design Lite CSS package. https://getmdl.io/started/ There are also a few API's that are being used in the background to support our page. https://api.adzuna.com/v1/api/jobs/us/search/1? - Job search api https://newsapi.org/v2/everything? - news articles API. As with everything this is a work in progress but we wanted to at least show the starting point to our application.",
    githubLink: "https://github.com/anzook/The-Git-Gud-Team",
    websiteLink: "https://anzook.github.io/The-Git-Gud-Team/",
  },
  {
    projectId: 3,
    projectName: "Budget Tracker",
    projectDescription:
      "A Progressive Web Application to track your budget, utilizing MongoDB, IndexedDB, Cache API, and Service Workers to provide an offline experience for the application.     ",
    projDetails:
      "To create this application, I used the Service Worker and Cache APIs to cache assets and API responses to ensure the application works without an internet connection. Users can enter transactions while offline, and when brought back online, the withdrawals, deposits, and account balance will populate accordingly.",
    githubLink: "https://github.com/jordynsaltzman/budget-tracker",
    websiteLink: "https://jordyns-budget-tracker.herokuapp.com/",
  },
  {
    projectId: 4,
    projectName: "Sandwich Logger",
    projImgRef: "SandwichLogger",
    projImg: "sandwich_logger.JPG",
    projectDescription:
      "The Sandwich Logger is a restaurant app made with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Following the MVC design pattern, it uses Node and MySQL to query and route data in the app, and Handlebars to generate HTML.",
    githubLink: "https://github.com/jordynsaltzman/sandwich-app",
    websiteLink: "https://sandwich-logger.herokuapp.com/",
  },
  {
    projectId: 5,
    projectName: "Fitness Tracker",
    projImg: "fitness_tracker.JPG",
    projectDescription:
      "This application allows users to track their workouts so that they are more likely to acheive their fitness goals. It uses a Mongo database with a Mongoose schema and handles routes with Express.",
    projDetails:
      "When the user loads the page, they are given the option to create a new workout, or continue with their last workout. The user is able to add exercises to a previous workout plan, add new exercises to a new workout plan, and view the combined weight of multiple exercises on the stats page.",
    githubLink: "https://github.com/jordynsaltzman/fitness-tracker",
    websiteLink: "https://jordyns-fitness-tracker.herokuapp.com/",
  },
  {
    projectId: 6,
    projectName: "Profile Generator",
    projImg: "dev_profile_gen.JPG",
    projectDescription:
      "A simple command-line application that takes a Github username and favorite color, and dynamically generates a PDF user profile.",
    githubLink: "https://github.com/jordynsaltzman/developer-profile-generator",
  },
  {
    projectId: 7,
    projectName: "Template Engine",
    projImg: "template_engine.JPG",
    projectDescription:
      "This is a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person.",
    githubLink: "https://github.com/jordynsaltzman/template-engine",
  },
  {
    projectId: 8,
    projectName: "Note Taker",
    projectDescription:
      "This is a simple note taking application, which uses an express backend to save, retrieve, and delete note data from a JSON file.",
    githubLink: "https://github.com/jordynsaltzman/note-taker",
    websiteLink: "https://jordyns-note-taker.herokuapp.com/",
  },
  {
    projectId: 9,
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

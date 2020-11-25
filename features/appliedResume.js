module.exports = function (controller) {
  controller.resume = {
    work: {
      job1: {
        name: "Lyft",
        title: "Driver Partner",
        description:
          "owned and operated a vehicle licensed by the NYC Taxi and Limousine Commission. I achieved the rank of Lyft Platinum Partner 4.96, completing over 5,000 trips.",
        timeline: "June 2019 - May 2020",
      },
      job2: {
        name: "Fedex",
        title: "Accounting Clerk in Accounts Payable",
        description:
          "was Responsible for processing various types of invoices and reviewing past due vendor accounts.",
        timeline: "December 2018 - May 2019",
      },
    },
    education: {
      appAcademy: {
        name: "App Academy",
        degree:
          "Immersive software development course with a focus on full-stack web development.",
        timeline: "April 2020 - July 2020",
      },
      QueensCollege: {
        name: "Queens College",
        degree: "BA - Economics",
        timeline: "September 2017 - December 2019",
      },
    },
    technology: {
      languages: {
        name: "Ruby and JavaScript",
      },
      frameworks: {
        name: "Ruby on Rails and React ",
      },
    },
    contact: {
      email: "AnthonyECruz@gmail.com",
      phone: "(917)-415-3204",
      social: "https://www.linkedin.com/in/anthonyecruz/",
    },
    projects: {
      project1: {
        name: "Pinspiration",
        technologies: "Ruby on Rails in the backend, React/Redux in the Front",
        link: "https://pinspiration.herokuapp.com/",
        pic: "https://i.imgur.com/kIOkS4C.png",
      },
      project2: {
        name: "CAMP",
        technologies:
          "Node/MongoDB/Express in the backend, and React/Redux in the frontend",
        link: "https://camp-mern-project.herokuapp.com/#/",
        pic: "https://i.imgur.com/69ZvEnb.png",
      },
      project3: {
        name: "Distribution Divergence",
        technologies: "JavaScript and Three.js",
        link: "https://anthony-e-cruz.github.io/Distribution-Divergence/",
        pic: "https://i.imgur.com/f0Eeiyo.png",
      },
    },
  };
};

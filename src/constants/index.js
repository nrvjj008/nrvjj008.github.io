import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [{
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [{
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile App Developer",
    icon: creator,
  },
];

const technologies = [{
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [{
      title: "Full Stack Developer Intern",
      company_name: "Diaryz",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2023 - Present",
      points: [
        "Built a cross-platform mobile app using React Native and Django from scratch.", , " Designed APIs, database schema, integrated ChatGPT, chat and feed libraries and Apple Pay."
      ],
    },
    {
      title: "Full Stack Developer",
      company_name: "Incubyte",
      icon: tesla,
      iconBg: "#333",
      date: "Aug 2021 - Aug 2022",
      points: [
        " Implemented a fully customizable drag & drop utility in React to generate dynamic SQL filters, resulting in a 80% reduction in the time required to create custom SQL filters.",
        " Voluntarily identified and decommissioned unused services in AWS, resulting in a cost savings of $2,000 per month for the company.",
        " Actively participated in code reviews, technical discussions, root cause analysis, and production issue resolution to ensure optimal performance of the application.",
        " Worked with Java, GraphQL, React, PostgresSQL, and AWS with TDD in a fast-paced, remote environment.",
        " Wrote comprehensive unit and integration test cases that increased code coverage from 60% to 78%. ",
      ]
      },
      {
        title: "Software Developer",
        company_name: "Jeavio",
        icon: shopify,
        iconBg: "#383E56",
        date: "June 2019 - Aug 2021",
        points: [
          "Developing and maintaining web applications using React.js and other related technologies.",
          "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
          "Implementing responsive design and ensuring cross-browser compatibility.",
          "Participating in code reviews and providing constructive feedback to other developers.",
        ],
      }
    ];

    const testimonials = [{
        testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
      },
      {
        testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
      },
      {
        testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
      },
    ];

    const projects = [{
        name: "Study Hive",
        description: "Web-based online course platform that allows users to authenticate,search and buy courses.",
        tags: [{
            name: "bootstrap",
            color: "white",
          },
          {
            name: "javascript",
            color: "white",
          },
          {
            name: "jquery",
            color: "white",
          },
        ],
        image: carrent,
        source_code_link: "https://github.com/nrvjj008/study-hive",
      },
      {
        name: "Quiz App",
        description: "A Quiz app written in Django that allows user to authenticate and attempt quizzes on various topics.",
        tags: [{
            name: "django",
            color: "white",
          },
          {
            name: "bootstrap",
            color: "white",
          }
        ],
        image: jobit,
        source_code_link: "https://github.com/nrvjj008/django-quiz-app",
      }
    ];

    export {
      services,
      technologies,
      experiences,
      testimonials,
      projects
    };
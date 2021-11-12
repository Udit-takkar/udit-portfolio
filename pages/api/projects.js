const projects = [
  {
    title: "Box-Chat - Explore Chat Rooms",
    gif: "https://i.imgur.com/myNAEmP.gif",
    description:
      "Box-Chat is a realtime group chat application leveraging graphql subscriptions and serverless functions",
    techstack: ["React", "Hasura", "Typescript", "Auth0"],
    github: {
      link: "https://github.com/Udit-takkar/Box-Chat",
    },
    demo: {
      link: "https://box-chat.vercel.app/",
    },
  },
  {
    title: " Coduit - social blogging site",
    gif: "https://i.imgur.com/Cg2oxSF.gif",
    description:
      "Conduit is a social blogging site (i.e. like  Medium.com).It is a full stack application with authentication, markdown editor and other features.",
    techstack: ["MERN Stack", "Redux-toolkit", "Redis"],
    github: {
      link: "https://github.com/Udit-takkar/Conduit-Blogging-App",
    },
    demo: {
      link: "https://conduit-udit.herokuapp.com/",
    },
  },
  {
    title: "144 Blocks-Productivity App",
    gif: "https://i.imgur.com/5qfddO8.gif",
    description:
      "It is a time tracking tool inspired by article 100 Blocks a Day by Tim Urban. Your 24 hours is divided into 10 minute blocks and track what you did in that block of time.",
    techstack: ["React", "Redux", "Material UI", "Firebase"],
    github: {
      link: "https://github.com/Udit-takkar/productivity-app",
    },
    demo: {
      link: "https://productivity-app-rose.vercel.app/",
    },
  },
  {
    title: "Slak - Messaging App",
    gif: "https://i.imgur.com/E6CSluS.gif",
    description:
      "It is a clone of Slack which a messaging app for business that connects people to the information that they need. By bringing people together to work as one unified team",
    techstack: ["React", "Redux", "Styled-Components", "FireBase"],
    github: {
      link: "https://github.com/Udit-takkar/slack-clone",
    },
    demo: {
      link: "https://slak-clone-4f81c.web.app/",
    },
  },
  {
    title: "PC Build - Ecommerce Cart",
    gif: "https://i.imgur.com/3Rv9JNE.gif",
    description:
      "It is an implementation of ecommerce Shopping cart feature to buy processors,RAM,Graphic Cards etc.",
    techstack: ["HTML& CSS", "Vanilla JavaScript"],
    github: {
      link: "https://github.com/Udit-takkar/Ecommerce-VanillaJS",
    },
    demo: {
      link: "https://practical-pare-71a415.netlify.app/",
    },
  },
];

export default (req, res) => {
  res.status(200).json(projects);
};

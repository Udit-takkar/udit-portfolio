const projects = [
  // {
  //   title: "Web3 Chess",
  //   video: "https://i.imgur.com/myNAEmP.gif",
  //   description:
  //     "Box-Chat is a realtime group chat application leveraging graphql subscriptions and serverless functions",
  //   techstack: ["React", "Hasura", "Typescript", "Auth0"],
  //   github: {
  //     link: "https://github.com/Udit-takkar/Box-Chat",
  //   },
  //   demo: {
  //     link: "https://box-chat.vercel.app/",
  //   },
  // },
  {
    title: "Box-Chat - Explore Chat Rooms",
    video:
      "https://res.cloudinary.com/dlkgzbtls/video/upload/v1642788699/WBoxChat_obl0bd.webm",
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
    video:
      "https://res.cloudinary.com/dlkgzbtls/video/upload/v1642788820/conduit_hoqrme.webm",
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
    video:
      "https://res.cloudinary.com/dlkgzbtls/video/upload/v1642788891/144_efft8n.webm",
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
    video:
      "https://res.cloudinary.com/dlkgzbtls/video/upload/v1642788778/slack_slw4ye.webm",
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
    video:
      "https://res.cloudinary.com/dlkgzbtls/video/upload/v1642788824/pcbuild_uivori.webm",
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

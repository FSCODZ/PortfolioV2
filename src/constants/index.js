const navLinks = [
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "+", label: "Completed Projects" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Driven and motivated",
    desc: "Always driven and motivated to learn new technologies",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Communicating well with others and team to grow togheter ",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects/tickets are completed on schedule, with quality & attention to details.",
  },
];

const techStackImgs = [
  {
    name: "GraphQL",
    imgPath: "/images/logos/graphql.svg",
  },
   {
    name: "AngularJS",
    imgPath: "/images/logos/angular.svg",
  },
   {
    name: "AWS",
    imgPath: "/images/logos/aws.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "MySQL",
    modelPath: "/models/mysql.glb",
    scale: 1.5,
    rotation: [0, 0, 0],
  },
  {
    name: "Tailwind",
    modelPath: "/models/tailwind.glb",
    scale: 1.5,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
 
  {
    name: "Node.js",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Database knowledge",
    modelPath: "/models/database.glb",
    scale: 2.4,
    rotation: [0, 0.1, 0],
  },
  {
    name: "Docker",
    modelPath: "/models/docker.glb",
    scale: 9.5,
    rotation: [0, 0, 0],
  },
 
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Firebase",
    modelPath: "/models/firebase.glb",
    scale: 2.5,
  },
];

const expCards = [
  {
    review:
      "Filip brought creativity and technical solutions to the team, significantly improving our frontend performance and accesibility. His work has been invaluable in delivering faster and user friendly experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "November 2024 - May 2025",
    responsibilities: [
      "Developed and maintained user-facing features for the Campcation website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
      "Developed features to the website",
      "Integreted with database",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
            link: "https://www.linkedin.com/in/filip-stojanovic-914446358/",

  },

  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
        link: "https://www.linkedin.com/in/filip-stojanovic-914446358/",

  },
];

export {
  words,
  abilities,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};

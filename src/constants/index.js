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
    name: "Vue.js",
    imgPath: "/images/logos/vue.svg",
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

 const projects = [
  {
    title: "InterPrep",
    image: "/images/fullstack1.png",
    link:"https://mock-interview-pink-gamma.vercel.app/",
    githubLink:"https://github.com/FSCODZ/mock-interview",
    
    stack: [
      { name: "Next.js", imgPath: "/images/logos/next.svg" },
      { name: "Firebase", imgPath: "/images/logos/firebase.svg" },
      { name: "Tailwind CSS", imgPath: "/images/logos/tailwind.png" },
      { name: "Vapi AI", imgPath: "/images/logos/vapi.jpeg" }, 
      { name: "Three.js", imgPath: "/images/logos/threejs.svg" },

    ],
  },
  {
    title: "Moviefinder",
    image: "/images/project1.png",
    link:"https://next-to-watch.netlify.app/?timeWindow=day",
        githubLink:"https://github.com/FSCODZ/moviefinder",


    
    stack: [
      { name: "Next.js", imgPath: "/images/logos/next.svg" },
      { name: "Tailwind CSS", imgPath: "/images/logos/tailwind.png" },
    ],
  },
  {
    title: "NextTrip",
    image: "/images/project5.png",
    link:"https://next-trip-tawny.vercel.app/",
        githubLink:"https://github.com/FSCODZ/travel-agency",


    stack: [
      { name: "vite", imgPath: "/images/logos/vite.jpeg" },
      { name: "Tailwind CSS", imgPath: "/images/logos/tailwind.png" },
      { name: "Stripe", imgPath: "/images/logos/stripeicon.jpeg" },
      { name: "Sentry", imgPath: "/images/logos/sentryicon.jpeg" },
      { name: "Appwrite", imgPath: "/images/logos/appwrite.svg" },

    ],
  },
];



const expCards = [
  {
    review:
  "Filip contributed creative ideas and technical expertise that noticeably enhanced our frontend performance and accessibility. His work played a key role in delivering a faster, more user-friendly experience for our users." ,  
   imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "November 2024 - May 2025",
  responsibilities: [
  "Collaborated within an agile frontend team following a structured roadmap, including participation in daily stand-ups, retrospectives, and grooming sessions.",
  "Integrated frontend components with backend systems using AWS and MySQL, enabling dynamic data handling and real-time updates.",
  "Contributed to the planning and implementation of a larger feature from Figma design to production, including breaking down designs into actionable development tickets and estimating timeframes.",
  "Defined and created new data types and state management structures to support a customer review feature across the website.",
  "Refactored and optimized existing components to align with modern UX/UI standards, improving usability and responsiveness.",
  "Worked closely with designers and stakeholders to ensure pixel-perfect implementation of UI designs and consistent user interactions across devices."
]

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
   {
    name: "Github",
    imgPath: "/images/github.svg",
        link: "https://github.com/FSCODZ",

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
  projects,
  navLinks,
};

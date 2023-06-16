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
  productbox,
  productboxlogo,
  autoparts,
  hulu,
  fastify,
  portfolio,
  supabase,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "JavaScript Developer",
    icon: web,
  },
  {
    title: "Web App Developer",
    icon: backend,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
];

const technologies = [
  {
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

const experiences = [
  {
    title: "Associate Full-Stack Engineer",
    company_name: "ProductBox",
    icon: productboxlogo,
    iconBg: "#FFFFFF",
    date: "July 2022 - Present",
    points: [
      "Developing and maintaining web applications using MERN Stack and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "As an Associate Full Stack Engineer at ProductBox , I contributed to the development of various web applications, including a health care project and a vendor management system. In my role, I worked as a Full Stack Web Engineer, collaborating with a team of developers to build robust web applications.",
      "In the health care project, I played a pivotal role in enhancing the functionality and user experience of the platform. My responsibilities included implementing new features, fixing bugs, and optimizing performance. I leveraged my expertise in frontend development to create a responsive and intuitive user interface. In addition, I worked on the backend to develop and maintain server-side code.",
      "In the health care project, I played a pivotal role in enhancing the functionality and user experience of the platform. My responsibilities included implementing new features, fixing bugs, and optimizing performance. I leveraged my expertise in frontend development to create a responsive and intuitive user interface. In addition, I worked on the backend to develop and maintain server-side code.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "AUTOPARTS",
    description:
      "Web-based platform that allows users to search, book, and manage car services and car autoparts from various providers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
    ],
    image: autoparts,
    source_code_link: "https://github.com/DeeKoders/MERN_FYP",
  },
  {
    name: "HULU Clone",
    description:
      "Cloned Web based application called Hulu developed in Next.js.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
    ],
    image: hulu,
    source_code_link: "https://github.com/DeeKoders/hulu-clone-nextjs",
  },
  {
    name: "Fastify Backend Server",
    description: "A backend api server using fastify.",
    tags: [
      {
        name: "fastify",
        color: "blue-text-gradient",
      },
    ],
    image: fastify,
    source_code_link: "https://github.com/DeeKoders/fastify-api",
  },
  {
    name: "Portfolio Website",
    description:
      "Portfolio Website created using React.js which portrays all the details about a candidate.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/DeeKoders/portfolio-website",
  },
  {
    name: "Supabase Integration",
    description:
      "Created a small application in which supabase (Authentication, Database, Edge Functions) is integrated.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "supabase",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "orange-text-gradient",
      },
    ],
    image: supabase,
    source_code_link: "https://github.com/DeeKoders/portfolio-website",
  },
];

export { services, technologies, experiences, testimonials, projects };

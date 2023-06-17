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
  awanbirdscare,
  uzair,
  hira,
  musadaq,
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
      "I have had the privilege of working with Danyal on several projects, and I have been consistently impressed by his talent, dedication, and attention to detail. He consistently goes above and beyond to ensure that projects are completed to the highest standards. Additionally, his positive attitude and excellent communication skills make him a pleasure to work with.",
    name: "Sardar Uzair Abid",
    designation: "Tech Lead",
    company: "ProductBox",
    image: uzair,
  },
  {
    testimonial:
      "I have worked with Danyal for more than a year now , I found him highly skilled and a dedicated professional , he is a meticulous developer , he is adamant in solving any kind of complex problems. His friendly nature makes it easier to communicate with him. I highly recommend him for anyone to collaborate and work on any kind of project. ",
    name: "Hira Kai",
    designation: "Scrum Master",
    company: "ProductBox",
    image: hira,
  },
  {
    testimonial:
      "Mr. Danyal Ahmed is a talented individual. I have taught him different courses and he has performed really well in all of them. He has great experience in Mobile and Web development platforms. He has great writing skills as well.",
    name: "Musadaq Mansoor",
    designation: "Professor",
    company: "IMSciences",
    image: musadaq,
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
  {
    name: "Awan Birds Care",
    description:
      "Web based Application for Birds awareness and information. Its a complete wensite with both backend and frontend.",
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
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: awanbirdscare,
    source_code_link: "https://github.com/DeeKoders/awan-birds-care",
  },
];

export { services, technologies, experiences, testimonials, projects };

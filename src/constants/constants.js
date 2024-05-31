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
    Simon,
    EPF,
    EPS,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
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
      title: "Full-Stack Developer",
      company_name: "Ethiopian Federal Police",
      icon: EPF,
      iconBg: "#383E56",
      date: "March 2021 - April 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full-Stack Developer",
      company_name: "Esparinto PLC",
      icon: EPS,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Feb 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Full stack Developer",
      company_name: "Simon PLC",
      icon: Simon,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "Real-Time-Communication Chat application",
      description: "Web-based platform that allows users to engage in real-time conversations with each other over the internet. Users can send instant messages, share files, emojis, and multimedia content, and participate in group chats. The application provides a seamless and responsive chat experience, with messages appearing instantly on the screen as they are sent. It also offers features such as message encryption, user authentication, and notification alerts to enhance the overall communication experience. Users can access the web application from any device with an internet connection, making it convenient and accessible for both personal and professional use.",
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
      ],
      image: carrent,
      source_code_link: "https://github.com/ST-dev100/Company_Messanger_App",
    },
    {
      name: "mern-recipe-book-app-master",
      description: "This project is a full-stack web application built using React for the frontend and Express.js with MongoDB for the backend. The frontend uses various packages such as Formik, Yup, FontAwesome, and React-Axios to create a sign-up page with form validation and file upload, a home page with a search bar to fetch data from Spoonacular API, and a profile page that displays user details and saved recipes.The backend uses packages such as bcrypt, body-parser, cors, helmet, jsonwebtoken, mongoose, and multer to handle user authentication, password encryption, and database operations. It checks whether the user exists before storing the user's information in the database and uses JSON web tokens for secure communication between the client and server. The Redux store is used to store the user's details, saved recipes, and the authentication token. The state is also persisted using Redux persist to ensure that the user's details are saved even after refreshing the page. ",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/ST-dev100/Food-Recipe-Book/tree/main/mern-recipe-book-app-master",
    },
    {
      name: "JMS",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  // const projects = [
  //   {
  //     name: "Real-Time-Communication Chat application",
  //     description:
  //       "Web-based platform that allows users to engage in real-time conversations with each other over the internet. Users can send instant messages, share files, emojis, and multimedia content, and participate in group chats. The application provides a seamless and responsive chat experience, with messages appearing instantly on the screen as they are sent. It also offers features such as message encryption, user authentication, and notification alerts to enhance the overall communication experience. Users can access the web application from any device with an internet connection, making it convenient and accessible for both personal and professional use.",
  //     tags: [
  //       {
  //         name: "react",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "mongodb",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "Apollo-server",
  //         color: "text-cyan-400",
  //       },
  //       {
  //         name: "tailwinff",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: carrent,
  //     source_code_link: "https://github.com/ST-dev100/Company_Messanger_App",
  //   },
  //   {
  //     name: "mern-recipe-book-app-master",
  //     description:
  //       "This project is a full-stack web application built using React for the frontend and Express.js with MongoDB for the backend. The frontend uses various packages such as Formik, Yup, FontAwesome, and React-Axios to create a sign-up page with form validation and file upload, a home page with a search bar to fetch data from Spoonacular API, and a profile page that displays user details and saved recipes.The backend uses packages such as bcrypt, body-parser, cors, helmet, jsonwebtoken, mongoose, and multer to handle user authentication, password encryption, and database operations. It checks whether the user exists before storing the user's information in the database and uses JSON web tokens for secure communication between the client and server. The Redux store is used to store the user's details, saved recipes, and the authentication token. The state is also persisted using Redux persist to ensure that the user's details are saved even after refreshing the page. ",
  //     tags: [
  //       {
  //         name: "react",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "restapi",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "scss",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: jobit,
  //     source_code_link: "https://github.com/ST-dev100/Food-Recipe-Book/tree/main/mern-recipe-book-app-master",
  //   },
  //   {
  //     name: "JMS",
  //     description:
  //       "The Judge Management System is a software program designed to streamline and simplify the scheduling and assignments of judges for court cases. It helps court administrators and staff efficiently manage the availability and workload of judges, ensuring that cases are assigned to appropriate judges based on their expertise and availability. The system allows for easy and quick scheduling, rescheduling, and tracking of judges' assignments, helping to reduce bottlenecks and delays in court proceedings. Additionally, the Judge Management System provides reporting and analytics tools to help track judges' performance and workload, enabling court administrators to make data-driven decisions for more efficient and effective case management. Overall, the system helps improve the efficiency and effectiveness of court operations by optimizing the allocation of judicial resources.",
  //     tags: [
  //       {
  //         name: "reactjs",
  //         color: "blue-text-gradient",
  //       },
  //       {
  //         name: "mongodb",
  //         color: "green-text-gradient",
  //       },
  //       {
  //         name: "Tailwindcss",
  //         color: "pink-text-gradient",
  //       },
  //     ],
  //     image: tripguide,
  //     source_code_link: "https://github.com/skylightethiopiadev/jms-main",
  //   },
  // ];
  
  export { services, technologies, experiences, testimonials, projects };
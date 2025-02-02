const projects = [
  {
    id: 1,
    title: "Cinema Verse",
    description:
      "CinemaVerse is your all-in-one movie resource, providing real-time access to the latest movie information. Explore top-rated films, discover upcoming releases, watch trailers, and stay updated on everything happening in the world of cinema.",
    photo: "/CinemaVerse/CinemaVerse.png",
    isFeatured: true,
    detailedDescription:
      "Welcome to CinemaVerse, your all-in-one destination for everything related to movies.\n" +
      "Whether you're looking for the latest top-rated films, upcoming releases, or exclusive trailers, we provide real-time access to all the information you need. Our platform keeps you updated on the newest trends, box office hits, and hidden gems from the world of cinema.\n" +
      "From in-depth reviews and cast details to exciting movie previews, CinemaVerse ensures you never miss out on the latest movie news.Explore new genres, track your favorite films, and stay in the loop with the ever-evolving world of cinema.Stay tuned for regular updates, insightful features, and the most up-to-date movie news from CinemaVerse – the ultimate movie guide.",
    images: [
      "/CinemaVerse/cinema-verse1.png",
      "/CinemaVerse/cinema-verse2.png",
      "/CinemaVerse/cinema-verse3.png",
      "/CinemaVerse/cinema-verse4.png",
      "/CinemaVerse/cinema-verse5.png",
      "/CinemaVerse/cinema-verse6.png",
      "/CinemaVerse/cinema-verse7.png",
      "/CinemaVerse/cinema-verse8.png",
      "/CinemaVerse/cinema-verse9.png",
      "/CinemaVerse/cinema-verse10.png",
    ],
    gitHubRepo: "https://github.com/Amarildo05/CinemaVerse",
    deploymentLink: "https://cinema-verse-movies.vercel.app",
    technologies: [
      "/Technologies/React-logo.svg",
      "/Technologies/Vitejs-logo.svg",
      "/Technologies/Typescript-logo.svg",
      "/Technologies/Css-logo.svg",
      "/Technologies/Ant-Design-logo.svg",
    ],
    technologiesDescription:
      "CinemaVerse is built using React and Vite for fast development, with TypeScript for type safety, as for the design, it is styled with CSS and enhanced with Ant Design components. For handling forms, i implemented Formik and used Yup for validation. The app fetches real-time movie data from the TMDB API, providing details like posters and ratings.",
  },
  {
    id: 2,
    title: "Landing Page Project",
    description:
      "This project involved creating a custom landing page designed for Google Ads campaigns. The landing page serves as an entry point, efficiently redirecting users to the client's main website, optimizing user engagement and conversion.",
    photo: "/LandingPageProject/LandingPage2.png",
    isFeatured: true,
    detailedDescription:
      "This project involved creating a custom landing page designed specifically for Google Ads campaigns. The goal was to develop an engaging and user-friendly page that would capture the attention of visitors and redirect them to the client’s main website. The landing page was built to be fully responsive, ensuring a smooth experience across all devices, from smartphones to desktops.\n" +
      "It was optimized for speed and performance to minimize load times and reduce bounce rates.\n" +
      "With a clean, user-focused design and clear calls to action, the page provided a seamless transition for users, ultimately driving traffic and improving conversion rates for the client’s website.\n" +
      "\n" +
      "* Some of the project screenshots have been blurred for client security purposes.",
    images: [
      "/LandingPageProject/Landing-Page-Project.png",
      "/LandingPageProject/Landing-Page-Project2.png",
      "/LandingPageProject/Landing-Page-Project3.png",
      "/LandingPageProject/Landing-Page-Project4.png",
      "/LandingPageProject/Landing-Page-Project5.png",
      "/LandingPageProject/Landing-Page-Project6.png",
      "/LandingPageProject/Landing-Page-Project7.png",
      "/LandingPageProject/Landing-Page-Project8.png",
    ],
    gitHubRepo: null,
    deploymentLink: null,
    technologies: [
      "/Technologies/Html-5-logo.svg",
      "/Technologies/Css-logo.svg",
      "/Technologies/Bootstrap-logo.svg",
      "/Technologies/Javascript-logo.svg",
      "/Technologies/Popper-logo.svg",
    ],
    technologiesDescription:
      "This landing page was developed using HTML5, CSS, and Bootstrap to ensure fast performance and responsiveness. As the project required optimization for Google Ads, there was no need for a complex framework. Instead, i used Bootstrap components for a responsive design and enhanced it with custom styling through plain CSS. To address some issues with specific Bootstrap components, i implemented Popper.js for better functionality. I also incorporated a bit of JavaScript to handle some interactive elements on the page. For deployment, i gained new experience by using FileZilla to upload the files to the client's server. Despite a tight deadline of just a day and a half, i dedicated my effort to successfully completing the project on time.",
  },
  {
    id: 3,
    title: "Valorant Playbook",
    description:
      "Valorant Playbook is a simple guide designed to help players navigate the world of Valorant. Whether you're new to the game or just curious, you can explore detailed information about agents, weapons, and maps to improve your gameplay.",
    photo:
      "/ValorantPlaybook/ValorantPlaybook.png",
    isFeatured: false,
    detailedDescription:
      "Valorant Playbook is a simple guide designed to help both new and experienced players navigate the world of Valorant. Whether you're just starting out or curious about the game, this resource provides essential information about the different agents, weapons, and maps. You can learn about each agent, discover the available weapons, and familiarize yourself with the various maps to improve your strategy. Perfect for those looking to enhance their gameplay, the Valorant Playbook serves as a valuable tool for gathering key insights and getting a better understanding of the game.",
    images: [
      "/ValorantPlaybook/valorant-playbook.png",
      "/ValorantPlaybook/valorant-playbook2.png",
      "/ValorantPlaybook/valorant-playbook3.png",
      "/ValorantPlaybook/valorant-playbook4.png",
      "/ValorantPlaybook/valorant-playbook5.png",
      "/ValorantPlaybook/valorant-playbook6.png",
      "/ValorantPlaybook/valorant-playbook7.png",
      "/ValorantPlaybook/valorant-playbook8.png",
      "/ValorantPlaybook/valorant-playbook9.png",
      "/ValorantPlaybook/valorant-playbook10.png",
      "/ValorantPlaybook/valorant-playbook11.png",
    ],
    gitHubRepo: "https://github.com/Amarildo05/valorant-playbook",
    deploymentLink: "https://valorant-playbook.vercel.app",
    technologies: [
      "/Technologies/React-logo.svg",
      "/Technologies/Vitejs-logo.svg",
      "/Technologies/Typescript-logo.svg",
      "/Technologies/Css-logo.svg",
    ],
    technologiesDescription:
      "Valorant Playbook is built with React, Vite, TypeScript, and plain CSS for the design. A key feature of the project is the custom carousel, which I decided to build from scratch using TypeScript. This carousel is the main component, where each slide represents a single agent, weapon, or map with its own content and data.",
  },
];

export default projects;
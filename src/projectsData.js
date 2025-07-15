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
    isFeatured: false,
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
    title: "Bert Electric",
    description:
      "Bert Electric is a professional website created to represent an electrical and security systems. It highlights the company’s identity, services, and products through a clean and modern layout. The site also offers clients an easy way to get in touch and learn more about the business.",
    photo: "/BertElectric/BertElectric-Logo.png",
    isFeatured: true,
    detailedDescription:
      "Bert Electric is a modern business presentation website built to showcase the identity, services, and product offerings of an electrical and security systems company. Designed with both clarity and professionalism in mind, the site provides visitors with a clear understanding of who the company is, what they specialize in, and how clients can get in touch. From service descriptions to product displays and contact options, Bert Electric serves as a complete online presence for the business—helping build trust, improve visibility, and offer a direct communication channel for potential clients.",
    images: [
      "/BertElectric/Bert-Electric.png",
      "/BertElectric/Bert-Electric2.png",
      "/BertElectric/Bert-Electric3.png",
      "/BertElectric/Bert-Electric4.png",
      "/BertElectric/Bert-Electric5.png",
      "/BertElectric/Bert-Electric6.png",
      "/BertElectric/Bert-Electric7.png",
      "/BertElectric/Bert-Electric8.png",
      "/BertElectric/Bert-Electric9.png",
      "/BertElectric/Bert-Electric10.png",
      "/BertElectric/Bert-Electric11.png",
      "/BertElectric/Bert-Electric12.png",
    ],
    gitHubRepo: null,
    deploymentLink: "https://bert-electric.vercel.app",
    technologies: [
      "/Technologies/React-logo.svg",
      "/Technologies/Vitejs-logo.svg",
      "/Technologies/Javascript-logo.svg",
      "/Technologies/Tailwind-logo.svg",
      "/Technologies/Primereact-logo.png",
    ],
    technologiesDescription:
      "Bert Electric is built using React and Vite to ensure a scalable, and maintainable foundation—ideal for future feature expansions. The project was developed from scratch to match the client's specific vision and needs. Styling is handled with Tailwind CSS for a clean and responsive layout, combined with PrimeReact components and PrimeIcons for a modern UI experience. The codebase is well-organized, with clearly separated and readable files to maintain structure and ease of collaboration.",
  },
  {
    id: 4,
    title: "Valorant Playbook",
    description:
      "Valorant Playbook is a simple guide designed to help players navigate the world of Valorant. Whether you're new to the game or just curious, you can explore detailed information about agents, weapons, and maps to improve your gameplay.",
    photo: "/ValorantPlaybook/ValorantPlaybook.png",
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
  {
    id: 5,
    title: "Gym Members (FullStack)",
    description:
      "Gym Members Dashboard is a simple tool designed to help manage gym memberships with ease. Whether you're tracking new signups or keeping tabs on active and inactive members, this dashboard makes it easy to organize member details, registration dates, and payment status in one place.",
    photo: "/GymDashboardApp/GymDashboard.png",
    isFeatured: true,
    detailedDescription:
      "Gym Members Dashboard is a user-friendly application built to simplify gym membership management. With this tool, you can easily create new members by entering their personal details, register the date they joined, and keep an updated record of their membership status. The dashboard clearly indicates whether a member is currently active or inactive based on their payment status, helping gym owners or staff stay organized and on top of renewals. It’s a straightforward solution to streamline day-to-day operations and maintain an efficient workflow in any gym environment.",
    images: [
      "/GymDashboardApp/Gym-dashboard-app.png",
      "/GymDashboardApp/Gym-dashboard-app2.png",
      "/GymDashboardApp/Gym-dashboard-app3.png",
      "/GymDashboardApp/Gym-dashboard-app4.png",
      "/GymDashboardApp/Gym-dashboard-app5.png",
      "/GymDashboardApp/Gym-dashboard-app6.png",
      "/GymDashboardApp/Gym-dashboard-app7.png",
    ],
    gitHubRepo: "https://github.com/Amarildo05/Gym-Dashboard-App",
    deploymentLink: "https://gym-dashboard-app-kappa.vercel.app",
    technologies: [
      "/Technologies/React-logo.svg",
      "/Technologies/Javascript-logo.svg",
      "/Technologies/Tailwind-logo.svg",
      "/Technologies/Nodejs-logo.svg",
      "/Technologies/Express-icon.svg",
      "/Technologies/Mongodb-icon.svg",
    ],
    technologiesDescription:
      "Gym Members Dashboard is built using React and Vite for a smooth development experience, with Tailwind CSS for fast and efficient styling. The main goal of this project was to showcase full-stack development and CRUD functionality. The frontend is deployed on Vercel and communicates seamlessly with a backend hosted on Render. The backend is powered by Node.js and Express.js, while MongoDB is used as the database to store and manage member data.",
  },
];

export default projects;
import esimImage from "../assets/esim.png";
import eventsImage from "../assets/events.png";
import adminImage from "../assets/mobitti-admin.png";
import esimVideo from "../assets/videos/esim.mp4";
import meshekAlmogVideo from "../assets/videos/meshek-almog.mp4";
import weatherVideo from "../assets/videos/weather.mp4";

export interface Project {
  title: string;
  description: string;
  image: string;
  gif?: string; // GIF to show on hover
  video?: string; // Video to show on hover (alternative to gif)
  liveUrl?: string;
  sourceUrl?: string;
  technologies: string[];
  period: string;
  type: "personal" | "professional";
}

export const projects: Project[] = [
  {
    title: "Meshek Almog",
    description: "Family farm website with registration order management",
    image: "https://my-portfolio-asaf.netlify.app/img/websites/almog.jpg",
    liveUrl: "https://meshekalmog.co.il/",
    technologies: [
      "React JS",
      "Redux Thunk",
      "Bootstrap",
      "MongoDB",
      "Node.js",
      "Express.js",
    ],
    period: "2020-Present",
    type: "personal",
    video: meshekAlmogVideo,
  },
  // {
  //   title: 'EasyTest',
  //   description: 'Making an appointment for a Licensing Test',
  //   image: 'https://my-portfolio-asaf.netlify.app/img/websites/driving.png',
  //   liveUrl: 'https://easy-test-israel.herokuapp.com/',
  //   sourceUrl: 'https://github.com/nir11/EasyTest',
  //   technologies: ['React JS', 'Redux', 'Bootstrap', 'Node.js', 'MongoDB', 'Google Maps'],
  //   period: '2022',
  //   type: 'personal',
  // },
  {
    title: "eSIM",
    description: "Digital storefront for purchasing and managing eSIM plans",
    image: esimImage,
    liveUrl: "https://esim.mobitti.com/esim/",
    technologies: ["React JS", "Tailwind", "Axios"],
    period: "2024-Present",
    type: "professional",
    video: esimVideo,
  },
  {
    title: "Admin Dashboard",
    description: "Admin dashboard for managing Application data and users",
    image: adminImage,
    liveUrl: adminImage,
    technologies: [
      "React JS",
      "Redux Saga",
      "Axios",
      "Bootstrap",
      "Google APIs",
      "msal",
      "loadash",
      "sass",
    ],
    period: "2022-Present",
    type: "professional",
  },
  {
    title: "Events Platform",
    description: "Platform for managing event registrations and ticket sales",
    image: eventsImage,
    liveUrl:
      "https://test.mobitti.com/web_client/mobile-app/event-web.html?ecode=97104069-1cdc-48a8-ac39-46245b058e14",
    technologies: ["HTML", "Vue JS", "Bootstrap", "AJAX"],
    period: "2023-Present",
    type: "professional",
  },
  {
    title: "Weather Forecast",
    description: "Weather application with real-time forecasts",
    image: "https://my-portfolio-asaf.netlify.app/img/websites/weather.jpg",
    liveUrl: "https://weather-forecast-asaf.netlify.app/",
    sourceUrl: "https://github.com/asaf6024/Weather-Forecast",
    technologies: ["React JS", "Redux", "Bootstrap", "AccuWeather API"],
    period: "2021",
    type: "personal",
    video: weatherVideo,
  },
  {
    title: "Tic Tac Toe",
    description: "A Tic Tac Toe game",
    image: "https://my-portfolio-asaf.netlify.app/img/websites/ticTacToe.jpg",
    liveUrl: "https://tictactoe-asaf.netlify.app/",
    sourceUrl: "https://github.com/asaf6024/Tic-Tac-Toe",
    technologies: ["React JS", "JavaScript", "Bootstrap"],
    period: "2021",
    type: "personal",
  },
  {
    title: "The Breaking Bad",
    description: "All Episodes and Characters of The Breaking Bad",
    image:
      "https://my-portfolio-asaf.netlify.app/img/websites/breaking_bad.jpg",
    // liveUrl: "https://the-breaking-bad-episodes.netlify.app/",
    sourceUrl: "https://github.com/asaf6024/The-Breaking-Bad",
    technologies: ["React-Redux", "JavaScript", "Bootstrap"],
    period: "2021",
    type: "personal",
    gif: "https://user-images.githubusercontent.com/33829557/147543608-8dbe311b-5c9b-4713-8f66-27cf5788e142.gif",
  },
  {
    title: "Spotify Playlists Globally",
    description: "Global playlist browser using Spotify API",
    image: "https://my-portfolio-asaf.netlify.app/img/websites/spotify.JPG",
    // liveUrl: "https://spotify-platylists-asaf.netlify.app/",
    sourceUrl: "https://github.com/asaf6024/Spotify-Playlists",
    technologies: ["React JS", "Spotify APIs", "Sass", "Bootstrap"],
    period: "2021",
    type: "personal",
    gif: "https://user-images.githubusercontent.com/33829557/144406073-f9636014-1e43-4f02-8851-ad3cc821791d.gif",
  },
  // {
  //   title: "E-Commerce Demo",
  //   description: "A demo e-commerce application",
  //   image: "https://my-portfolio-asaf.netlify.app/img/websites/ecommerce.jpg",
  //   liveUrl: "https://e-commerce-asaf.netlify.app/",
  //   sourceUrl: "https://github.com/asaf6024/E-commerce-site",
  //   technologies: ["React-Redux", "JavaScript", "mdbReact"],
  //   period: "2021",
  //   type: "personal",
  // },
  // {
  //   title: "Meme Generator",
  //   description: "Generate memes with custom text",
  //   image: "https://my-portfolio-asaf.netlify.app/img/websites/meme.jpg",
  //   liveUrl: "https://meme-generator-asaf.netlify.app/",
  //   sourceUrl: "https://github.com/asaf6024/Meme-Genarator",
  //   technologies: ["React JS", "CSS", "mdbReact", "REST API"],
  //   period: "2021",
  //   type: "personal",
  // },
  {
    title: "ATMs in Israel",
    description: "Find ATMs using geolocation",
    image: "https://my-portfolio-asaf.netlify.app/img/websites/findATM.JPG",
    // liveUrl: "https://find-atm-asaf.netlify.app/",
    sourceUrl: "https://github.com/asaf6024/Find-ATM",
    technologies: ["React JS", "Material UI", "Google Autocomplete API"],
    period: "2021",
    type: "personal",
    gif: "https://user-images.githubusercontent.com/33829557/142764641-cad3c999-1fa3-4581-91e6-93b91276f01b.gif",
  },
  {
    title: "Styled-Components",
    description: "Demon of styled-components library implementation",
    image:
      "https://my-portfolio-asaf.netlify.app/img/websites/styled-components.JPG",
    liveUrl: "https://styled-component-asaf.netlify.app/",
    sourceUrl: "https://github.com/asaf6024/styled-components",
    technologies: ["styled-components", "React JS"],
    period: "2021",
    type: "personal",
  },
  // {
  //   title: "Sass Website",
  //   description: "Website built with Sass",
  //   image: "https://my-portfolio-asaf.netlify.app/img/websites/sass.jpg",
  //   liveUrl: "https://my-sass-website.netlify.app/",
  //   sourceUrl: "https://github.com/asaf6024/My-Sass-Website",
  //   technologies: ["Sass", "HTML"],
  //   period: "2021",
  //   type: "personal",
  // },
  {
    title: "Company Website",
    description: "Maintenance, QA, and content updates",
    image: "https://my-portfolio-asaf.netlify.app/img/websites/eventact.jpg",
    liveUrl: "https://eventact.com/",
    technologies: ["JavaScript", "Angular", "CSS"],
    period: "2018-2020",
    type: "professional",
  },
  // {
  //   title: "HP Event Website",
  //   description: "Build & Maintenance",
  //   image: "https://my-portfolio-asaf.netlify.app/img/websites/hp.jpg",
  //   liveUrl: "https://ws.eventact.com/vipevent",
  //   technologies: ["HTML", "Bootstrap 3", "CSS"],
  //   period: "2019",
  //   type: "professional",
  // },
];

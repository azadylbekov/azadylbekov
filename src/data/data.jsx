import { createRef } from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaAt } from "react-icons/fa";
import WeatherAppImg from "../assets/images/weather_app.png";
import SimonGameImg from "../assets/images/simon_game.png";
import filmbookImg from '../assets/images/filmbook.png';
import { uid } from "uid";

export const NAV_LINKS = [
  {
    order: "01.",
    title: "About",
    lang: "nav_about",
    link: "#about",
    ref: createRef(null),
  },
  {
    order: "02.",
    title: "Experience",
    lang: "nav_experience",
    link: "#experience",
    ref: createRef(null),
  },
  {
    order: "03.",
    title: "Work",
    lang: "nav_work",
    link: "#projects",
    ref: createRef(null),
  },
  {
    order: "04.",
    title: "Contact",
    lang: "nav_contact",
    link: "#contact",
    ref: createRef(null),
  },
];

export const SOCIAL_LINKS = [
  {
    title: "Github",
    icon: <FaGithub className="left-fixed-icon" />,
    href: "https://github.com/azadylbekov",
  },
  {
    title: "Instagram",
    icon: <FaInstagram className="left-fixed-icon" />,
    href: "https://www.instagram.com/azadylbekov/",
  },
  {
    title: "Linkedin",
    icon: <FaLinkedin className="left-fixed-icon" />,
    href: "https://www.linkedin.com/in/azamat-adylbekov-2ab1431b8/",
  },
  {
    title: "Mail",
    icon: <FaAt className="left-fixed-icon" />,
    href: "mailto:azamat.adylbekov@gmail.com",
  },
];

export const PET_PROJECTS = [
  {
    en: {
      title: "FilmBook",
      description: "Web application to search, filter, sort movies, tv series and actors. Backend is based on TheMovieDatabase (TMDB).  Functionality includes: detailed page of movies, tv series, person. Displaying popular movies, searching for movies and shows. Authorization as guest user, light-dark mode toggling, feature to add and delete from favorites, watchlist or rate movies",
      stack: "Built with: React, TypeScript, Redux Toolkit, RTK Query, Tailwind, React Bootstrap",
    },
    ru: {
      title: "FilmBook",
      description:
        "Веб приложения для поиска, фильтрация фильмов, сериалов и актеров. А также добавления, удаления из понравившихся, избранных и рейтинги фильмов. Backend API основан на TheMovieDatabase (TMDB).",
      stack: "Создано с использованием: React, TypeScript, Redux Toolkit, RTK Query, Tailwind, React Bootstrap",
    },
    image: filmbookImg,
    appLink: "https://filmbook-eight.vercel.app/",
    githubLink: "https://github.com/azadylbekov/filmbook",
  },
  {
    en: {
      title: "Weather App",
      description:
        "Web app to search for weather for today and for the week for specific city",
      stack: "Built with: HTML5, CSS3, JavaScript",
    },
    ru: {
      title: "Приложение Погода",
      description:
        "Веб приложение для поиска погоды на данный момент и на неделю для конкретного города",
      stack: "Создано с использованием: HTML5, CSS3, JavaScript",
    },
    image: WeatherAppImg,
    appLink: "https://azadylbekov.github.io/WeatherApp/",
    githubLink: "https://github.com/azadylbekov/WeatherApp",
  },
  {
    en: {
      title: "Simon Game",
      description: "JavaScript game for memory",
      stack: "Built with: HTML5, CSS3, JavaScript",
    },
    ru: {
      title: "Игра Simon",
      description: "Javascript игра для тренировки памяти",
      stack: "Создано с использованием: HTML5, CSS3, JavaScript",
    },
    image: SimonGameImg,
    appLink: "https://azadylbekov.github.io/Simon-game/",
    githubLink: "https://github.com/azadylbekov/Simon-game",
  },
];

export const EXPERIENCE_DATA = [
  {
    id: uid(),
    techStack: ["Vue", "Vuex", "JavaScript", "SCSS", "Cypress"],
    en: {
      dates: "Dec 2022 - May 2023",
      title: "Frontend Developer · Mazars",
      location: "Bishkek, Kyrgyzstan",
      bulletPoints: [
        "Delivered new features and bug fixes for CRM-like system using",
        "Covered the front-end part of the web application with visual testing for features using Cypress",
        "Increased overall code quality to acceptable level by refactoring and matching VueJS style guides and recommendations",
        "Held code review process for intern and junior developers",
        "Performed effort estimation of time and complexity of features",
      ],
    },
    ru: {
      dates: "Дек 2022 - Май 2023",
      title: "Фронтенд разработчик · Mazars",
      location: "Бишкек, Кыргызстан",
      bulletPoints: [
        "Добавил новый функционал и исправлял ошибки для CRM-подобной системы с использованием VueJS/Vuex.",
        "Проводил тестирование пользовательского интерфейса веб-приложения с помощью Cypress.",
        "Повысил качества кода до приемлемого уровня за счет рефакторинга с соответствиемруководства по стилю VueJS.",
        "Проводил ревью кода для стажеров и младших разработчиков.",
        "Выполнял оценку времени и сложности задач",
      ],
    },
  },
  {
    id: uid(),
    techStack: ["Vue", "Vuex", "JavaScript", "SCSS", "SignalR"],
    en: {
      dates: "Dec 2021 - Dec 2022",
      title: "Frontend Developer · TimelySoft",
      location: "Bishkek, Kyrgyzstan",
      bulletPoints: [
        '"Wolt/Bolt Converter" - is a middleware that is supposed to convert data of orders from Wolt/Bolt delivery companies to the POS(R_keeper) of restaurants',
        "Built up front end architecture from scratch using VueJs, Vuex",
        "Delivery of fast paced features from client",
        "Responsible for estimation of time and complexity of features",
      ],
    },
    ru: {
      dates: "Дек 2021 - Дек 2022",
      title: "Фронтенд разработчик · TimelySoft",
      location: "Бишкек, Кыргызстан",
      bulletPoints: [
        "«Wolt/Bolt Converter» - это промежуточное программное обеспечение, которое предназначено для преобразования данных заказов от компаний доставки Wolt/Bolt в POS(R_keeper) ресторанов",
        "Реализовал проект с нуля с использованием VueJs, Vuex.",
        "Коммуницировал с клиентом и делал постановку задач",
      ],
    },
  },
  {
    id: uid(),
    techStack: ["Vue", "Vuex", "JavaScript", "SCSS"],
    en: {
      dates: "Sep 2021 - Dec 2021",
      title: "Frontend Developer · DiscoveryStudio",
      location: "Bishkek, Kyrgyzstan",
      bulletPoints: [
        "Delivered features and fixed bugs in the auto apply tender web app",
      ],
    },
    ru: {
      dates: "Сен 2021 - Дек 2021",
      title: "Фронтенд разработчик · DiscoveryStudio",
      location: "Бишкек, Кыргызстан",
      bulletPoints: [
        "Был в команде проекта по разработке веб-приложения для автоматической подачи на тендеры",
      ],
    },
  },
  {
    id: uid(),
    techStack: ["HTML5", "CSS3", "UIkit", "SASS"],
    en: {
      dates: "Jan 2018 - July 2018",
      title: "Frontend Developer · Sunrise Studio",
      location: "Bishkek, Kyrgyzstan",
      bulletPoints: [
        "Developed html, css layouts for web pages and web application of various difficulties",
      ],
    },
    ru: {
      dates: "Янв 2018 - Июль 2018",
      title: "HTML верстальщик · Sunrise Studio",
      location: "Бишкек, Кыргызстан",
      bulletPoints: [
        "Сверстал веб сайты и веб-приложения разной сложности с html, css, ui kit",
      ],
    },
  },
  {
    id: uid(),
    en: {
      dates: "Oct 2018 - April 2021",
      title: "English Teacher · English Zone",
      location: "Bishkek, Kyrgyzstan",
      bulletPoints: [],
    },
    ru: {
      dates: "Окт 2018 - Апрель 2021",
      title: "Преподаватель английского · English Zone",
      location: "Бишкек, Кыргызстан",
      bulletPoints: [],
    },
    techStack: [],
  },
];

export const portfolioData = [
  //2024
  {
    id: 1,
    title: "Empower 2024",
    year: "2024",
    image:
      "https://prodex-iitkgp.netlify.app/assets/img/portfolio/empower2024Logo.png",
    link: "/years/empower-2024",
  },

  //2023
  {
    id: 2,
    title: "Empower 2023",
    year: "2023",
    image:
      "https://prodex-iitkgp.netlify.app/assets/img/portfolio/empower2023.jpeg",
    link: "/years/empower-2023",
  },
  {
    id: 3,
    title: "Invention Factory 2023",
    year: "2023",
    image: "https://prodex-iitkgp.netlify.app/assets/img/portfolio/IF2023.jpeg",
    link: "/years/invention-factory-2023",
  },

  //2022
  {
    id: 4,
    title: "Open IIT Product Design 2022",
    year: "2022",
    image:
      "https://prodex-iitkgp.netlify.app/assets/img/portfolio/open_iit_2022.jpg",
    link: "/years/openiit-2022",
  },
  {
    id: 5,
    title: "Invention Factory IIT Bombay 2022",
    year: "2022",
    image: "https://prodex-iitkgp.netlify.app/assets/img/portfolio/IF.jpg",
    link: "/years/invention-factory-2022",
  },
  {
    id: 6,
    title: "EMPOWER 2022 – IIT Madras",
    year: "2022",
    image:
      "https://prodex-iitkgp.netlify.app/assets/img/portfolio/Empower2022.jpg",
    link: "/years/empower-2022",
  },

  //2021
  {
    id: 7,
    title: "Open IIT Product Design 2021",
    year: "2021",
    image:
      "https://prodex-iitkgp.netlify.app/assets/img/portfolio/Open_iit_2021.png",
    link: "/years/openiit-2021",
  },
  {
    id: 8,
    title: "NOVUS X.0 Producathon 2021",
    year: "2021",
    image:
      "https://prodex-iitkgp.netlify.app/assets/img/portfolio/Novus_X.0.jpg",
    link: "/years/novus-2021",
  },

  //2020
  {
    id: 9,
    title: "Open IIT Product Design 2020",
    year: "2020",
    image:
      "https://prodex-iitkgp.netlify.app/assets/img/portfolio/Open_IIT_2020.jpg",
    link: "/years/openiit-2020",
  },

  //2019
  {
    id: 10,
    title: "Siemens MakeIT Real 2019",
    year: "2019",
    image: "https://prodex-iitkgp.netlify.app/assets/img/portfolio/siemens.jpg",
    link: "/years/siemens-2019",
  },

  //2018
  {
    id: 11,
    title: "Clinton Foundation – CGI U 2018",
    year: "2018",
    image: "https://prodex-iitkgp.netlify.app/assets/img/portfolio/cgiu2.jpg",
    link: "/years/cgiu-2018",
  },
  {
    id: 12,
    title: "Prod-D, Prakriti 2018",
    year: "2018",
    image:
      "https://prodex-iitkgp.netlify.app/assets/img/portfolio/prakriti2.jpg",
    link: "/years/prakriti-2018",
  },
  {
    id: 13,
    title: "Open IIT Product Design 2018",
    year: "2018",
    image:
      "https://prodex-iitkgp.netlify.app/assets/img/portfolio/openiit2018.jpg",
    link: "/years/openiit-2018",
  },
  {
    id: 14,
    title: "Rural Technology Hackathon 2018",
    year: "2018",
    image: "https://prodex-iitkgp.netlify.app/assets/img/portfolio/rth3.jpg",
    link: "/years/rth-2018",
  },
  {
    id: 15,
    title: "GES Product Design 2018",
    year: "2018",
    image: "https://prodex-iitkgp.netlify.app/assets/img/portfolio/GES1.jpg",
    link: "/years/ges-2018",
  },

  //2017
  {
    id: 16,
    title: "R3 – Abhyudaya IIT Bombay 2017",
    year: "2017",
    image: "https://prodex-iitkgp.netlify.app/assets/img/portfolio/r31.jpg",
    video: "https://youtu.be/bBmaqzUP0io",
    link: "/years/r3-iitb-2017",
  },
  {
    id: 17,
    title: "Living Talent Masterpiece 2017",
    year: "2017",
    image:
      "https://prodex-iitkgp.netlify.app/assets/img/portfolio/masterpiece.jpg",
    link: "/years/masterpiece-2017",
  },
];

export const portfolioYears = [
  "All",
  ...Array.from(new Set(portfolioData.map((item) => item.year))).sort(
    (a, b) => Number(b) - Number(a)
  ),
];

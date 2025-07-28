import frontend from '../assets/frontend.svg'
import mobile from '../assets/mobile.svg'
import backend from '../assets/backend.svg'
import css from '../assets/css.png'
import html5 from '../assets/html5.png'
import download7 from '../assets/download7.png'
import download10 from '../assets/download10.png'
import download11 from '../assets/download11.png'
import download13 from '../assets/download13.png'
import react from '../assets/react.png'
import javascript from '../assets/javascript.png'
import node from '../assets/node.png'
import typescript from '../assets/typescript.png'
// import { SiReact, SiTypescript, SiNodedotjs } from 'react-icons/si';
import { SiReact, SiTypescript, SiNodedotjs, SiMysql } from 'react-icons/si';
// import yompay from '../assets/yompay.png'
import hero_bg from '../assets/hero_bg.jpg'
import YompayLanding from '../assets/YompayLanding.jpg'
import arcKitchen from '../assets/arcKitchen.svg'
import zulfah from '../assets/zulfah.png'
import genialsta from '../assets/genialsta.png'
import yompayLogo from '../assets/yompayLogo.png'




export const roles = [
    {
        image: frontend,
        role: 'Frontend'
    },
    {
        image: backend,
        role: 'Backend'
    },
    {
        image: mobile,
        role: 'Mobile Development'
    }
]

export const technologies = [
    {
        image: css
    },
     {
        image: html5
    },
    {
        image: download7
    },
     {
        image: download10
    },
     {
        image: download11
    },
     {
        image: download13
    },
    {
        image: react
    },
    {
        image: javascript
    },
    {
        image: node
    },
    {
        image: typescript
    }
]

export const projects = [
  {
    title: 'Yompay',
    description: 'A digital payment app like Opay, built with React Native and Redux. Users can top up airtime, send money, save, and more.',
    techIcons: [SiReact, SiTypescript, SiNodedotjs],
    githubLink: 'https://github.com/yompay/yompay-mobile',
    liveLink: 'https://www.yompay.com.ng/',
    bgImage: YompayLanding,
  },
    {
    title: 'ZCoop',
    description:
        'An API-powered cooperative savings platform where users join groups, contribute funds, and receive payouts. The full version is private, but I can walk you through a working demo on request.',
    techIcons: [SiNodedotjs, SiTypescript, SiReact],
    githubLink: 'https://github.com/ZULFAHGROUP/cooperative-frontend',
    liveLink: 'https://zcoop.vercel.app/',
    bgImage: hero_bg
    },
  {
    title: 'BeatBank',
    description: 'A backend-powered music finance platform that allows users to save money while streaming music. It blends financial services with media streaming to offer users a rewarding experience. I built the backend APIs and database structure; the frontend is currently in development.',
    techIcons: [SiReact, SiNodedotjs, SiTypescript],
    githubLink: 'https://github.com/Franklin-FR/beatbank_backend',
    liveLink: 'https://beatbank.vercel.app/',
  },
];

export const experiences = [
    {
        image: yompayLogo,
        role: 'Frontend Developer',
        location: 'Yompay - Lagos, Nigeria',
        period: 'May 2025 - Present'
    },
       {
        image: zulfah,
        role: 'Fullstack Developer',
        location: 'Zulfah Group - Lagos, Nigeria',
        period: 'July 2023 - December 2024'
    },
     {
        image: genialsta,
        role: 'Fullstack Developer',
        location: 'Beat Bucks - Lagos, Nigeria',
        period: 'Contract'
    }
]


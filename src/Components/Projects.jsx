import React from 'react';
import Project from './Project.jsx';
import '../styles/Projects.css';

const Projects = () => {
  const projectsInfo = [
     {
      name: 'Artsy',
      desc: 'A webapp challenge by twitter user: CodingOssy built with React, ContextApi, VanillaCSS.',
      liveLink: 'https://artsy-lemon.vercel.app/',
      githubLink: 'https://github.com/FatScythe/Artsy',
      techs: ['React', 'React-Router', 'CSS', 'Vercel'],
      type: 'frontend',
      isOpenSource: true
    },
    {
      name: 'Ayeti-Adorn',
      desc: 'E-commerce web application built with the MERN Stack, with 3 mode of payment using Flutterwave, Paystack or Stripe. User can become vendor add, edit, delete and sell products',
      liveLink: 'https://ayeti-adorn-n9i6.onrender.com/',
      githubLink: 'https://github.com/FatScythe/E-Commerce',
      techs: ['React', 'NodeJs', 'ExpressJS', 'Tailwind', 'MongoDB'],
      type: 'fullstack',
      isOpenSource: true
    },
    {
      name: 'Expense Tracker',
      desc: 'A full stack web app built with the MERN stack. For users to tranck their income and expenses',
      liveLink: 'https://expense-tracker-n9i6.onrender.com/',
      githubLink: 'https://github.com/FatScythe/Expense-Tracker-FS',
      techs: ['React', 'React-Router', 'Vercel', 'NodeJS', 'ExpressJS'],
      type: 'fullstack',
      isOpenSource: true
    },
    {
      name: 'Crappo',
      desc: 'A crypto landing page implementation of a figma design. It contains some nifty features such as animation using the IntersectionObserver and a dummy email post request.',
      liveLink: 'https://devcrappo.netlify.app/',
      githubLink: 'https://github.com/FatScythe/Crappo',
      techs: ['HTML', 'Tailwind', 'Netlify'],
      type: 'frontend',
      isOpenSource: true
    },
    {
      name: 'Musica',
      desc: 'A music web application users can play songs, shuffle playlist built with React, ContextApi, TailwindCSS.',
      liveLink: 'https://musica-xi.vercel.app/Musica',
      githubLink: 'https://github.com/FatScythe/',
      techs: ['React', 'Context-API', 'Tailwind','Vercel'],
      type: 'frontend',
      isOpenSource: true
    },
    {
      name: 'Motion',
      desc: 'Server application built with Typescript, NodeJS and ExpressJS. Motion is blog app that allows readers to read blog posts and add blog post, allows author to add, update and delete their blog(s), It is authenticated using cookies.',
      liveLink: 'https://github.com/FatScythe/Motion',
      githubLink: 'https://github.com/FatScythe/Motion',
      techs: ['Typescript', 'NodeJS', 'ExpressJS', 'MongoDB'],
      type: 'backend',
      isOpenSource: true
    },
    {
      name: 'Console Applications',
      desc: 'A compilation of console application, such as ATM app, Calculator app, "Rock-Paper and Scissors" game, Dice-game, Guessing-game and Task app',
      liveLink: 'https://github.com/FatScythe/Console-Apps',
      githubLink: 'https://github.com/FatScythe/Console-Apps',
      techs: ['C#', '.NET'],
      type: 'console',
      isOpenSource: true
    },
    {
      name: 'Food App',
      desc: 'Recipe App is a web app made with Tailwind CSS, for searching recipes of foodstuffs. It uses the Edamame API to achieve this. It also contains a blog page which is connected to Firebase, and as a form with JS validation to add a new blog post, you can also delete Blogpost from the Firebase DB.',
      liveLink: 'https://devrecipeapp.netlify.app/',
      githubLink: 'https://github.com/FatScythe/FoodApi',
      techs: ['HTML', 'Tailwind', 'Firebase'],
      type: 'frontend',
      isOpenSource: true
    },
    // {
    //   name: 'Project 2',
    //   desc: 'congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed',
    //   liveLink: 'website url',
    //   githubLink: 'https://github.com/FatScythe/',
    //   techs: ['React', 'React-Router', 'Vercel', 'Socket.io', 'Redux'],
    //   type: 'console',
    //   isOpenSource: true
    // }
    
  ]

  return (
    <div className="Projects" id="projects" >
      <h2>My Projects</h2>
      <div>
{projectsInfo.map((project, index) => <Project info={project} key={index} />)}
        
      </div>
    </div>
  )
}

export default Projects;

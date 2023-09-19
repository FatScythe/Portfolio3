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
      techs: ['React', 'React-Router', 'CSS','Vercel'],
      isOpenSource: true
    },
    {
      name: 'Project 2',
      desc: 'congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed',
      liveLink: 'website url',
      githubLink: 'https://github.com/FatScythe/',
      techs: ['React', 'React-Router', 'Vercel', 'Socket.io', 'Redux'],
      isOpenSource: true
    },
     {
      name: 'Project 2',
      desc: 'congue quisque egestas diam in arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat sed',
      liveLink: 'website url',
      githubLink: 'https://github.com/FatScythe/',
      techs: ['React', 'React-Router', 'Vercel', 'Socket.io', 'Redux'],
      isOpenSource: true
    }
    
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

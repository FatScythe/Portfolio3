import React from 'react'

import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai'

import '../styles/Socials.css';

const Socials = () => {
  return (
    <div className='socials'>
      <h2>Find Me @ The Web</h2>
      <div className="social">
        {/* <div className='insta'>
          <AiFillInstagram />
          <p>Instagram</p>
          <a href="https://www.instagram.com/yourusername" target='_blank' rel='noreferrer'>Let's Connect</a>
        </div> */}
        <div className='git'>
          <AiFillGithub />
          <p>Github</p>
          <a href="https://github.com/FatScythe" target='_blank' rel='noreferrer'>Let's Connect</a>
        </div>
        <div className='twit'>
          <AiFillTwitterCircle />
          <p>Twitter</p>
          <a href="https://twitter.com/holadhayo" target='_blank' rel='noreferrer'>Let's Connect</a>
        </div>
        <div className='link'>
          <AiFillLinkedin />
          <p>Linkedin</p>
          <a href="https://linkedin.com/in/abdullahi-fahm-89312819a" target='_blank' rel='noreferrer'>Let's Connect</a>
        </div>
      </div>
    </div>
  )
}

export default Socials
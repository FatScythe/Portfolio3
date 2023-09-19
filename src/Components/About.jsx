import React from 'react'

import '../styles/About.css'

const About = () => {
  const calculate_age = () => {
    var today = new Date();
    var birthDate = new Date("1999-09-28");
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    return age_now;
  }
  return (
    <div className='about' id="about">
      <h2>Get To Know Me</h2>
      <div className="words">
        I am a full-stack developer passionate about implementing beautiful designs and building functional and robust applications. 
        I am a {calculate_age()} years old physics graduate. 
        I have a very solid understanding of HTML, CSS and JS, can convert UI designs to code and building server side applications too. 
        I love learning about new stuffs, especially in the tech world. 
        I have a very positive view of life and I like to think most things are possible if you set your mind to it. : )
      </div>
    </div>
  )
}
export default About;

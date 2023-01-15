import React from 'react'
import './about.css'
import Me from '../../img/final2.webp'

const About = () => {
  return (
    <div className='a'>
        <div className='a-left'>
            <div className='a-card bg'></div>
            <div className='a-card'>
                <img src ={Me} alt="" className='a-img'></img>
            </div>
        </div>
        <div className='a-right'>
            <h1 className='a-title'>About Me</h1>
            <p className='a-sub'>I am a B.Tech Computer Science Student pursuing my degree from Manav Rachna University</p>
            <p className='a-desc'>I live in Faridabad, Haryana. I am 21 years old. I have cleared my 10th and 12th from CBSE Board with an aggregate CGPA of 93% and 89% respectively.</p>
        </div>
    </div>
  )
}

export default About
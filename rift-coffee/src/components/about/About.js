import React from 'react'
import Coffee from '../../content/image/coffee2.jpg'
import "./About.css"
import 'animate.css'

const About = () => {
  return (
    <div className='a'>
        <div className='a-left'>
          <img src={Coffee} className='a-img animate__animated animate__fadeInUp'></img>
        </div>


        <div className='a-right'>
          <div className='a-right-wrapper'>
            <h2 className='a-about animate__animated animate__fadeInUp'>Our Coffee</h2>
            <h1 className='a-title animate__animated animate__fadeInUp'>Choose Your Favorite Coffee</h1>
            <p className='a-desc animate__animated animate__fadeInUp'>More than 100+ type of coffee are ready to serve by our professionals</p>
            <ul className='a-list animate__animated animate__fadeInUp'>
              <li className='a-list-item'>Cappucino</li>
              <li className='a-list-item'>.</li>
              <li className='a-list-item'>Latte</li>
              <li className='a-list-item'>.</li>
              <li className='a-list-item'>Arabica</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default About
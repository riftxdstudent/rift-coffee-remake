import React from 'react'
import Coffee from '../../content/image/coffee1.jpg';
import Logo from '../../content/image/logo.png';
import './Intro.css';
import 'animate.css';

const Intro = () => {
  return (
    <div className='i'>
        <div className='i-left'>
            <div className='i-left-wrapper'>
                <h2 className='i-intro animate__animated animate__fadeInUp'>Rift Coffee</h2>
                <h1 className='i-name animate__animated animate__fadeInUp'>Enjoy Your Morning Coffee.</h1>
                <div className='i-title animate__animated animate__fadeInUp'>
                    <div className='i-title-wrapper'>
                        <div className='i-title-item'>Boost your day!</div>
                    </div>
                </div>
                <div className='i-desc animate__animated animate__fadeInUp'>
                    Take your activity and build your mood with a glass of coffee in the morning
                </div>
            </div>
        </div>

        <div className='i-right'>
            <img src={Coffee} alt='' className='i-img animate__animated animate__fadeInUp'></img>
        </div>

    </div>
  )
}

export default Intro
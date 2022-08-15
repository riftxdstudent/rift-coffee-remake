import React from 'react'
import Coffee from '../../content/image/coffee3.jpg'
import './Market.css'
import 'animate.css'

const Market = () => {
  return (
    <div className='m'>
        <div className='m-left'>
          <div className='m-left-wrapper'>
            <h2 className='m-market'>Our Branch</h2>
            <h1 className='m-title'>We're on Your Hood, Come Here!</h1>
            <p className='m-desc'>We're here in your city! Don't miss the moment to enjoy a cup of coffee!</p>
          </div>
        </div>

        <div className='m-right'>
          <img src={Coffee} className='m-img'></img>
        </div>
    </div>
  )
}

export default Market
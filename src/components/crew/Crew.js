import React from 'react'
import './crew.scss';
import Nav from '../nav/Nav';

import commander from '../../assets/crew/image-douglas-hurley.png'

const Crew = () => {
   
  return (
    <div className='crew'>
        <Nav/>
        <div className="crew__wrapper">
        <div className="crew__descr-wrapper">
        <div className="crew__title">
        <span>02</span>
        Meet your crew
        </div>

        <div className="crew__job">
        Commander
        </div>
        <div className="crew__name">
        Douglas Hurley
        </div>

        <div className="crew__descr">
        Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.
        </div>

        <div className="crew__btn">
        <div className='crew__btn-list'>
            <button className="crew__btn-item active__crew"></button>
            <button className="crew__btn-item"></button>
            <button className="crew__btn-item"></button>
            <button className="crew__btn-item"></button>
        </div>
        </div>

        </div>

        <div className="crew__img">
            <img src={commander} alt="commander" />
        </div>
        </div>
    </div>
  )
}

export default Crew
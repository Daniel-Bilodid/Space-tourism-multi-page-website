import React from 'react'
import './tech.scss'
import Nav from '../nav/Nav'
import img from '../../assets/technology/image-launch-vehicle-portrait.jpg'
const Tech = () => {
  return (

    <div className='tech'>
    <Nav></Nav>    
    <div className="tech__title">
        <span>02</span>
        SPACE LAUNCH 101
        </div>
        <div className="tech__wrapper">

       
        <div className="tech__info-wrapper">
           <div className="tech__descr-wrapper">
           <div className="tech__btn-list">
                <button className="tech__btn-item active-tech"><span>1</span></button>
                <button className="tech__btn-item"><span>2</span></button>
                <button className="tech__btn-item"><span>3</span></button>
            </div>

          <div className="wrapper__tech">
          <div className="tech__name">
            THE TERMINOLOGY…
            </div>

            <div className="tech__subtitle">
            LAUNCH VEHICLE
            </div>

            <div className="tech__descr">
            A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
            </div>
          </div>
           </div>
            
        </div>
        <div className="tech__img">
                <img src={img} alt="img" />
            </div>
        </div>
    </div>
  )
}

export default Tech

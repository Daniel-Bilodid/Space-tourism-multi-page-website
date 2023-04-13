import React from 'react'
import './destination.scss'
import Nav from '../nav/Nav'
import moon from '../../assets/destination/image-moon.png';
const Destination = () => {
  return (
    <div className='dest'>
    <Nav></Nav>


    <div className="dest__title">
        <div className="dest__title-wrapper">
        <span>01</span>
        Pick your destination
        </div>
    </div>



    <div className="planet__info">
        <div className="planet__info-wrapper">
            <div className="planet__info-img">
                <img src={moon} alt="moon" />
            </div>

            <div className="planet__info-text">

                <ul className='planet__info-list'>
                    <li className="planet__info-item">Moon</li>
                    <li className="planet__info-item">Mars</li>
                    <li className="planet__info-item">Europa</li>
                    <li className="planet__info-item">Titan</li>
                </ul>

                <div className="planet__info-title">
                    Moon
                </div>

                <div className="planet__info-descr">
                See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.
                </div>
                
                <div className="planet__info-hr">

                </div>

                <div className="planet__info-distance">
                    <div className="planet__info-avg">
                    <span>AVG. DISTANCE</span>
                    384,400 km
                    </div>

                    <div className="planet__info-travel">
                    <span>Est. travel time</span>
                    3 days
                    </div>
                </div>

            </div>
        </div>
    </div>

    </div>
  )
}

export default Destination
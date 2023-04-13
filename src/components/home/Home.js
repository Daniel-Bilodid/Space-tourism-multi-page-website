import React from 'react'
import Nav from '../nav/Nav'
import './home.scss'
const Home = () => {

  return (
   
    <div>


        <div className="home">
        <Nav></Nav>
        <div className="home__wrapper">
            <div className="home__info">
                <div className="home__title">
                SO, YOU WANT TO TRAVEL TO 
                </div>

                <h1 className="home__space">
                    SPACE
                </h1>

                <div className="home__descr">
                Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                </div>
            </div>


            
           <div className="button">
           <div className="home__button-wrapper">
           </div>
           <div className="home__button">
           
          
                <span>EXPLORE</span>
                </div>
            
           </div>
        </div>
        </div>
      
    </div>
  )
}

export default Home
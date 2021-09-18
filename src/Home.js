import React from "react";
import './home.scss'
import star from './icon-star.svg'
import celerio from './celerio.png'

function Home(){
    return(
        <div className="home">
        <h1>Welcome to Car Zone</h1>
        <h2>World's Best Online Car Retail</h2>
        <h3>"Know your car before you buy it"</h3>
        <div className="ratings">
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <br />
        <h4>Financial Express</h4>
        </div>
        <img src={celerio} alt="celerio car, Maruti" id="celerio"/>
        </div>
    )
}

export default Home;
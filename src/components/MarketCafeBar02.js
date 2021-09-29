import React, { Component } from 'react';
import '../css/MarketCafeBar02.css';


import sunnySky from '../images/logoColors/SunnySky.jpg';
import logoRed from '../images/logoColors/LogoColors001.svg'
import logoOrange from '../images/logoColors/LogoColors002.svg'
import logoYellow from '../images/logoColors/LogoColors003.svg'
import logoGreen from '../images/logoColors/LogoColors004.svg'
import logoBlue from '../images/logoColors/LogoColors005.svg'
import logoPurple from '../images/logoColors/LogoColors006.svg'


import logo01 from '../images/edited/01_Logo01_3.png'


class MarketCafeBar02 extends Component {


    render() {
        return (

            <div className="image-container">
                <img id="sunnyCloudsBar" alt="" src={sunnySky} /> 
                <span>
                    <img className="img-fluid" alt="" id="logoRed" src={logoRed}/>
                </span>
                <span>
                    <img className="img-fluid" alt="" id="logoOrange" src={logoOrange}/>
                </span>
                <span>
                    <img className="img-fluid" alt="" id="logoYellow" src={logoYellow}/>
                </span>
                <span>
                    <img className="img-fluid" alt="" id="logoGreen" src={logoGreen}/>
                </span>
                <span>
                    <img className="img-fluid" alt="" id="logoBlue" src={logoBlue}/> 
                </span>
                <span>
                    <img className="img-fluid" alt="" id="logoPurple" src={logoPurple}/>  
                </span>

            </div>

        );
    }
}

export default MarketCafeBar02



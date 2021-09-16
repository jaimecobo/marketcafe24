import React, { Component } from 'react';
import '../css/CloudsBar.css';


import clouds from '../images/Clouds_bar.jpg';
import decaf_owl from '../images/caffeine owl/Decaf_owl.png'
import HalfCaf_owl from '../images/caffeine owl/Half-caf_owl.png'
import Regular_owl from '../images/caffeine owl/Regular_owl.png'
import Irish_coffee_owl from '../images/caffeine owl/Irish_coffee_owl.png'
import Expresso_owl from '../images/caffeine owl/Expresso_owl.png'
import Double_expresso_owl from '../images/caffeine owl/Double_expresso_owl.png'


import logo01 from '../images/edited/01_Logo01_3.png'


class CloudsBar extends Component {


    render() {
        return (

            <div className="image-container">
                <img id="cloudsBar" alt="" src={clouds} /> 
                <span>
                    <img alt="" id="caffeine_owl01" src={decaf_owl}/>
                </span>
                <span>
                    <img alt="" id="caffeine_owl02" src={HalfCaf_owl}/>
                </span>
                <span>
                    <img alt="" id="caffeine_owl03" src={Regular_owl}/>
                </span>
                <span>
                    <img alt="" id="caffeine_owl04" src={Irish_coffee_owl}/>
                </span>
                <span>
                    <img alt="" id="caffeine_owl05" src={Expresso_owl}/> 
                </span>
                <span>
                    <img alt="" id="caffeine_owl06" src={Double_expresso_owl}/>  
                </span>

            </div>

        );
    }
}

export default CloudsBar



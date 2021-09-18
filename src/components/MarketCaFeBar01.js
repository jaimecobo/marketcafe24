import React, { Component } from 'react';
import '../css/MarketCaFeBar01.css';

import greyBar from '../images/grey_gradient.png'
// import greyBar from '../images/CoffeeBar.jpg'
import text_cafe from '../images/TEXTOS_CAFE.svg'
import logo01 from '../images/LogoScone04.svg'
import logo02 from '../images/LogoScone02.svg'


class MarketCaFeBar01 extends Component {

text_cafe
    render() {
        return (

            <div className="image-container">

                <img id="greyBar" alt="" src={greyBar} /> 

                <span>
                    <img alt="" id="logoBar02" src={logo02}/>
                </span>
                 <span>
                    <img alt="" id="text_cafe" src={text_cafe}/>
                </span>
                <span>
                    <img alt="" id="logoBar01" src={logo02}/>
                </span>

            </div>

        );
    }
}

export default MarketCaFeBar01



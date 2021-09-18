import React, { Component } from 'react';
import '../css/MarketCaFeBar03.css';
import greyBar from '../images/BreadsBar04.png'
import text_bread from '../images/TEXTOS_PAN.svg'
import logo01 from '../images/LogoScone04.svg'
import logo02 from '../images/LogoScone02.svg'
import logo03 from '../images/edited/01_Logo01_3_01.svg'


class MarketCaFeBar03 extends Component {

text_cafe
    render() {
        return (

            <div className="image-container">

                <img id="greyBar" alt="" src={greyBar} /> 

                <span>
                    <img alt="" id="logoBreadBar01" src={logo03}/>
                </span>
                <span>
                    <img alt="" id="logoBreadBar02" src={logo03}/>
                </span>
                 <span>
                    <img alt="" id="text_bread" src={text_bread}/>
                </span>
                <span>
                    <img alt="" id="logoBreadBar03" src={logo03}/>
                </span>
                <span>
                    <img alt="" id="logoBreadBar04" src={logo03}/>
                </span>

            </div>

        );
    }
}

export default MarketCaFeBar03



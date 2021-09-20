import React, { Component } from 'react';
import '../css/AlcoholBar.css';


import alcoholBar from '../images/edited/Alcohol01.png';


// import logo01 from '../images/edited/01_Logo01_3.png'


class AlcoholBar extends Component {


    render() {
        return (

            <div className="image-container">
                <img id="alcoholBar" alt="" src={alcoholBar} />
            </div>

        );
    }
}

export default AlcoholBar



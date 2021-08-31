import React, { Component } from 'react';
import Clock from "./Clock"
import DateTimeMadrid from "./DateTimeMadrid"
import Weather from './Weather';
import '../css/Banner.css';
import '../css/Dishes.css';


import tiny_horse_agency_gradient from '../images/Tiny-Horse-Agency-Gradient.jpg';

import blackBigLogo200x200 from '../images/blackBigLogo100x100.png'
import clearLogo200x200 from '../images/clearLogo100x100.png'
import tiny_Horse_marketing_agency_contact_short from '../images/Tiny-Horse-Marketing-Agency-Contact-Short.jpg'


class Banner extends Component {
    
    render() {
        return (
            <div className="d-flex justify-content-evenly">
            {/* <div class="d-flex bd-highlight"> */}
                <div ><h5><Clock /></h5></div>
                <div ><h5><DateTimeMadrid /></h5></div>
                <div ><Weather /></div>
            </div>

           
        );
    }
}

export default Banner;



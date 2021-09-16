import React, { Component } from 'react';
import '../css/Torres_img.css';
import '../css/Dishes.css';
import torres from '../images/madrid_torres.jpg'
import services01 from '..//images/Services01.svg'
import services02 from '..//images/Services02.svg'


class Torres_img extends Component {
    
    render() {
        return (
           
            <div class="image-container">

                <img alt="" id="torres_img" src={torres} />
                <img alt="" id="services01" src={services01}/>
                <img alt="" id="services02" src={services02}/>
                
            </div>

           
        );
    }
}

export default Torres_img;

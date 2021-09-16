import React, { Component } from 'react';
import '../css/Bernabeu.css';
// import '../css/Dishes.css';
import bernabeu from '../images/Bernabeu03.jpeg'
import bernabeuOffers from '../images/BernabeuOffers03.svg'
// import services01 from '..//images/Services01.svg'
// import services02 from '..//images/Services02.svg'


class Bernabeu extends Component {
    
    render() {
        return (
           
            <div class="image-container">

                <img alt="" id="bernabeu" src={bernabeu} />
                <img alt="" id="bernabeuOffers" src={bernabeuOffers}/>
                {/* <img alt="" id="services02" src={services02}/> */}
                
            </div>

        );
    }
}

export default Bernabeu;

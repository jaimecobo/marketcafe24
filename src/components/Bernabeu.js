import React, { Component } from 'react';
import '../css/Bernabeu.css';
import bernabeu from '../images/Bernabeu03.jpeg'
import bernabeuOffers from '../images/BernabeuOffers03.svg'



class Bernabeu extends Component {
    
    render() {
        return (
           
            <div class="image-container">

                <img className="img-fluid" alt="" id="bernabeu" src={bernabeu} />
                <img className="img-fluid" alt="" id="bernabeuOffers" src={bernabeuOffers}/>
                
            </div>

        );
    }
}

export default Bernabeu;

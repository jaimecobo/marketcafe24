import React, { Component } from 'react';
import '../css/Reviews.css';
import Cibeles from '../images/CybelePlaza.jpg'

class Reviews extends Component {
    

    render() {
        return (

            <div id="Reviews" class="image-container">

                {/* <script src="https://apps.elfsight.com/p/platform.js" defer></script> */}
                <div id="googleRev" class="elfsight-app-0b36a7d5-2fd7-43d5-a2c2-177ee1318cd5"></div>
                <img id="cibeles" alt="" src={Cibeles} />

            </div>
    
        );
    }
}

export default Reviews
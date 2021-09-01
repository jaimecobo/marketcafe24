import React, { Component } from 'react';
import '../css/Main_img.css';
import '../css/Dishes.css';
import GranViaMadrid from '../images/Gran_Vía_(Madrid)_1.jpg'


// import tiny_horse_agency_gradient from '../images/Tiny-Horse-Agency-Gradient.jpg';

// import blackBigLogo200x200 from '../images/blackBigLogo100x100.png'
// import clearLogo200x200 from '../images/clearLogo100x100.png'
// import tiny_Horse_marketing_agency_contact_short from '../images/Tiny-Horse-Marketing-Agency-Contact-Short.jpg'


class Main_img extends Component {
    
    render() {
        return (

            <div id='interns_img_block'>
                <img id="main_img" src={GranViaMadrid} />
                
                    {/* <div id="home_text" class="textCentral_home">
                        <h1>
                            Rooted in the intersection of brand and entertainment, we build  audiences and move people by  creating for what’s next. next? 
                    
                        </h1>
                    </div> */}
                    
            </div>

           
        );
    }
}

export default Main_img;



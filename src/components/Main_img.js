import React, { Component } from 'react';
import '../css/Main_img.css';
import '../css/Dishes.css';
import granViaMadrid from '../images/GranViaMadrid.jpg'
import findUs from '../images/findUs01.svg'


class Main_img extends Component {
    
    render() {
        return (

            <div class="image-container">

                <img alt="" id="main_img" src={granViaMadrid} />
                <img alt="" id="findUs" src={findUs}/>
                
            </div>

            // <div id='interns_img_block'>
            //     <img alt="" id="main_img" src={granViaMadrid} />
                
            //         {/* <div id="home_text" class="textCentral_home">
            //             <h1>
            //                 Rooted in the intersection of brand and entertainment, we build  audiences and move people by  creating for what’s next. next? 
                    
            //             </h1>
            //         </div> */}
                    
            // </div>

           
        );
    }
}

export default Main_img;



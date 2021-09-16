import React, { Component } from 'react';
import '../css/Footer.css';


class Footer extends Component {

    render() {
        return (

<div id="bottomPage" class="d-flex">
                        <ul class="nav flex-container">
                          <li class="nav flex-container">

                            <ul id="ul_botton_page_00">
                              <li>
                                <img id="footer_logo" src="Tiny-Horse-logo-White-footer.png"
                                alt="Tiny Horse Footer Logo" />
                              </li>
                              <li>
                                <p>
                                  <a href="http://www.teamwhistle.com" target="_blank" rel="noopener noreferrer">
                                    <img id="teamWhistleLogo" src="TeamWhistle.png" class="max-w-200" alt="Team Whistle Logo" />
                                  </a>
                                </p>
                              </li>
                              <li>
                                  
                              </li>
                            </ul>

                            <ul id="ul_botton_page_01">
                              <li>
                                <p><span>&nbsp;</span></p>
                                <p><span>&nbsp;</span></p>
                                <h6>6121 SUNSET BL</h6>
                              </li>
                              <li>
                                <p><span>&nbsp;</span></p>
                                <h6>LOS ANGELES, CA 90028</h6>
                                <p><span>&nbsp;</span></p>
                              </li>
                              <li>
                                <h6>
                                  <a href="#">INFO@TINYHORSE.COM</a>
                                </h6>
                              </li>
                            </ul>

                            <ul id="ul_botton_page_02">
                              <li>
                                <p><span>&nbsp;</span></p>
                                <p><span>&nbsp;</span></p>
                                <h6>LOS ANGELES</h6>
                              </li>
                              <li>
                                <p><span>&nbsp;</span></p>
                                <h6>CHARLOTTE</h6>
                              </li>
                              <li>
                                <p><span>&nbsp;</span></p>
                                <h6>NEW YORK</h6>
                              </li>
                            </ul>

                          </li>
                        </ul>



                        <div id="copyright" class="container">
        <span class="copyright">
        © Copyright 2020 | Tiny Horse |
        <a href="/privacy-policy/">Privacy Policy</a> |
        <a href="/legal/">Legal</a>
        </span>
    </div>




    <div id="scrollTop" class="container">
      <span class="scrollTop">

        <button onclick="topFunction()" id="toTopBtn" title="Go to top" class="btn btn-link">^</button>
        
      </span>
    </div>




                          
                        
    
    
      
      
    </div> 

    


    );
}
}

export default Footer
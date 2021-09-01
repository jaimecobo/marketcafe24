import React, { Component } from 'react';
import Clock from "./Clock"
import DateTimeMadrid from "./DateTimeMadrid"
import Weather from "./Weather";
import '../css/Navbar.css';
import logo from '../images/mainLogoClear.jpg';

class Navbar extends Component {
    
    render() {
        return (
            <div>
        
                <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">

                    <a class="navbar-brand" href="index.html">
                        <img id="logo" src={logo} alt="Market Café" />
                    </a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul class="navbar-nav mr-auto">

                            <li>
                                <h5> | </h5>
                            </li> 

                            <li class="nav-item active">
                                <a class="nav-link" href="#"><h5> <Clock /> </h5><span class="sr-only">(current)</span></a>
                            </li> 

                            <li>
                                <h5> | </h5>
                            </li> 

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    More Options
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item"><h5> Remove an Entry </h5></a>
                                    <a class="dropdown-item"><h5> Search for a specific entry </h5></a>
                                    <a class="dropdown-item"><h5> Print Address Book </h5></a>
                                    <a class="dropdown-item"><h5> Delete Book </h5></a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item"><h5> Quit </h5></a>
                                </div>
                            </li> 
                            <li>
                                <h5> | </h5>
                            </li> 

                            <li class="nav-item active">
                                <a class="nav-link" href="#"><h5> <DateTimeMadrid /> </h5><span class="sr-only">(current)</span></a>
                            </li> 

                            <li>
                                <h5> | </h5>
                            </li> 

                            <li class="nav-item active">
                                <a class="nav-link" href="#"><h5> <Weather /> </h5><span class="sr-only">(current)</span></a>
                            </li> 

                        </ul>
            

                        <form class="form-inline my-2 my-lg-0" action="http://google.com/search" target="_blank">
                            <input class="form-control mr-sm-2" id="query01" name="q" type="search" placeholder="Google" aria-label="Search" />
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                        </form>

                    </div>
            
                </nav>

            </div>

        );
        
    }

}

export default Navbar

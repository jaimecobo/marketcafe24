import React, { Component } from 'react';
import Clock from "./Clock"
import DateTimeMadrid from "./DateTimeMadrid"
// import Weather from "./Weather";
import '../css/Navbar.css';
import logo from '../images/mainLogoClear.jpg';

class Navbar extends Component {
    
    render() {
        return (
            <div>
        
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">

                    <a className="navbar-brand" href="index.html">
                        <img id="logo" src={logo} alt="Market Café" />
                    </a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav mr-auto">

                            {/* <li>
                                <h5> | </h5>
                            </li> 

                            <li className="nav-item active">
                                <a className="nav-link" href="#"><h5> <Clock /> </h5><span className="sr-only">(current)</span></a>
                            </li>  */}

                            <li>
                                <h5> | </h5>
                            </li> 

                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    More Options
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item"><h5> Remove an Entry </h5></a>
                                    <a className="dropdown-item"><h5> Search for a specific entry </h5></a>
                                    <a className="dropdown-item"><h5> Print Address Book </h5></a>
                                    <a className="dropdown-item"><h5> Delete Book </h5></a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item"><h5> Quit </h5></a>
                                </div>
                            </li> 
                            <li>
                                <h5> | </h5>
                            </li>  */}

                            <li className="nav-item active">
                                {/* <a className="nav-link" href="#"><h5> <DateTimeMadrid /> </h5><span className="sr-only">(current)</span></a> */}
                                <a className="nav-link" href="#"><h5> Servicios</h5><span className="sr-only">(current)</span></a>
                            
                            </li> 

                            <li>
                                <h5> | </h5>
                            </li> 
                            <li className="nav-item active">
                                {/* <a className="nav-link" href="#"><h5> <DateTimeMadrid /> </h5><span className="sr-only">(current)</span></a> */}
                                <a className="nav-link" href="#"><h5> Suscríbete</h5><span className="sr-only">(current)</span></a>
                            
                            </li> 
                            <li>
                                <h5> | </h5>
                            </li> 
                            <li className="nav-item active">
                                {/* <a className="nav-link" href="#"><h5> <DateTimeMadrid /> </h5><span className="sr-only">(current)</span></a> */}
                                <a className="nav-link" href="#"><h5> Encuéntranos</h5><span className="sr-only">(current)</span></a>
                            
                            </li> 
                            <li>
                                <h5> | </h5>
                            </li> 
                            <li className="nav-item active">
                                {/* <a className="nav-link" href="#"><h5> <DateTimeMadrid /> </h5><span className="sr-only">(current)</span></a> */}
                                <a className="nav-link" href="#"><h5> Escribid</h5><span className="sr-only">(current)</span></a>
                            
                            </li> 
                            <li>
                                <h5> | </h5>
                            </li> 
                            <li className="nav-item active">
                                {/* <a className="nav-link" href="#"><h5> <DateTimeMadrid /> </h5><span className="sr-only">(current)</span></a> */}
                                <a className="nav-link" href="#"><h5> Reseñas</h5><span className="sr-only">(current)</span></a>
                            
                            </li> 

                            {/* <li className="nav-item active">
                                <a className="nav-link" href="#"><h5> <Weather /> </h5><span className="sr-only">(current)</span></a>
                            </li>  */}

                        </ul>
            
{/* 
                        <form className="form-inline my-2 my-lg-0" action="http://google.com/search" target="_blank">
                            <input className="form-control mr-sm-2" id="query01" name="q" type="search" placeholder="Google" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                        </form> */}

                    </div>
            
                </nav>

            </div>

        );
        
    }

}

export default Navbar

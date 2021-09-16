import React, { Component } from 'react';
import '../css/Subscribe.css';

import bandera from '../images/Bandera02.png'
// import services01 from '..//images/Services01.svg'
// import services02 from '..//images/Services02.svg'


class Subscribe extends Component {
    
    render() {
        return (
           
            <div class="image-container">

                <img alt="" id="subscribe" src={bandera} />
                <div id="reg">
                    {/* <h1>Regístrate</h1> */}
                    <h1>Subscríbete</h1>
                    <p>Podrás recibir nuestras fabulosas ofertas y promociones</p>
                    {/* <form>
                        <input></input>
                        <button></button>
                    </form> */}
                    <form>

                        <div class="form-outline mb-4">
                        <input type="text" id="form3Example1cg" class="form-control form-control-lg" placeholder="Correo electrónico" />
                        {/* <label class="form-label" for="form3Example1cg">Your Name</label> */}
                        </div>

                        <div class="d-flex justify-content-center">
                        <button type="button" class="btn btn-success btn-block btn-lg gradient-custom-2 text-body">Enviar</button>
                        </div>

                    </form>
                </div>
                {/* <img alt="" id="services01" src={services01}/>
                <img alt="" id="services02" src={services02}/>
                 */}
            </div>

        );
    }
}

export default Subscribe;
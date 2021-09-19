import React, { Component, useCallback } from "react";

import '../css/Subscribe.css';

import bandera from '../images/Bandera02.png'



const form = document.getElementsByClassName('form-inline');


const inputEmail = document.getElementById('inputEmail');



    function firebasePush(input) {
        //prevents from braking
        // if (!app.apps.length) {
        //     app.initializeApp(firebaseConfig);
        // }
        // const firebase = initializeApp(firebaseConfig);

        //push itself
        // var mailsRef = app.database().ref('Emails').push().set(
        //     {
        //         mail: input.value
        //     }
        // );
    }

//push on form submit
    // if (form) {
    //     document.addEventListener('submit', function (evt) {
    //     evt.preventDefault();
    //     console.log('Email = ' + inputEmail);
    //     firebasePush(inputEmail);

    //         //shows alert if everything went well.
    //         return alert('Data Successfully Sent to Realtime Database');
    //     })
    // }






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
                    {/* <form onSubmit={handleSignUp}> */}
                    <form class="form-inline d-flex">
                
                        <div class="form-outline mb-4">
                        <input name="email" type="email" id="inputEmail" class="form-control form-control-lg" placeholder="Correo electrónico" />
                        {/* <label class="form-label" for="form3Example1cg">Your Name</label> */}
                        </div>

                        <div class="d-flex justify-content-center">
                        <button type="submit" class="btn btn-success btn-block btn-lg gradient-custom-2 text-body">Enviar</button>
                        </div>

                    </form>
                    {/* <AuthProvider>
                    </AuthProvider> */}
                </div>
                {/* <img alt="" id="services01" src={services01}/>
                <img alt="" id="services02" src={services02}/>
                 */}
            </div>

        );
    }
}

export default Subscribe;
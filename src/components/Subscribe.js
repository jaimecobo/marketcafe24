import React, { Component, useCallback } from "react";
import '../css/Subscribe.css';

import bandera from '../images/Bandera02.png'

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebaseConfig from './FirebaseConfig'
import { AuthProvider } from "./Auth_Email";
// TODO: Add SDKs for Firebase products that you want to usees

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// https://firebase.google.com/docs/web/setup#available-librari


// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
      event.preventDefault();
    //   const { email, password } = event.target.elements;
      const { email } = event.target.elements;
      try {
        await firebaseConfig
          .auth()
        //   .createUserWithEmailAndPassword(email.value, password.value);
          .createUserWithEmail(email.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    }, [history]);





// class Subscribe extends Component {
    
//     render() {
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
                    <form onSubmit={handleSignUp}>

                        <div class="form-outline mb-4">
                        <input name="email" type="text" id="form3Example1cg" class="form-control form-control-lg" placeholder="Correo electrónico" />
                        {/* <label class="form-label" for="form3Example1cg">Your Name</label> */}
                        </div>

                        <div class="d-flex justify-content-center">
                        <button type="button" class="btn btn-success btn-block btn-lg gradient-custom-2 text-body">Enviar</button>
                        </div>

                    </form>
                    <AuthProvider>
                    </AuthProvider>
                </div>
                {/* <img alt="" id="services01" src={services01}/>
                <img alt="" id="services02" src={services02}/>
                 */}
            </div>

        );
//     }
}

export default SignUp;
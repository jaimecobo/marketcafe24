// import React, { Component, useCallback } from "react";
import React, {useState} from 'react';
import {db} from './FirebaseConfig';
import { collection, addDoc } from "firebase/firestore"; 

import '../css/Subscribe.css';

import bandera from '../images/Bandera02.png'



// const form = document.getElementsByClassName('form-inline');


// const inputEmail = document.getElementById('inputEmail');



//     function firebasePush(input) {
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
    // }

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

    const Subscribe = () =>{

        // const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        // const [message, setMessage] = useState("");
    
    
          async function handleSubmitSubscribe(e){
    
          e.preventDefault();
          
    
          try {
            const docRef = await addDoc(collection(db, "subscribers"), {
            //   name: name,
              email: email,
            //   message: message
            });
            alert("Gracias por subscribirte!");
            // console.log("Document written with ID: ", docRef.id);
          } catch (error) {
            // alert(error.message);
            // console.error("Error adding document: ", error);
          }
    
        //   setName('');
          setEmail('');
        //   setMessage('');
        };
    
    






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
                    {/* <form onSubmit={handleSignUp}> */}
                    <form className="form form-inline d-flex" onSubmit={handleSubmitSubscribe}>
                
                        <div class="form-outline mb-4">
                        <input type="email" id="inputEmail" class="form-control form-control-lg" placeholder="Correo electrónico" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        {/* <input name="email" type="email" id="inputEmail" class="form-control form-control-lg" placeholder="Correo electrónico" /> */}
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
// }

export default Subscribe;
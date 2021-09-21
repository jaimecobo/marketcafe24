
import React, {useState} from 'react';
import {db} from './FirebaseConfig';
import { collection, addDoc } from "firebase/firestore"; 
import ReCAPTCHA from "react-google-recaptcha";

import '../css/Subscribe.css';

import bandera from '../images/Bandera02.png'

    const Subscribe = () =>{

        const [email, setEmail] = useState("");
        let isVerified = false;

        function handleOnChange(value) {
            // console.log("Captcha value:", value);
            isVerified = true;
        }

    
        async function handleSubmitSubscribe(e, token){
    
             e.preventDefault();

                if(isVerified){
             
                    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                    if(email.match(mailformat)){
            
                        try {
                            const docRef = await addDoc(collection(db, "subscribers"), {
                    
                            email: email,
                            });
                            alert("Gracias por subscribirte!");
                            // console.log("Document written with ID: ", docRef.id);
                        } catch (error) {
                            // alert(error.message);
                            // console.error("Error adding document: ", error);
                        }

                    setEmail('');
                    }
                    else{
                        alert("Por favor ingrese una dirección de correo electrónico válida!");
                        // alert("You have entered an invalid email address!");
                    }
                }
                else{
                    alert("Por favor confirma que no sois un robot!")
                }
                
        };
        
    

        return (
           
            <div class="image-container">

                <img alt="" id="subscribe" src={bandera} />
                <div id="reg">
                    {/* <h1>Regístrate</h1> */}
                    <h1>Suscríbete</h1>
                    <p>Podrás recibir nuestras fabulosas ofertas y promociones</p>
               
                    <form  onSubmit={handleSubmitSubscribe}>
                
                        <div class="form-outline mb-4">
                            <input 
                            type="email" 
                            id="inputEmail" 
                            class="form-control form-control-lg" 
                            placeholder="Correo electrónico" 
                            value={email} 
                            onChange={(e)=>setEmail(e.target.value)} 
                            required/>
                        </div>

                        <div class="d-flex justify-content-center">
                            <button 
                                disabled = {isVerified}
                                type="submit" 
                                class="btn btn-success btn-block btn-lg gradient-custom-2 text-body" 
                            >Enviar</button>
                        </div>
                        <div class="d-flex justify-content-center" id="recaptchaSubscribe">
                            <ReCAPTCHA
                                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                // sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                                onChange={handleOnChange}
                            />
                        </div>

                    </form>
                    
                </div>
                
            </div>

        );
    }

export default Subscribe;
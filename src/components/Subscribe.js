
import React, {useState} from 'react';
import {db} from './FirebaseConfig';
import { collection, addDoc } from "firebase/firestore"; 
import ReCAPTCHA from "react-google-recaptcha";

import '../css/Subscribe.css';

import bandera from '../images/Bandera02.png'
import suscribete from '../images/edited/Subscribe01.png'

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
           
            <div className="image-container" id="image-container-subscribe">
            

                <img className="img-fluid" alt="" id="subscribe" src={bandera} />
                <div id="flag_left"></div>
                <div id="reg">
                    {/* <h1>Regístrate</h1> */}
                    {/* <h1>Suscríbete</h1>
                    <h3>Podrás recibir nuestras fabulosas ofertas y promociones</h3> */}
                    <img className="img-fluid" alt="" id="suscribete" src={suscribete} />
               
                    <form  onSubmit={handleSubmitSubscribe}>
                
                        <div className="form-outline mb-4">
                            <input 
                            type="email" 
                            id="inputEmail" 
                            class="form-control form-control-lg" 
                            placeholder="Correo electrónico" 
                            value={email} 
                            onChange={(e)=>setEmail(e.target.value)} 
                            required/>
                        </div>

                        <div className="d-flex justify-content-center">
                            <button 
                                id="enviar_reg01"
                                disabled = {isVerified}
                                type="submit" 
                                class="btn btn-success btn-block btn-lg gradient-custom-2 text-body" 
                            >Enviar</button>
                        </div>
                    
                        {/* <div className="d-flex justify-content-center" id="recaptchaSubscribe">
                            <ReCAPTCHA
                                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                // sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                                onChange={handleOnChange}
                            />
                        </div> */}

                    </form> 
                    
                </div>
                {/* <div id="flag_rigth"></div> */}
            
                {/* <div className="d-flex justify-content-center" id="recaptchaSubscribe">
                    <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        // sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                        onChange={handleOnChange}
                    />
                </div>
                 */}
            </div>


        );
    }

export default Subscribe;
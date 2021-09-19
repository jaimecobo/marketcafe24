
import React, {useState} from 'react';
import {db} from './FirebaseConfig';
import { collection, addDoc } from "firebase/firestore"; 

import '../css/Subscribe.css';

import bandera from '../images/Bandera02.png'

    const Subscribe = () =>{

        const [email, setEmail] = useState("");
    
        async function handleSubmitSubscribe(e){
    
             e.preventDefault();
          
    
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
        };
        
    

        return (
           
            <div class="image-container">

                <img alt="" id="subscribe" src={bandera} />
                <div id="reg">
                    {/* <h1>Regístrate</h1> */}
                    <h1>Subscríbete</h1>
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
                            pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                            required/>
                        </div>

                        <div class="d-flex justify-content-center">
                            <button type="submit" class="btn btn-success btn-block btn-lg gradient-custom-2 text-body">Enviar</button>
                        </div>

                    </form>
                    
                </div>
                
            </div>

        );
    }

export default Subscribe;

import React, {useState} from 'react';
import {db} from './FirebaseConfig';
import { collection, addDoc } from "firebase/firestore"; 
import '../css/ContactUs.css';



  const ContactUs = () =>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    async function handleSubmitContact(e){

        e.preventDefault();
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(email.match(mailformat)){

          try {
            const docRef = await addDoc(collection(db, "contacts"), {
              name: name,
              email: email,
              message: message
            });
            alert("Gracias por escribir!");
            // console.log("Document written with ID: ", docRef.id);
          } catch (error) {
            // alert(error.message);
            // console.error("Error adding document: ", error);
          }

          setName('');
          setEmail('');
          setMessage('');
        }
        else{
            alert("Por favor ingrese una dirección de correo electrónico válida!");
            // alert("You have entered an invalid email address!");
        }
    };


    return (

      <div id="formDiv">
        <div id="formTitle">
            <h2>
              <span id="spanTitle">Nos encanta responder vuestras dudas, conocer vuestras opiniones, Escribid!</span>
            </h2>
        </div>

        <form className="form" onSubmit={handleSubmitContact}>
          <fieldset>

            <ul id="ul_form" class="nav">
              <li id="ul_li_label_form">
                <label>NOMBRE *</label>
              </li>

          
              {/* <li id="ul_li_label_form_01">
                <label>APELLIDO *</label>
              </li> */}

          
              <li id="ul_li_label_form_01">
                <label>CORREO ELECTRONICO *</label>
              </li>
            </ul>

            <ul id="ul_form" class="nav">
              <li>
                <input 
                type="text" 
                id="input_text" 
                placeholder="Nombre" 
                value={name} 
                onChange={(e)=>setName(e.target.value)} 
                required/>
              </li>
              <li>
                <input 
                type="text" 
                id="input_text" 
                placeholder="Correo electrónico" 
                value={email} onChange={(e)=>setEmail(e.target.value)} 
                // pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                // pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,"
                required/>
              </li>
              {/* <li>
                <input type="text" id="input_text" value=""/>
              </li> */}
            </ul>

            <ul id="ul_form" class="nav">
              <li id="ul_li_text_area_title">
                <label>¿COMO PODEMOS AYUDAR? *</label>
              </li>
            </ul>

            <ul id="ul_form" class="nav">
              <li>
                <textarea cols="40" rows="7" id="avia_4_1" placeholder="..." value={message} onChange={(e)=>setMessage(e.target.value)} required></textarea>
              </li>
            </ul>

            <p class="form_element">
              <input type="hidden" value="1" name="submit_form1"/>
              <input id="formButton" type="submit" value="ENVIAR" class="button" data-sending-label="Sending"/>
            </p>
          </fieldset>
        </form>
      </div>

    );
  }

export default ContactUs;
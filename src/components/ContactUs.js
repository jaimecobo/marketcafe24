
import React, {useState, useRef } from 'react';
import {db} from './FirebaseConfig';
import { collection, addDoc } from "firebase/firestore"; 
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "emailjs-com";
// import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";
import '../css/ContactUs.css';



  const ContactUs = () =>{

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID;
    const formContactUs = useRef();

    let isVerified = false;

    function handleOnChange(value) {
        // console.log("Captcha value:", value);
        isVerified = true;
    }

    const emailJS_Function = (e) => {
    // function handleOnClick(e){
      e.preventDefault();
        console.log("Name from emailJS_Function is = " + name)
        console.log("Email from emailJS_Function is = " + email)
        console.log("Message from emailJS_Function is = " + message)
        var templateParams = {
          name,
          email,
          message
        }
        console.log("templateParams in emailJS_Function is " + templateParams.email + " , " + templateParams.name + " , " + templateParams.message)
        if(isVerified){
          
          var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if(email.match(mailformat)){


            // Sends email by EmailJS
            emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formContactUs.current, USER_ID)
            .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: "success",
              title: "Message Sent Successfully"
            })
            }, 
            (error) => {
              console.log(error.text);
              Swal.fire({
                icon: "error",
                title: "Ooops, something went wrong",
                text: error.text,
              })
            });
            e.target.reset();
          }
        }
    };


    async function handleSubmitContact(e){

        e.preventDefault();

        if(isVerified){
          
          var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
          if(email.match(mailformat)){

            emailJS_Function(e);
            // Sends email by EmailJS
            // emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            // .then((result) => {
            // console.log(result.text);
            // // Swal.fire({
            //   icon: "success",
            //   title: "Message Sent Successfully"
            // })
            // }, 
            // (error) => {
            //   console.log(error.text);
            //   Swal.fire({
            //     icon: "error",
            //     title: "Ooops, something went wrong",
            //     text: error.text,
            //   })
            // });
            // e.target.reset();

            // Inserts form in Firebase database
            try {
              const docRef = await addDoc(collection(db, "contacts"), {
                name: name,
                email: email,
                message: message
              });
              Swal.fire({
                icon: "success",
                title: "Gracias por escribir!"
              })
              // alert("Gracias por escribir!");
              // console.log("Document written with ID: ", docRef.id);
            } catch (error) {
              // alert(error.message);
              // console.error("Error adding document: ", error);
            }

            setName('');
            setEmail('');
            setMessage('');
            // e.target.reset();
          }
          else{
            Swal.fire({
              icon: "error",
              title: "Por favor ingrese una dirección de correo electrónico válida!",
            })
              // alert("Por favor ingrese una dirección de correo electrónico válida!");
              // alert("You have entered an invalid email address!");
          }
        }
        else{
          Swal.fire({
            icon: "error",
            title: "Por favor confirma que no sois un robot!",
          })
          // alert("Por favor confirma que no sois un robot!")
      }
    };


    return (

      <div id="formDiv">
        <div id="formTitle">
            <h2>
              <span id="spanTitle">Nos encanta responder vuestras dudas, conocer vuestras opiniones, Escribid!</span>
            </h2>
        </div>

        <form ref={formContactUs} onSubmit={handleSubmitContact}>
          {/* <fieldset> */}

            {/* <ul id="ul_form" class="nav">
              <li id="ul_li_label_form">
                <label>NOMBRE *</label>
              </li> */}

          
              {/* <li id="ul_li_label_form_01">
                <label>APELLIDO *</label>
              </li> */}

          
              {/* <li id="ul_li_label_form_01">
                <label>CORREO ELECTRONICO *</label>
              </li>
            </ul> */}

            <ul id="ul_form" class="nav">
              <li>
                {/* <Form.Field
                  id="form-input-control-last-name"
                  control={Input}
                  label="Nombre"
                  name="user_name"
                  placeholder="Nombre..."
                  required
                  icon="user circle"
                  iconPosition="left" 
                 /> */}
                  <input 
                    type="text" 
                    name="user_name" 
                    id="input_text" 
                    placeholder="Nombre" 
                    value={name} 
                    onChange={e =>setName(e.target.value)} 
                    required
                  />
              </li>


              <li>
                {/* <Form.Field
                  id="form-input-control-email"
                  control={Input}
                  label="Correo electrónico"
                  name="user_email"
                  placeholder="Correo electrónico"
                  required
                  icon="mail"
                  iconPosition="left"
                /> */}

                <input 
                  type="email" 
                  name="user_email"
                  id="input_text" 
                  placeholder="Correo electrónico"
                  value={email} 
                  onChange={e =>setEmail(e.target.value)} 
                  // pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                  // pattern="/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,"
                
                  required
                />
              </li>





              {/* <li>
                <input type="text" id="input_text" value=""/>
              </li> */}
            </ul>

            <ul id="ul_form" class="nav">
              {/* <li id="ul_li_text_area_title">
                <label>¿COMO PODEMOS AYUDAR? *</label>
              </li> */}
            </ul>

            <ul id="ul_form" class="nav">
              <li>


                {/* <Form.Field
                  id="form-textarea-control-opinion"
                  control={TextArea}
                  label="¿COMO PODEMOS AYUDAR? *"
                  name="user_message"
                  placeholder="…"
                  required
                /> */}




                <textarea 
                  name="message" 
                  cols="40" 
                  rows="7" 
                  id="avia_4_1" 
                  placeholder="..." 
                  value={message} 
                  onChange={e =>setMessage(e.target.value)} 
                  required
                >

                </textarea>
              </li>
            </ul>
            {/* <Button type="submit" color="green" onClick={handleOnClick}>ENVIAR</Button> */}

             {/* <p class="form_element"> */}
               {/* <input type="hidden" value="1" name="submit_form1"/> */}
               <input id="formButton" type="submit" value="ENVIAR" class="button" data-sending-label="Sending"/>
             {/* </p> */}
            <div class="d-flex justify-content-center">
                            <ReCAPTCHA
                                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                // sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                                onChange={handleOnChange}
                            />
                        </div>

          {/* </fieldset> */}
        </form>
      </div>

    );
  }

export default ContactUs;
import React, { Component } from 'react';
import '../css/ContactUs.css';


class ContactUS extends Component {

    render() {
        return (



    <div id="formDiv">
    <div id="formTitle">
        <h2>
          <span id="spanTitle">Nos encanta responder vuestras dudas, conocer vuestras opiniones, Escribid!</span>
        </h2>
    </div>

    <form action="#" method="post">
      <fieldset>

        <ul id="ul_form" class="nav">
          <li id="ul_li_label_form">
            <label>NOMBRE *</label>
          </li>

      
          <li id="ul_li_label_form_01">
            <label>APELLIDO *</label>
          </li>

      
          <li id="ul_li_label_form_01">
            <label>CORREO ELECTRONICO *</label>
          </li>
        </ul>

        <ul id="ul_form" class="nav">
          <li>
            <input type="text" id="input_text" value=""/>
          </li>
          <li>
            <input type="text" id="input_text" value=""/>
          </li>
          <li>
            <input type="text" id="input_text" value=""/>
          </li>
        </ul>

        <ul id="ul_form" class="nav">
          <li id="ul_li_text_area_title">
            <label>¿COMO PODEMOS AYUDAR? *</label>
          </li>
        </ul>

        <ul id="ul_form" class="nav">
          <li>
            <textarea cols="40" rows="7" id="avia_4_1"></textarea>
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
}

export default ContactUS
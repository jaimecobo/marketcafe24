
import React, { useEffect, useState } from 'react'
const e = React.createElement;

// API Key methods
var apiKey = '12345';
Weather.setApiKey( apiKey );
var tempApiKey = Weather.getApiKey();

// Language methods
var language = "sp"; // set the language to German - libraries default language is "en" (English)
Weather.setLanguage( language );
var tempLanguage = Weather.getLanguage();


function Weather() {


    const [weatherState, setWeatherState] = useState()

    useEffect(() => {
        setInterval(() => {

        
            Weather.getCurrent("Kansas City", function(current) {
                console.log(
                  ["currently:",current.temperature(),"and",current.conditions()].join(" ")
                );
              });
               
              Weather.getForecast("Kansas City", function(forecast) {
                console.log("forecast high: " + forecast.high());
                console.log("forecast low: " + forecast.low());
              });


        }, 10000);
        
    }, []);
    
    
    return (
        <div>
            {weatherState}
        </div>
    )
}

export default Weather;

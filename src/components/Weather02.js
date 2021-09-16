import React, { useEffect, useState } from "react";

const Weather02 = () => {

  const [state, setState] = useState();

  useEffect(() => {

    // async function resolveDataFetch() {
      let city, temp, clouds, wind, descrp;
      let weatherArray = [];
  
      // return new Promise(resolve => {
           (async () => {
                  const res = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Madrid&units=metric&lang=sp&appid=9b907de1647082886bf99137716d81fe")
                  const json = await res.json()
                  city = json.name
                  temp = json.main.temp
                  clouds = json.clouds.all
                  wind = json.wind.speed
                  descrp = json.weather[0].description
                  
                  console.log('2varCity = ' + city)
                  console.log('2varTemperatura = ' + temp)
                  console.log('2varNubosidad = ' + clouds)
                  console.log('2varVientos = ' + wind)
                  console.log('2varCondiciones = ' + descrp)

                  weatherArray.push(city, temp, clouds, wind, descrp)
  
                  // weatherArray.push("<h3>Ciudad: " + city + "</h3><h3>Temperatura: " + temp + "</h3><h3>Nubosidad: " + 
                  // clouds + "</h3><h3>Viento: " + wind + "</h3><h3>Condiciones: " + descrp + "</h3>");
  
                  console.log('weatherArray = ' + weatherArray)
                  setState(weatherArray)
          })()
          return weatherArray
        // }
  
      
      // }    
    
  }, []);



  return (
          <div>
            <h3>Ciudad: {state[0]}</h3>
            <h3>Temperatura: {state[1]}</h3>
            <h3>Nubosidad: {state[2]}</h3>
            <h3>Viento: {state[3]}</h3>
            <h3>Comdiciones: {state[4]}</h3>
          </div>
        )
}

export default Weather02
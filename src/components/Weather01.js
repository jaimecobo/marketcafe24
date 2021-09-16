// import React, { useEffect, useState } from "react";


async function resolveDataFetch() {
    let city, temp, clouds, wind, descrp;
    let weatherArray = [];

    // return new Promise(resolve => {
        await (async () => {
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

                weatherArray.push("<div><h3>Ciudad: " + city + "</h3><h3>Temperatura: " + temp + "</h3><h3>Nubosidad: " + 
                clouds + "</h3><h3>Viento: " + wind + "</h3><h3>Condiciones: " + descrp + "</h3></div>");

                console.log('weatherArray = ' + weatherArray)

                // weatherString = "<div><h3>Ciudad: " + city + "</h3><h3>Temperatura: " + temp + "</h3><h3>Nubosidad: " + 
                // clouds + "</h3><h3>Viento: " + wind + "</h3><h3>Condiciones: " + descrp + "</h3></div>";
                // resolve(weatherArray);
        })()
        return weatherArray

    //   setTimeout(() => {
    //     resolve('resolved');
    //   }, 2000);
    // });
  }
  
    async function Weather01() {
    console.log('calling');
    const result =  await resolveDataFetch();
    console.log('result = ' + result)
    // console.log('json is = ' + result.name);
    // console.log('json is = ' + result.main.temp);
    // console.log('json is = ' + result.clouds.all);
    // console.log('json is = ' + result.wind.speed);
    // console.log('json is = ' + result.weather[0].description);

    return (
        result
        // await resolveDataFetch()

        // <div>
        //     <h3>Ciudad: {result.name}</h3>
        //     <h3>Temperatura: {result.main.temp}</h3>
        //     <h3>Nubosidad: {result.clouds.all}</h3>
        //     <h3>Viento: {result.wind.speed}</h3>
        //     <h3>Condiciones: {result.weather[0].description}</h3>

        // </div>
    )
  }










// const Weather01 =  () => {
    // const [state, setState] = useState();
        // let city, temp, clouds, wind, descrp;

        // (async () => {
        //     const res = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Madrid&units=metric&lang=sp&appid=9b907de1647082886bf99137716d81fe")
        //     const json = await res.json()
           
        //     console.log('City = ' + json.name)
        //     console.log('Temperatura = ' + json.main.temp)
        //     console.log('Nubosidad = ' + json.clouds.all)
        //     console.log('Vientos = ' + json.wind.speed)
        //     console.log('Condiciones = ' + json.weather[0].description)
        // })();




        // (async () => {
        //     const res = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Madrid&units=metric&lang=sp&appid=9b907de1647082886bf99137716d81fe")
        //     const json = await res.json()
        //     city = json.name
        //     temp = json.main.temp
        //     clouds = json.clouds.all
        //     wind = json.wind.speed
        //     descrp = json.weather[0].description
            
        //     console.log('2varCity = ' + city)
        //     console.log('2varTemperatura = ' + temp)
        //     console.log('2varNubosidad = ' + clouds)
        //     console.log('2varVientos = ' + wind)
        //     console.log('2varCondiciones = ' + descrp)

            // console.log('City = ' + json.name)
            // console.log('Temperatura = ' + json.main.temp)
            // console.log('Nubosidad = ' + json.clouds.all)
            // console.log('Vientos = ' + json.wind.speed)
            // console.log('Condiciones = ' + json.weather[0].description)

            
        // })();








        // (async () => {
        //     const res = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Madrid&units=metric&lang=sp&appid=9b907de1647082886bf99137716d81fe")
        //     const json = await res.json()
        //     // await fetch("http://api.openweathermap.org/data/2.5/weather?q=Madrid&units=metric&lang=sp&appid=96676b6f27da3b5e8f5ea205416d1642")
        //     // .then((response) => response.json())
        //     // .then((json) => setState(json))
        //     // .then((json) => console.log(json));
        //     // Object.entries(json).forEach((obj) => {
        //     //     weatherData.push(obj);
        //     // });
           
        //     console.log('City =' + json.name)
        //     console.log('Temperatura = ' + json.main.temp)
        //      console.log('Nubosidad = ' + json.clouds.all)
        //      console.log('Vientos = ' + json.wind.speed)

        //      console.log('Condiciones = ' + json.weather[0].description)

        
        // })();

    // }, []);


    // console.log('City from fetchData = ' + fetchData.json.name)


    //         console.log('varCity = ' + city)
    //         console.log('varTemperatura = ' + temp)
    //         console.log('varNubosidad = ' + clouds)
    //         console.log('varVientos = ' + wind)
    //         console.log('varCondiciones = ' + descrp)
    // return (
    //     <div></div>
    
    // );

    
    
    
// };

export default Weather01;
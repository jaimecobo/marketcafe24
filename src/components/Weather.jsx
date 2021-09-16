
import React, { useEffect, useState } from 'react'

function Weather() {
  const [weatherState, setWeatherState] = useState()
  // const apiKey = "*********";
  // const zipCode = "Madrid";


useEffect(() => {

  
  const fetchData = async () => {dc

    const data = await fetch("http://api.openweathermap.org/data/2.5/weather?q=Madrid&units=metric&appid=96676b6f27da3b5e8f5ea205416d1642");
    
    console.log("json data object = " + "%j", data)
    // console.log("stringify data = " + data.main.temp);
    // let temp = data.main.temp;
    let obj = JSON.parse(data);
    // console.log("obj.main = " + data);
    setWeatherState(data);
  }

  fetchData();
}, []);

return (
<div>
  {weatherState}
</div>
)

}





// function Weather() {
//   const [weatherState, setWeatherState] = useState()
//   const apiKey = "96676b6f27da3b5e8f5ea205416d1642";
//   const zipCode = "Madrid";

// useEffect(() => {

//   (async () => {
//      const data = await fetch("http://api.openweathermap.org/data/2.5/weather?q=" + zipCode + "&appid=" + apiKey);
//      setWeatherState(data);
//   })();

// }, []);

// return (
//   <div>
//       {weatherState}
//   </div>
// )

// }


export default Weather

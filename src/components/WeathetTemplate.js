// import React, { Component } from 'react';

import React, { useEffect, useState } from 'react'

function WeatherTemplate() {
    // const [State, setState] = useState();

    const [apiData, setApiData] = useState({});
    const [getState, setGetState] = useState('Madrid');
    const [state, setState] = useState('Madrid');

    const apiKey = process.env.REACT_APP_API_KEY;
    
    // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}appid=96676b6f27da3b5e8f5ea205416d1642`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${state}appid=${apiKey}`;
    // const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=Madrid&units=metric&lang=sp&appid=${apiKey}`;

    useEffect(() => {
        fetch(apiUrl)
          .then((res) => res.json())
          .then((data) => setState(data));
      }, [apiUrl]);


      const inputHandler = (event) => {
        setGetState(event.target.value);
      };
      
      const submitHandler = () => {
        setState(getState);
      };



      return (
        <div className="App">
          <header className="d-flex justify-content-center align-items-center">
            <h2>React Weather App</h2>
          </header>
          <div className="container">
            <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
              <div class="col-auto">
                <label for="location-name" class="col-form-label">
                  Enter Location :
                </label>
              </div>
              <div class="col-auto">
                <input
                  type="text"
                  id="location-name"
                  class="form-control"
                  onChange={inputHandler}
                  value={getState}
                />
              </div>
              <button className="btn btn-primary mt-2" onClick={submitHandler}>
                Search
              </button>
            </div>
      
            <div className="card mt-3 mx-auto" style={{ width: '60vw' }}>
              {apiData.main ? (
                <div class="card-body text-center">
                  <img
                    src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
                    alt="weather status icon"
                    className="weather-icon"
                  />
      
                  <p className="h2">
                    {/* {kelvinToFarenheit(apiData.main.temp)}&deg; C */}
                    {apiData.main.temp}&deg; C
                  </p>
      
                  <p className="h5">
                    <i className="fas fa-map-marker-alt"></i>{' '}
                    <strong>{apiData.name}</strong>
                  </p>
      
                  <div className="row mt-4">
                    <div className="col-md-6">
                      <p>
                        <i class="fas fa-temperature-low "></i>{' '}
                        <strong>
                          {/* {kelvinToFarenheit(apiData.main.temp_min)}&deg; C */}
                          {apiData.main.temp_min}&deg; C
                        </strong>
                      </p>
                      <p>
                        <i className="fas fa-temperature-high"></i>{' '}
                        <strong>
                          {/* {kelvinToFarenheit(apiData.main.temp_max)}&deg; C */}
                          {apiData.main.temp_max}&deg; C
                        </strong>
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>
                        {' '}
                        <strong>{apiData.weather[0].main}</strong>
                      </p>
                      {/* <p>
                        <strong>
                          {' '}
                          {countries.getName(apiData.sys.country, 'en', {
                            select: 'official',
                          })}
                        </strong>
                      </p> */}
                    </div>
                  </div>
                </div>
              ) : (
                <h1>Loading</h1>
              )}
            </div>
          </div>
          <footer className="footer">
            <code>
              Created by{' '}
              <a href="https://github.com/imshines" target="none">
                imshines
              </a>{' '}
              using React
            </code>
          </footer>
        </div>
      );
      


    // return (
    //     <div className="App">
    //       <header className="d-flex justify-content-center align-items-center">
    //         <h2>React Weather App</h2>
    //       </header>
    //       <div className="container">
    //         <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
    //           <div class="col-auto">
    //             <label for="location-name" class="col-form-label">
    //               Enter Location :
    //             </label>
    //           </div>
    //           <div class="col-auto">
    //             <input
    //               type="text"
    //               id="location-name"
    //               class="form-control"
    //               onChange={inputHandler}
    //               value={getState}
    //             />
    //           </div>
    //           <button className="btn btn-primary mt-2" onClick={submitHandler}>
    //             Search
    //           </button> 
    //         </div>
      
    //         <div className="card mt-3 mx-auto" style={{ width: '60vw' }}>
    //           {/* {apiData.main ? ( */}
    //             {apiData.main ? (
    //             <div class="card-body text-center">
    //               <img
    //             //   src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
    //                 src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
    //                 alt="weather status icon"
    //                 className="weather-icon"
    //               />
      
    //               <p className="h2">
    //               {/* {kelvinToFarenheit(apiData.main.temp)}&deg; C */}
    //                 {apiData.main.temp}&deg; °C
    //               </p>
      
    //               <p className="h5">
    //                 <i className="fas fa-map-marker-alt"></i>{' '}
    //                 {/* <strong>{apiData.name}</strong> */}
    //                 <strong>{apiData.name}</strong>
    //               </p>
      
    //               <div className="row mt-4">
    //                 <div className="col-md-6">
    //                   <p>
    //                     <i class="fas fa-temperature-low "></i>{' '}
    //                     <strong>
    //                       {/* {kelvinToFarenheit(apiData.main.temp_min)}&deg; C */}
    //                       {apiData.main.temp_min}&deg; °C
    //                     </strong>
    //                   </p>
    //                   <p>
    //                     <i className="fas fa-temperature-high"></i>{' '}
    //                     <strong>
    //                     {/* {kelvinToFarenheit(apiData.main.temp_max)}&deg; C */}
    //                       {apiData.main.temp_max}&deg; °C
    //                     </strong>
    //                   </p>
    //                 </div>
    //                 <div className="col-md-6">
    //                   <p>
    //                     {' '}
    //                     {/* <strong>{apiData.weather[0].main}</strong> */}
    //                     <strong>{apiData.weather[0].main}</strong>
    //                   </p>
    //                   <p>
    //                     <strong>
    //                       {' '}
    //                       {countries.getName(apiData.sys.country, 'en', {
    //                       select: 'official',
    //                       })}
    //                     </strong>
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //           ) : (
    //             <h1>Loading</h1>
    //           )}

    //         </div>
    //       </div>
    //       {/* <footer className="footer">
    //         <code>
    //           Created by{' '}
    //           <a href="https://github.com/imshines" target="none">
    //             imshines
    //           </a>{' '}
    //           using React
    //         </code>
    //       </footer> */}
    //     </div>
    //   );






}

export default WeatherTemplate






// class WeatherTemplate extends Component {
    


//     render() {
//         return (

            // <div className="tomorrow"
            // data-location-id="035186"
            // data-language="ES"
            // data-unit-system="METRIC"
            // data-skin="dark"
            // data-widget-type="upcoming"
            // >
            //     <a
            //         href="https://www.tomorrow.io/weather/"
            //         rel="nofollow noopener noreferrer"
            //         target="_blank"
            //     >
            //         <img
            //         alt="Powered by Tomorrow.io"
            //         src="https://weather-website-client.tomorrow.io/img/powered-by-tomorrow.svg"
            //         />
            //     </a>
            // </div>

            // API KEY AND URL

//         );
//     }
// }
// export default WeatherTemplate

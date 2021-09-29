import React from 'react';
import ReactDOM from 'react-dom';
import Main_img from './components/Main_img'
import Navbar from "./components/Navbar"
import Weather01 from './components/Weather01'
import Weather02 from './components/Weather02'
import WeatherTemplate from './components/WeathetTemplate';
import Disches from './components/Dishes';
import Torres_img from './components/Torres_img';
import Clouds from './components/CloudsBar';
import Bernabeu from './components/Bernabeu'
import AlcoholBar from './components/AlcoholBar';
import Subscribe from './components/Subscribe';
import MarketCaFeBar01 from './components/MarketCafeBar01'
import MarketCafeBar02 from './components/MarketCafeBar02'
import MarketCaFeBar03 from './components/MarketCafeBar03'
import ContactUS from './components/ContactUs';
import Map from './components/MapContainer'
import Reviews from './components/Reviews'
import Footer from './components/Footer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Main_img />
    <Navbar />

    <Disches />
    <Torres_img />
    <Clouds />
    <Bernabeu />
    <AlcoholBar />
    <Subscribe />
    {/* <MarketCaFeBar01 /> */}
    {/* <Map /> */}
    {/* <MarketCafeBar02 /> */}
    {/* <ContactUS />  */}{} 
    {/* <MarketCaFeBar03 /> */}{}
    {/* <Reviews /> */}{}
    {/* <Footer /> */}{}
    {/* <Weather01 /> */}
    {/* <Weather02 /> */}
    {/* <WeatherTemplate /> */}{}

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

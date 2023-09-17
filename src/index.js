import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './App';
import Heading from "./Components/heading-sec/index"
import SimpleSlider from "./Components/slider/index"
import reportWebVitals from './reportWebVitals';
import SingleSlider from "./Components/singleslider/index"
import CitySlider from "./Components/cities slider/index"
import Fuelsec from "./Components/fuelsection/index"
import Background from "./Components/Backgroundsec/index"
import Experienceslider from "./Components/expeiriencesec/index"
import {Hostsec,Hostslider} from "./Components/HostSection/index"
import Hand from "./Components/handsec/index"
import Faqsec from "./Components/FAQ/index"
import Footer from "./Components/Footer/index"



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <Heading/>
    <SimpleSlider/>
    <SingleSlider/>
    <CitySlider/>
    <Fuelsec/>
    <Background/>
    <Experienceslider/>
   <Hostsec/>
   <Hostslider/>
   <Hand/>
   <Faqsec/>
   <Footer/>


  </React.StrictMode>

  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import "./index.css"
import React, { Component } from "react";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default class SingleSlider extends Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div className="www">
          
          <Slider {...settings}>
            <div className="content-div">
                <div className="image-div">
             <img className="images-single1" src="https://resources.turo.com/f/81934/832x569/a808564c26/image_outdoors_416x285-2x.jpg"></img>
       
             </div>
             <div className="img-txt">
                
                <p><span className="p1">Find the perfect car </span> <span className="p2">to conquer the great outdoors</span> </p>
                <p className="description">Go prepared in a rugged 4x4 to take on winter roads with ease, or a camper van to take you to the trees.</p>
                
             </div>
             <div className="button-div"><button className="browse-button">Browse Cars</button></div>
            
            </div>
            <div className="content-div">
            <div className="image-div">
             <img className="images-single1" src="https://resources.turo.com/f/81934/832x569/afca6031a7/image_unwind_416x285-2x.jpg"></img>
             </div>
             <div className="img-txt">
                
                <p><span className="p1">Find the perfect car </span> <span className="p2">to unwind for the weekend</span> </p>
                <p className="description">From daily drivers to spirited sports cars, ditch the grind with convenient nearby cars.</p>
                
             </div>
             <div className="button-div"><button className="browse-button">Browse Cars</button></div>
            </div>
            <div className="content-div"> 
            <div className="image-div">
             <img className="images-single1" src="https://resources.turo.com/f/81934/416x284/929b21c4fa/image_upgrade_416x285.jpg"></img>
             </div>
             <div className="img-txt">
                
                <p><span className="p1">Find the perfect car </span> <span className="p2">to upgrade your vacation plans</span> </p>
                <p className="description">Skip the rental car counter and find the perfect car to complement your vacation vibe.</p>
                
             </div>
             <div className="button-div"><button className="browse-button">Browse Cars</button></div>
            </div>
            <div className="content-div">
            <div className="image-div">
             <img className="images-single1" src="https://resources.turo.com/f/81934/416x284/1e828ae782/image_scenic_416x285.jpg"></img>
             </div>
             <div className="img-txt">
                
                <p><span className="p1">Find the perfect car </span> <span className="p2">for scenic corners & curves</span> </p>
                <p className="description">Get your fill of high-performance thrills, with the richest selection of luxury and exotic vehicles anywhere.</p>
                
             </div>
             <div className="button-div"><button className="browse-button">Browse Cars</button></div>
            </div>
            <div>
            <div className="image-div">
             <img className="images-single1" src="https://resources.turo.com/f/81934/416x284/a3870434ac/image_try_416x285.jpg"></img>
             </div>
             <div className="img-txt">
                
                <p><span className="p1">Find the perfect car </span> <span className="p2">to try before you buy</span> </p>
                <p className="description">Make sure your future wheels work well with your lifestyle by taking your time in the driver’s seat.</p>
                
             </div>
             <div className="button-div"><button className="browse-button">Browse Cars</button></div>
            </div>
            <div>
            <div className="image-div">
             <img className="images-single1" src="https://resources.turo.com/f/81934/416x284/fa43ee8e2b/image_errand_416x285.jpg"></img>
             </div>
             <div className="img-txt">
                
                <p><span className="p1">Find the perfect car </span> <span className="p2">to make errand day easier</span> </p>
                <p className="description">Book a roomy truck or SUV to ease your errand day stress, or to motivate your moving day.</p>
                
             </div>
             <div className="button-div"><button className="browse-button">Browse Cars</button></div>
            </div>
          </Slider>
        </div>
      );
    }
  }
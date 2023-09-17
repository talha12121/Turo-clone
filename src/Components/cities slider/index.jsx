import "./index.css"

import React, { Component } from "react";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default class CitySlider extends Component {
    render() {
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow:5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div className="ww">
          <div className="ww1"> Browse by destination </div>
          <Slider {...settings}>
            <div>
            <Card className="card-txt cities" style={{ width: '11rem' }}>
      <Card.Img variant="top" src="https://resources.turo.com/f/81934/240x240/7825448638/illo_city_losangeles-2x.png" />
      <Card.Body>
        <Card.Title className="text1" >Los Angelos</Card.Title>
        
      </Card.Body>
    </Card>
            </div>
            <div>
            <Card className="card-txt cities" style={{ width: '11rem' }}>
      <Card.Img variant="top" src="https://resources.turo.com/f/81934/240x240/dcae922a23/illo_city_miami-2x.png" />
      <Card.Body>
        <Card.Title className="text1">Miami</Card.Title>
        
      </Card.Body>
    </Card>
            </div>
            <div>
            <Card className="card-txt cities" style={{ width: '11rem' }}>
      <Card.Img variant="top" src="https://resources.turo.com/f/81934/240x240/bbe188de38/illo_city_honolulu-2x.png" />
      <Card.Body>
        <Card.Title className="text1">Honolulu</Card.Title>
        
      </Card.Body>
    </Card>
            </div>
            <div>
            <Card className="card-txt cities" style={{ width: '11rem' }}>
      <Card.Img variant="top" src="https://resources.turo.com/f/81934/240x240/81f82e7068/illo_city_denver-2x.png" />
      <Card.Body>
        <Card.Title className="text1">Denver</Card.Title>
        
      </Card.Body>
    </Card>
            </div>
            <div>
            <Card className="card-txt cities" style={{ width: '11rem' }}>
      <Card.Img variant="top" src="https://resources.turo.com/f/81934/240x240/1442627566/illo_city_london-2x.png" />
      <Card.Body>
        <Card.Title className="text1">London</Card.Title>
        
      </Card.Body>
    </Card>
            </div>
            <div>
            <Card className="card-txt cities" style={{ width: '11rem' }}>
      <Card.Img variant="top" src="https://resources.turo.com/f/81934/240x240/87ab56dd05/illo_city_toronto-2x.png" />
      <Card.Body>
        <Card.Title className="text1">Toronto</Card.Title>
        
      </Card.Body>
    </Card>
            </div>
            <div>
            <Card className="card-txt cities" style={{ width: '11rem' }}>
      <Card.Img variant="top" src="https://resources.turo.com/f/81934/240x240/101ea2791a/illo_city_jerseycity-2x.png" />
      <Card.Body>
        <Card.Title className="text1">Jersey City</Card.Title>
        
      </Card.Body>
    </Card>
            </div>
            <div>
            <Card className="card-txt cities" style={{ width: '11rem' }}>
      <Card.Img variant="top" src="https://resources.turo.com/f/81934/240x240/c00858690e/illo_city_sanfrancisco-2x.png" />
      <Card.Body>
        <Card.Title className="text1">San Francisco</Card.Title>
        
      </Card.Body>
    </Card>
            </div>
          </Slider>
        </div>
      );
    }
  }
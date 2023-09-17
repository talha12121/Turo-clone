import "./index.css"

import React, { Component } from "react";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default class Responsive extends Component {
    render() {
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow:4,
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
            breakpoint: 780,
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
          <div className="ww1"> Browse by make </div>
          <Slider {...settings}>
            <div>
            <Card className="card-txt" style={{ width: '13rem' }}>
      <Card.Img variant="top" src="https://resources.turo.com/f/81934/386x308/9bf274f19e/image_make_jeep-2x.jpg" />
      <Card.Body>
        <Card.Title className="text1" >Jeep</Card.Title>
        
      </Card.Body>
    </Card>
            </div>
            <div>
            <Card className="card-txt" style={{ width: '13rem' }}>
      <Card.Img variant="top" src="https://resources.turo.com/f/81934/386x308/7dcf9bff19/image_make_tesla-2x.jpg" />
      <Card.Body>
        <Card.Title className="text1">Tesla</Card.Title>
        
      </Card.Body>
    </Card>
            </div>
            <div>
            <Card className="card-txt" style={{ width: '13rem' }}>
      <Card.Img variant="top" src="https://resources.turo.com/f/81934/386x308/ef857a4438/image_make_subaru-2x.jpg" />
      <Card.Body>
        <Card.Title className="text1">Subaru</Card.Title>
        
      </Card.Body>
    </Card>
            </div>
            <div>
            <Card className="card-txt" style={{ width: '13rem' }}>
      <Card.Img variant="top" src="https://resources.turo.com/f/81934/386x308/7e7ce60797/image_make_porsche-2x.jpg" />
      <Card.Body>
        <Card.Title className="text1">Prosche</Card.Title>
        
      </Card.Body>
    </Card>
            </div>
            <div>
            <Card className="card-txt" style={{ width: '13rem' }}>
      <Card.Img variant="top" src="https://resources.turo.com/f/81934/386x308/0c4f5f5186/image_make_bmw-2x.jpg" />
      <Card.Body>
        <Card.Title className="text1">BMW</Card.Title>
        
      </Card.Body>
    </Card>
            </div>
            <div>
            <Card className="card-txt" style={{ width: '13rem' }}>
      <Card.Img variant="top" src="https://resources.turo.com/f/81934/386x308/065308f2c4/image_make_mb-2x.jpg" />
      <Card.Body>
        <Card.Title className="text1">Mercedes-Benz</Card.Title>
        
      </Card.Body>
    </Card>
            </div>
            <div>
            <Card className="card-txt" style={{ width: '13rem' }}>
      <Card.Img variant="top" src="https://resources.turo.com/f/81934/386x308/2809ca8702/image_make_toyota-2x.jpg" />
      <Card.Body>
        <Card.Title className="text1">Toyota</Card.Title>
        
      </Card.Body>
    </Card>
            </div>
            <div>
            <Card className="card-txt" style={{ width: '13rem' }}>
      <Card.Img variant="top" src="https://resources.turo.com/f/81934/386x308/994b145776/image_make_nissan-2x.jpg" />
      <Card.Body>
        <Card.Title className="text1">Nissan</Card.Title>
        
      </Card.Body>
    </Card>
            </div>
          </Slider>
        </div>
      );
    }
  }
import "./index.css"
import React, { Component } from "react";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Hostsec(){
 return(
  <div>
    <div className="backdiv1"  >
  <div className="main-headinghost sub-heading host1">
 Meet the Hosts
  </div>
  </div>
 
  </div>
  
 )
}
class Hostslider extends Component {
    render() {
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow:3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 780,
            settings: {
              slidesToShow: 1,
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
        <div className="experiencesec">
          <div className="ww1"> Top host on Turo </div>
          <Slider {...settings}>
            <div className="host-card">
            <Card className="card-txt2" style={{ width: '18rem' }}>
                <div >
      <img className="Hostimg" src="https://images.turo.com/media/driver/edc4lzlWTHGwKOpT3WF4Og.160x160.jpg"></img>
      <span>Kevin M.</span>
      <p><svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="All-Star Host" aria-labelledby="allStarHostLabel" class="seo-pages-0" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m19.585 13.072 2.257 2.76a.7.7 0 0 1-.404 1.128l-2.871.575-1.18 3.538a.698.698 0 0 1-.664.478.7.7 0 0 1-.593-.326l-2.376-3.771a.554.554 0 0 1 .294-.826 8.623 8.623 0 0 0 4.649-3.525c.201-.31.655-.315.888-.03Zm-15.169 0c.234-.284.688-.278.889.03a8.62 8.62 0 0 0 4.648 3.526c.345.108.487.52.294.826l-2.376 3.77a.703.703 0 0 1-1.258-.151l-1.18-3.538-2.87-.574a.698.698 0 0 1-.404-1.13l2.257-2.758Zm11.242-5.249-1.715 1.455.522 2.171a.383.383 0 0 1-.574.417l-1.89-1.174-1.89 1.173a.383.383 0 0 1-.576-.417l.524-2.17-1.714-1.451a.384.384 0 0 1 .215-.678l2.242-.157.843-2.039a.383.383 0 0 1 .709 0l.843 2.039 2.24.155a.384.384 0 0 1 .22.676ZM12 2a6.667 6.667 0 1 0 .001 13.334 6.667 6.667 0 0 0 0-13.334Z" fill="#121214"></path></svg> All-Star Host</p>
      <p>491 trips . joined Aug 2020</p>
      <div>
      <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-1moeh8l" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z" fill="#593CFB"></path></svg>
      <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-1moeh8l" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z" fill="#593CFB"></path></svg>
      <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-1moeh8l" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z" fill="#593CFB"></path></svg>
      <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-1moeh8l" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z" fill="#593CFB"></path></svg>
      <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-1moeh8l" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z" fill="#593CFB"></path></svg>
      </div>
      <p>Great Experience</p>
      </div>

      
    </Card>
    
            </div>
            <div>
            <Card className="card-txt2" style={{ width: '18rem' }}>
                <div >
      <img className="Hostimg" src="https://images.turo.com/media/driver/kFR_K6gDQ4ivXlIQXyaC-w.160x160.jpg"></img>
      <span>Mohammed A.</span>
      <p><svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="All-Star Host" aria-labelledby="allStarHostLabel" class="seo-pages-0" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m19.585 13.072 2.257 2.76a.7.7 0 0 1-.404 1.128l-2.871.575-1.18 3.538a.698.698 0 0 1-.664.478.7.7 0 0 1-.593-.326l-2.376-3.771a.554.554 0 0 1 .294-.826 8.623 8.623 0 0 0 4.649-3.525c.201-.31.655-.315.888-.03Zm-15.169 0c.234-.284.688-.278.889.03a8.62 8.62 0 0 0 4.648 3.526c.345.108.487.52.294.826l-2.376 3.77a.703.703 0 0 1-1.258-.151l-1.18-3.538-2.87-.574a.698.698 0 0 1-.404-1.13l2.257-2.758Zm11.242-5.249-1.715 1.455.522 2.171a.383.383 0 0 1-.574.417l-1.89-1.174-1.89 1.173a.383.383 0 0 1-.576-.417l.524-2.17-1.714-1.451a.384.384 0 0 1 .215-.678l2.242-.157.843-2.039a.383.383 0 0 1 .709 0l.843 2.039 2.24.155a.384.384 0 0 1 .22.676ZM12 2a6.667 6.667 0 1 0 .001 13.334 6.667 6.667 0 0 0 0-13.334Z" fill="#121214"></path></svg> All-Star Host</p>
      <p>441 trips . joined Apr 2015
      </p>
      <div>
      <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-1moeh8l" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z" fill="#593CFB"></path></svg>
      <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-1moeh8l" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z" fill="#593CFB"></path></svg>
      <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-1moeh8l" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z" fill="#593CFB"></path></svg>
      <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-1moeh8l" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z" fill="#593CFB"></path></svg>
      <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-1moeh8l" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z" fill="#593CFB"></path></svg>
      </div>
      <p>Best Cars Explore</p>
      </div>

      
    </Card>
            </div>
            <div>
            <Card className="card-txt2" style={{ width: '18rem' }}>
                <div >
      <img className="Hostimg" src="https://images.turo.com/media/driver/f_VkwIWpQ-WIMrha_oRisQ.160x160.jpg"></img>
      <span>Derrik H.</span>
      <p><svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="All-Star Host" aria-labelledby="allStarHostLabel" class="seo-pages-0" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m19.585 13.072 2.257 2.76a.7.7 0 0 1-.404 1.128l-2.871.575-1.18 3.538a.698.698 0 0 1-.664.478.7.7 0 0 1-.593-.326l-2.376-3.771a.554.554 0 0 1 .294-.826 8.623 8.623 0 0 0 4.649-3.525c.201-.31.655-.315.888-.03Zm-15.169 0c.234-.284.688-.278.889.03a8.62 8.62 0 0 0 4.648 3.526c.345.108.487.52.294.826l-2.376 3.77a.703.703 0 0 1-1.258-.151l-1.18-3.538-2.87-.574a.698.698 0 0 1-.404-1.13l2.257-2.758Zm11.242-5.249-1.715 1.455.522 2.171a.383.383 0 0 1-.574.417l-1.89-1.174-1.89 1.173a.383.383 0 0 1-.576-.417l.524-2.17-1.714-1.451a.384.384 0 0 1 .215-.678l2.242-.157.843-2.039a.383.383 0 0 1 .709 0l.843 2.039 2.24.155a.384.384 0 0 1 .22.676ZM12 2a6.667 6.667 0 1 0 .001 13.334 6.667 6.667 0 0 0 0-13.334Z" fill="#121214"></path></svg> All-Star Host</p>
      <p>1130 trips . joined Sep 2017</p>
      <div>
      <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-1moeh8l" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z" fill="#593CFB"></path></svg>
      <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-1moeh8l" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z" fill="#593CFB"></path></svg>
      <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-1moeh8l" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z" fill="#593CFB"></path></svg>
      <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-1moeh8l" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z" fill="#593CFB"></path></svg>
      <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-1moeh8l" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z" fill="#593CFB"></path></svg>
      </div>
      <p>Best Service</p>
      </div>

      
    </Card>
            </div>
            <div>
            <Card className="card-txt2" style={{ width: '18rem' }}>
                <div >
      <img className="Hostimg" src="https://images.turo.com/media/driver/bL03pkUGQ4GgZv-y1XzKRw.160x160.jpg"></img>
      <span>Artem S.</span>
      <p><svg width="14px" height="14px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="All-Star Host" aria-labelledby="allStarHostLabel" class="seo-pages-0" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m19.585 13.072 2.257 2.76a.7.7 0 0 1-.404 1.128l-2.871.575-1.18 3.538a.698.698 0 0 1-.664.478.7.7 0 0 1-.593-.326l-2.376-3.771a.554.554 0 0 1 .294-.826 8.623 8.623 0 0 0 4.649-3.525c.201-.31.655-.315.888-.03Zm-15.169 0c.234-.284.688-.278.889.03a8.62 8.62 0 0 0 4.648 3.526c.345.108.487.52.294.826l-2.376 3.77a.703.703 0 0 1-1.258-.151l-1.18-3.538-2.87-.574a.698.698 0 0 1-.404-1.13l2.257-2.758Zm11.242-5.249-1.715 1.455.522 2.171a.383.383 0 0 1-.574.417l-1.89-1.174-1.89 1.173a.383.383 0 0 1-.576-.417l.524-2.17-1.714-1.451a.384.384 0 0 1 .215-.678l2.242-.157.843-2.039a.383.383 0 0 1 .709 0l.843 2.039 2.24.155a.384.384 0 0 1 .22.676ZM12 2a6.667 6.667 0 1 0 .001 13.334 6.667 6.667 0 0 0 0-13.334Z" fill="#121214"></path></svg> All-Star Host</p>
      <p>510 trips . joined Oct 2017</p>
      <div>
      <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-1moeh8l" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z" fill="#593CFB"></path></svg>
      <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-1moeh8l" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z" fill="#593CFB"></path></svg>
      <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-1moeh8l" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z" fill="#593CFB"></path></svg>
      <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-1moeh8l" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z" fill="#593CFB"></path></svg>
      <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="seo-pages-1moeh8l" role="img" version="1.1"><path fill-rule="evenodd" clip-rule="evenodd" d="m15.153 8.498 5.906.41c.904.064 1.274 1.197.582 1.783l-4.52 3.835 1.377 5.72c.212.88-.746 1.576-1.514 1.1L12 18.25l-4.983 3.095c-.77.477-1.727-.22-1.515-1.098l1.379-5.72-4.516-3.829c-.696-.582-.334-1.716.568-1.787l5.907-.413 2.226-5.373c.345-.833 1.522-.833 1.866 0l2.22 5.373Z" fill="#593CFB"></path></svg>
      </div>
      <p>Beautiful Car</p>
      </div>

      
    </Card>
            </div>
           
         
          </Slider>
          
        </div>
      );
    }
  }
export {Hostsec,Hostslider};
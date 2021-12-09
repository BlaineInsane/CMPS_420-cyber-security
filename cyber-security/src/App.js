import 'react-bootstrap';
import React, {useState} from 'react';
import './index.css';
import bottomlessPit from './Images/bottomlessPit.jpg';
import logo from './Images/logo.png';
import serverBros from './Images/serverBros.jpg';
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';


function App() {
  return (
    <div>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      
  <a class="navbar-brand" href="#"><img src={logo} className="logo"/>Southeastern's Cyber Security Group</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home<span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Join</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Events</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About Us</a>
      </li>
    </ul>
    <span class="navbar-text">
      Navbar text with an inline element
    </span>
  </div>
</nav>

<img src={serverBros} className="center"/>

<ImageSlider />
{SliderData.map((slide, index) =>{
      return (
        <img src={slide.image} alt='cybersecurity-images'></img>
      )
})}

<h1 className="center">Where SELU Students go to Advance their skills in Information Security.</h1>

<h1 className="center">GOAL</h1>
<h4 className="center">To create a space for Southeastern students to freely and supportively cultivate their cybersecurity skills and apply those skills to specific topics and fields that interest them, in an environment that is beginner-friendly while also challenging for advanced students.</h4>

<h1 className="center">ABOUT</h1>
<h4 className="center">The SELU Cybersecurity Group is a student-run and faculty-supported group operating under the umbrella of the Southeastern chapter of the Association of Computing Machinery. By offering a variety of events, workshops, and social events, we endeavor to inspire growth and help form competent cybersecurity professionals.</h4>


<h1 className="center">EVENTS Workshops:</h1>
<h4 className="center">By leveraging the community of SELU graduates and through faculty networking, we offer focused, pinpoint workshops on specific cybersecurity topics to assist students in applying security to their particular interests.</h4>

<h1 className="center">EVENTS Competitions</h1>
<h4 className="center">We use many different resources to create competitive events where students (both beginner and expert) can practice their skills against each other in a variety of environments.</h4>
</div>
  );
}

export default App;

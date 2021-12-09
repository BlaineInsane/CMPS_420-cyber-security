import './index.css';
import logo from './Images/logo.png';
import MainCarousel from './Components/MainCarousel'

function App() {
  return (
    <div style={{backgroundColor: 'lightgray'}}>
      <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#103d22'}}>
        <a class="navbar-brand" href="#" style={{color: '#FEFEFE'}}>
          <img src={logo} className="logo" style={{marginRight: 10}}/>
          Southeastern's Cyber Security Group
        </a>
      </nav>
      <MainCarousel />
      <div style={{backgroundColor: '#13542d', color: '#FEFEFE'}}>
        <h1 className="center text-center" style={{paddingTop: 20}}>Where SELU Students go to Advance their skills in Information Security.</h1>
        <h5 className="center">To create a space for Southeastern students to freely and supportively cultivate their cybersecurity skills and apply those skills to specific topics and fields that interest them, in an environment that is beginner-friendly while also challenging for advanced students.</h5>
        <h1 className="center text-center" style={{paddingTop: 20}}>ABOUT</h1>
        <h5 className="center">The SELU Cybersecurity Group is a student-run and faculty-supported group operating under the umbrella of the Southeastern chapter of the Association of Computing Machinery. By offering a variety of events, workshops, and social events, we endeavor to inspire growth and help form competent cybersecurity professionals.</h5>
        <h1 className="center text-center" style={{paddingTop: 20}}>EVENTS Workshops</h1>
        <h5 className="center">By leveraging the community of SELU graduates and through faculty networking, we offer focused, pinpoint workshops on specific cybersecurity topics to assist students in applying security to their particular interests.</h5>
        <h1 className="center text-center" style={{paddingTop: 20}}>EVENTS Competitions</h1>
        <h5 className="center">We use many different resources to create competitive events where students (both beginner and expert) can practice their skills against each other in a variety of environments.</h5>
      </div>
    </div>
  );
}

export default App;

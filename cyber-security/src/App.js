import bottomlessPit from './Images/bottomlessPit.jpg';
import logo from './Images/logo.png';
import serverBros from './Images/serverBros.jpg';
import 'react-bootstrap';
import './index.css';

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

  <div>
<img src={serverBros} className="image-carousel"/>

  </div>
</div>
  );
}

export default App;

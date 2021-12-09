import { Carousel } from 'react-bootstrap';
import serverBros from '../Images/serverBros.jpg'
import CSIT_building from '../Images/CSIT_building.jpg'

export default function MainCarousel() {
  return (
    <div style={{backgroundColor: 'black', maxWidth: 1000, maxHeight: 1000, margin: 'auto'}}>
      <Carousel>
        <Carousel.Item interval={6000}>
          <img
            className="d-block w-100"
            style={{opacity: 0.7}}
            src={serverBros}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={6000}>
          <img
            className="d-block w-100"
            style={{opacity: 0.7}}
            src={CSIT_building}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3></h3>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
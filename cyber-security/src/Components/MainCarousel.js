import { Carousel } from 'react-bootstrap';
import serverBros from '../Images/serverBros.jpg'

export default function MainCarousel() {
  return (
    <div style={{backgroundColor: 'black'}}>
      <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              style={{opacity: 0.5}}
              src={serverBros}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{opacity: 0.5}}
            src={serverBros}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
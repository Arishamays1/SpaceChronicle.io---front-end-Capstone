import '../Styles/Carousel.css'
import './Header'
const Carousel=()=>{
    return(
    <div>
        <div class="carousel">
          <ul class="slides">
            <input type="radio" name="radio-buttons" id="img-1" checked />
            <li class="slide-container">
              <div class="slide-image">
                <img className='dad1' src={require('../Pictures/Visuals/dad/oncompwdad.JPG')}/>
              </div>
              <div class="carousel-controls">
                <label for="img-3" class="prev-slide">
                  <span>&lsaquo;</span>
                </label>
                <label for="img-2" class="next-slide">
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>
            <input type="radio" name="radio-buttons" id="img-2" />
            <li class="slide-container">
              <div class="slide-image">
                <img className='dad1'src={require('../Pictures/Visuals/dad/dadnme.JPG')}/>
              </div>
              <div class="carousel-controls">
                <label for="img-1" class="prev-slide">
                  <span>&lsaquo;</span>
                </label>
                <label for="img-3" class="next-slide">
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>
            <input type="radio" name="radio-buttons" id="img-3" />
            <li class="slide-container">
              <div class="slide-image">
                <img className='dad1'src={require('../Pictures/Visuals/dad/compme.JPG')}/>
              </div>
              <div class="carousel-controls">
                <label for="img-2" class="prev-slide">
                  <span>&lsaquo;</span>
                </label>
                <label for="img-1" class="next-slide">
                  <span>&rsaquo;</span>
                </label>
              </div>
            </li>
            <div class="carousel-dots">
              <label for="img-1" class="carousel-dot" id="img-dot-1"></label>
              <label for="img-2" class="carousel-dot" id="img-dot-2"></label>
              <label for="img-3" class="carousel-dot" id="img-dot-3"></label>
            </div>
          </ul>
        </div>
      </div>)
}
export default Carousel

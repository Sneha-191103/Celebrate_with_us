import React from 'react';
import 'swiper/swiper-bundle.min.css';
import '../../css/style.css'; 

const Slider = () => {
  return (
    <section id="tranding">
      <div className="container">
        <h3 className="text-center section-subheading">- popular Delivery -</h3>
        <h1 className="text-center section-heading">Tranding food</h1>
      </div>
      <div className="container">
        <div className="swiper tranding-slider">
          <div className="swiper-wrapper">
            {/* Slide-start */}
            <div className="swiper-slide tranding-slide">
              <div className="tranding-slide-img">
                <img src="images/tranding-food-1.png" alt="Tranding" />
              </div>
              <div className="tranding-slide-content">
                <h1 className="food-price">$20</h1>
                <div className="tranding-slide-content-bottom">
                  <h2 className="food-name">Special Pizza 4</h2>
                  <h3 className="food-rating">
                    <span>4.5</span>
                    <div className="rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
  
       
            {/* Slide-start */}
            <div className="swiper-slide tranding-slide">
              <div className="tranding-slide-img">
                <img src="images/tranding-food-1.png" alt="Tranding" />
              </div>
              <div className="tranding-slide-content">
                <h1 className="food-price">$20</h1>
                <div className="tranding-slide-content-bottom">
                  <h2 className="food-name">Special Pizza 3</h2>
                  <h3 className="food-rating">
                    <span>4.5</span>
                    <div className="rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
    
       
            {/* Slide-start */}
            <div className="swiper-slide tranding-slide">
              <div className="tranding-slide-img">
                <img src="images/tranding-food-1.png" alt="Tranding" />
              </div>
              <div className="tranding-slide-content">
                <h1 className="food-price">$20</h1>
                <div className="tranding-slide-content-bottom">
                  <h2 className="food-name">Special Pizza 1</h2>
                  <h3 className="food-rating">
                    <span>4.5</span>
                    <div className="rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
     
       
            {/* Slide-start */}
            <div className="swiper-slide tranding-slide">
              <div className="tranding-slide-img">
                <img src="images/tranding-food-1.png" alt="Tranding" />
              </div>
              <div className="tranding-slide-content">
                <h1 className="food-price">$20</h1>
                <div className="tranding-slide-content-bottom">
                  <h2 className="food-name">Special Pizza 2</h2>
                  <h3 className="food-rating">
                    <span>4.5</span>
                    <div className="rating">
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                      <ion-icon name="star"></ion-icon>
                    </div>
                  </h3>
                </div>
              </div>
            </div>
            {/* Slide-end */}
            {/* Repeat similar structure for other slides */}
          </div>

          <div className="tranding-slider-control">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;

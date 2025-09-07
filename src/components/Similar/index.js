import { FaRegHeart } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import './index.css';

const Similar = () => {
  const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
  arrows: true,
  responsive: [
    {
      breakpoint: 1200, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};


  return (
    <div className="similar-main-container">
      <h1 className="similar-heading">Similar to this</h1>
      <div className="similar-cards">
        <Slider {...settings}>
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="each-bag-outer-box-large">
              <div className="each-bag-box-large">
                <div className="heart-container">
                  <button className="best-btn-large">BestSeller</button>
                  <FaRegHeart className="heart-icon-large" />
                </div>
                <div>
                  <p className="best-items-paragraph-large">
                    Rose Gold Earrings With alloy
                  </p>
                  <div className="price-container">
                    <h1 className="best-price-large">₹ 1999</h1>
                    <p className="best-old-price-large">₹ 2999</p>
                  </div>
                  <p className="span-card-no-large">(4)</p>
                  <button className="move-btn-large">Move to Bag</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Similar;

import Customer from '../Customer';
import YouMight from "../YouMight";
import Similar from "../Similar";
import TopPicks from '../TopPicks';
import "./index.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <div className="outer-product-container">
        <div className="slider-container-small">
          <img src='https://res.cloudinary.com/dsp32vyqi/image/upload/v1757171591/Frame_347_vgrvkq.png' alt='Gold-Plated Pearls Necklace' className='carousel-image' />
        </div>
        <div className="slider-container-large">
          <img src='https://res.cloudinary.com/dsp32vyqi/image/upload/v1757172613/Image_Section_rocu7v.png' alt='Gold-Plated Pearls Necklace' className='carousel-image' />
        </div>

        <div className="product-text-container">
          <h1 className="gold-heading">Gold-Plated Pearls Necklace</h1>
          <p className="made-paragraph">Made with 925 Silver</p>

          <div className="box-rating-container">
            <img
              src="https://res.cloudinary.com/dsp32vyqi/image/upload/v1757096193/Frame_379_b7azxz.png"
              alt="4.5 Stars"
              className="rating-icon"
            />
            <span className="rating-no">(23)</span>
          </div>

          <div className="price-all-rate-container">
            <p className="price">₹1,600</p>
            <p className="old-price">₹2,000</p>
            <p className="discount">(20% off)</p>
          </div>

          <div className='btn-alignment'>
            <button className="add-cart-btn">ADD TO CART</button>
            <button className="buy-btn">BUY NOW</button>
          </div>

          <div className="main-product-container">
            <div className="product-des-container">
              <img src='https://res.cloudinary.com/dsp32vyqi/image/upload/v1757100439/Easy_30_Days_Return_wofonq.png' alt="30 Day Return" className="product-image" />
              <p className="product-des">Easy 30 Day Return</p>
            </div>
            <div className="product-des-container">
              <img src='https://res.cloudinary.com/dsp32vyqi/image/upload/v1757128876/shopping-bag_vughjc.png' alt="Silver Plating" className="product-image" />
              <p className="product-des">925 Silver Plating</p>
            </div>
            <div className="product-des-container">
              <img src='https://res.cloudinary.com/dsp32vyqi/image/upload/v1757129073/6_months_warranty_grett1.png' alt="6 Month Warranty" className="product-image" />
              <p className="product-des">6-Month Warranty</p>
            </div>
            <div className="product-des-container">
              <img src='https://res.cloudinary.com/dsp32vyqi/image/upload/v1757129198/medal-image_bfrbv8.svg' alt="Premium Gold" className="product-image" />
              <p className="product-des">Premium Gold</p>
            </div>
          </div>

          <div className="order-items-container">
            <div className='offers-container'>
              <div className="offer-available-container">
                <h2 className='offer-heading-2'>Offers</h2>
                <p className='offer-paragraph'>2 available</p>
              </div>
              <p className='offer-paragraph-check'>Check</p>
            </div>
            <p className="coupon-para">Coupon can be applied at checkout</p>
            <h2 className="estimate-heading">Estimated Delivery Time</h2>
            <div className="pincode-container">
              <input type="text" placeholder="Enter Pincode" className="pincode-input" />
              <button className="pincode-button">Check</button>
            </div>
          </div>

          <hr className='red-line' />

          <div className="product-description-section">
            <h2 className='all-pro-des'>Product Description</h2>
            <div className="each-pro-des-container">
              <img src='https://res.cloudinary.com/dsp32vyqi/image/upload/v1757184768/received_nufg8b.png' className="pro-icon" alt="description icon" />
              <p className='pro-desc'>Material: <span className="span-pro">925 Sterling Silver</span></p>
            </div>
            <div className="each-pro-des-container">
              <img src='https://res.cloudinary.com/dsp32vyqi/image/upload/v1757184768/received_nufg8b.png' className="pro-icon" alt="description icon" />
              <p className='pro-desc'>Plating: <span className="span-pro">18K Gold</span></p>
            </div>
            <div className="each-pro-des-container">
              <img src='https://res.cloudinary.com/dsp32vyqi/image/upload/v1757184768/received_nufg8b.png' className="pro-icon" alt="description icon" />
              <p className='pro-desc'>Weight: <span className="span-pro">10grams</span></p>
            </div>
            <div className="each-pro-des-container">
              <img src='https://res.cloudinary.com/dsp32vyqi/image/upload/v1757184768/received_nufg8b.png' className="pro-icon" alt="description icon" />
              <p className='pro-desc'>Stone Type: <span className="span-pro">Premium Jerkin</span></p>
            </div>
          </div>

          <h2 className="all-pro-des">Shipping</h2>
          <p className="span-pro">Get it by <span className='pro-desc-25'>25 Sept</span></p>
          
          <Customer />
        </div>
      </div>
      
      <div className='like-small-container'>
        <YouMight />
      </div>
      <div className="similar-item-container">
        <Similar />
      </div>
      <div className="toppicks-container">
        <TopPicks />
      </div>
    </div>
  );
};

export default HomePage;


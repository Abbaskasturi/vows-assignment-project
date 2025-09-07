import { useState } from "react";
import { FaArrowLeft, FaChevronDown } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { IoBagOutline, IoReorderThreeOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import EntrancePage from '../EntrancePage';
import './index.css';

const Header = () => {
  const [state, setState] = useState(false); 
  const handleLogin = () => {
    setState(prevState => !prevState);
  }
  return (
    <div className="header-main">
      <div className="small-device-outer">
          <div className='small-devices-header'>
            <div className='offers-header-heading'>
              <p className='off-heading'>50% off on all items till 23 Jan</p>
            </div>
            <nav className='small-nav-container'>
              <div className='lift-side-container'>
                {
                  state?(<RxCross2 className='home-icons' onClick={handleLogin}/>): (<IoReorderThreeOutline className='home-icons' onClick={handleLogin}/>)
                }
                <h1 className='logo-heading'>LOGO</h1>
              </div>
              <div className='right-side-container'>
                <GoHeart className='home-icons'/>
                <IoBagOutline className='home-icons'/>
              </div>
            </nav>
            {
              state ? 
              (
                <div className="menu-background" onClick={handleLogin}>
                  <EntrancePage />
                </div>
              ) : 
              (
            <div className='left-arrow-container'>
              <FaArrowLeft className='icons-arrow'/>
              <p className='product-heading'>Product Details</p>
            </div>
            )
            }
        </div>
      </div>
      <div className='large-devices-header'>
        <div className='offer-heading-container'>
          <p className='offer-heading'>
            50% off on all items Only Limited Time Deal Offer ending in 03:34:15
          </p>
        </div>
        <div className='bottom-logo-header-container'> 
          <h1 className='logo-heading'>LOGO</h1>
          <div className='collection-items-container'>
            <div className='collection-icon-container'>
              <p className='item-paragraph'>Collection</p>
              <FaChevronDown className='items-icons'/>
            </div>
            <div className='categories-icon-container'>
              <p className='item-paragraph'>Categories</p>
              <FaChevronDown className='items-icons'/>
            </div>
            <p className='item-paragraph'> Hot Picks</p>
            <p className='item-paragraph'>Gifts</p>
            <p className='item-paragraph'>Shop All</p>
          </div>
          <div className="both-btn-container">
            <button className='login-btn-home'>LOGIN</button>
            <button className='register-btn-home'>REGISTER</button>
          </div>
        </div>
        <ul className='section-items-names'>
          <li>Home</li>
          <li><FaAngleRight className="item-icons"/></li>
          <li>Jewellery</li>
          <li><FaAngleRight className="item-icons"/></li>
          <li>Gifts</li>
          <li><FaAngleRight className="item-icons"/></li>
          <li>Necklace</li>
          <li><FaAngleRight className="item-icons"/></li>
          <li>Chains</li>
          <li><FaAngleRight className="item-icons"/></li>
          <li>Shining Diva</li>
          <li><FaAngleRight className="item-icons"/></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
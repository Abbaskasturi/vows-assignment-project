import './index.css';
import { FaPlus } from "react-icons/fa6";
import { MdTrendingDown } from "react-icons/md";
import { BsPersonCheck } from "react-icons/bs";
const EntrancePage = () => {
  return (
    <div className='entrace-main-container'>
      <div className='menu-items-container'>
        <div className='each-item-container'>
          <FaPlus className='icons'/>
          <p className='items-paragraph'>Add Account</p>
        </div>
        <hr className='line'/>
        <div className='each-item-container'>
          <MdTrendingDown className='icons'/>
          <p className='items-paragraph'>Gold jeweller</p>
        </div>
        <hr className='line'/>
        <div className='each-item-container'>
          <MdTrendingDown className='icons'/>
          <p className='items-paragraph'>Silver jeweller</p>
        </div>
        <hr className='line'/>
        <div className='each-item-container'>
          <MdTrendingDown className='icons'/>
          <p className='items-paragraph'>Trending Collection</p>
        </div>
        <hr className='line'/>
        <div className='each-item-container'>
          <MdTrendingDown className='icons'/>
          <p className='items-paragraph'>Gifts</p>
        </div>
        <hr className='line'/>
        <div className='each-item-container'>
          <MdTrendingDown className='icons'/>
          <p className='items-paragraph'>Shop by Occasion</p>
        </div>
        <hr className='line'/>
        <div className='login-container'>
          <BsPersonCheck className='icons-person'/> 
          <button className='login-btn'>
            Login/SignUp
          </button>
        </div>
      </div>
    </div>
  );
};
export default EntrancePage;

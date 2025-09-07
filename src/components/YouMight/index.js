import { FaRegHeart } from "react-icons/fa";
import './index.css';

const YouMight = () => {
    return(
        <div className='outer-you-might-container'>
            <h1 className='you-heading'>You Might also like</h1>
            <div className='each-bag-outer-box'>
                <div className='each-bag-box'>
                    <div className="heart-container">
                        <button className='best-btn'>BestSeller</button>
                        <FaRegHeart className="heart-icon"/>
                    </div>
                    <div>
                        <p className="best-items-paragraph">Rose Gold Earrings With alloy</p>
                        <div className="price-container">
                            <h1 className="best-price">₹ 1999</h1>
                            <p className="best-old-price">₹ 2999</p>
                        </div>
                        <p className="span-card-no">(4)</p>
                       <button className="move-btn">
                           Move to Bag 
                       </button>
                    </div>
                </div>
                <div className='each-bag-box'>
                    <div className="heart-container-2">
                        <FaRegHeart className="heart-icon"/>
                    </div>
                    <div>
                        <p className="best-items-paragraph">Rose Gold Earrings With alloy</p>
                        <div className="price-container">
                            <h1 className="best-price">₹ 1999</h1>
                            <p className="best-old-price">₹ 2999</p>
                        </div>
                        <p className="span-card-no">(4)</p>
                       <button className="move-btn">
                           Move to Bag 
                       </button>
                    </div>
                </div>
                <div className='each-bag-box'>
                    <div className="heart-container">
                        <button className='best-btn'>BestSeller</button>
                        <FaRegHeart className="heart-icon"/>
                    </div>
                    <div>
                        <p className="best-items-paragraph">Rose Gold Earrings With alloy</p>
                        <div className="price-container">
                            <h1 className="best-price">₹ 1999</h1>
                            <p className="best-old-price">₹ 2999</p>
                        </div>
                        <p className="span-card-no">(4)</p>
                       <button className="move-btn">
                           Move to Bag 
                       </button>
                    </div>
                </div>
                <div className='each-bag-box'>
                    <div className="heart-container-2">
                        <FaRegHeart className="heart-icon"/>
                    </div>
                    <div>
                        <p className="best-items-paragraph">Rose Gold Earrings With alloy</p>
                        <div className="price-container">
                            <h1 className="best-price">₹ 1999</h1>
                            <p className="best-old-price">₹ 2999</p>
                        </div>
                        <p className="span-card-no">(4)</p>
                       <button className="move-btn">
                           Move to Bag 
                       </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default YouMight; 
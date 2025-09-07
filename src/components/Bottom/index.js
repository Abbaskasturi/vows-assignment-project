import './index.css' 
import { TiSocialLinkedin } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Bottom = () => {
    return(
        <div className='bottom-main-line-container'>
            <hr className='bottom-line'/>
        <div className='bottom-outer-container'>
            <div className='links-container'>
                <h1 className='bottom-heading'>
                    Quick Link
                </h1>
                <div className='unordered-container'>
                    <p>
                        Customer Reviews
                    </p>
                    <p>
                        Our Blogs
                    </p>
                    <p>
                        Store Locator
                    </p>
                    <p>
                        Jewellery Care
                    </p>
                    <p>
                        Join Us
                    </p>
                </div>
            </div>
            <div className='details-container-1'>
                <h1 className='bottom-heading'>
                    Details
                </h1>
                <div className='unordered-container'>
                    <p>
                        Shipping & Returns
                    </p>
                    <p>
                        Privacy Policy
                    </p>
                    <p>
                        International Shipping
                    </p>
                    <p>
                        FAQ'S and Support
                    </p>
                    <p>
                        Terms of Service
                    </p>
                </div>
            </div>
            <div className='details-container-2'>
                <h1 className='bottom-heading'>
                    Details
                </h1>
                <div className='unordered-container'>
                    <p>
                        Shipping & Returns
                    </p>
                    <p>
                        Privacy Policy
                    </p>
                    <p>
                        International Shipping
                    </p>
                    <p>
                        FAQ'S and Support
                    </p>
                    <p>
                        Terms of Service
                    </p>
                </div>
            </div>
            <div className='contact-container'>
                <h1 className='bottom-heading'>Contact Us</h1>
                <div className='unordered-container'>
                    <p>
                        Elegant Jewels
                    </p>
                    <p>
                        SF-11, Ansal Fortune Arcade, K Block, K-27, Sector 18, Noida, Uttar Pradesh 201301
                    </p>
                    <p>
                        For any suggestions, queries or complaints please contact us:
                    </p>
                    <p>
                        Elegantjewel Private Limited
                    </p>
                    <p>
                       contact@elegantjewels.com 
                    </p>
                    <p>
                        +1 (555) 123-4567
                    </p>
                </div>
            </div>
            <div className='social-media-container-outer'>
            <p className='social-para'>Our Social Links: </p>
            <div className='social-media-container'>
                <a href="www.linkedin.com/in//kasturiabbas" target="_blank" rel="noopener noreferrer"> 
                    <TiSocialLinkedin className='link-icon'/>
                </a>
                <a href="https://www.facebook.com/virat.kohli" target="_blank" rel="noopener noreferrer"> 
                    <FaFacebookF className='link-icon'/>
                </a>
                <a href="https://www.instagram.com/kasturi_abbas_patel/" target="_blank" rel="noopener noreferrer"> 
                    <FaInstagram className='link-icon'/>
                </a>
            </div>
            </div>
        </div>
         <div className='copy-rights-container'>
            <p className='copy-right-para'>@2024 Elegant Jewels. All Rights Reserved.</p>
        </div>
    </div>
    )
}
export default Bottom ; 
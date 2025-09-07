import './index.css'; 
import { VscAccount } from "react-icons/vsc";
const Customer = () => {
    return (
        <div className='customer-container'>
            <hr className='customer-line'/>
            <h1 className='customer-heading'>Customer Rating</h1>
            <hr className='customer-line'/>
            <div className='account-container'>
                <VscAccount className='account-icon'/> 
                <h1 className='account-name'>Anu</h1>
            </div>
            <p className='date-para'>15/08/24</p>
            <p className='feedback'>Such a gorgeous necklace. Got many compliments as well. Absolutely loved it</p>
            <div className='empty-box'>
                <div className='box'>

                </div>
                <div className='box'>

                </div>
            </div>
            <hr className='customer-line'/>
             <div className='account-container'>
                <VscAccount className='account-icon'/> 
                <h1 className='account-name'>Anu</h1>
            </div>
            <p className='date-para'>15/08/24</p>
            <p className='feedback'>Looks beautiful 😻❤️❤️❤️ Go for it girls 😍💝💐 the quality is good ..</p>
            <div className='empty-box'>
                <div className='box'>

                </div>
            </div>
        </div>
    )
}
export default Customer; 
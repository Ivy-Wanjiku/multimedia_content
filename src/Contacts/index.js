import './index.css';
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

function Contact(){
    return(
        
        <div id='footer' className='footer'>
            <h3>Find us on</h3>
            <br/>
            <div className='contactInfo'>
            <div>
            <span className='icon'><BsFillTelephoneFill/></span>
                <p>+254 793 244 456</p>
                <p>+254 786 965 766</p>
            </div>
            <div>
                <span className='icon'><FaMapMarkerAlt/></span>
                <p>Korongo road AkiraChix</p>
            </div>
            <div >
                <span className='icon'><MdEmail/></span>
                <p>akwangdeu@gmail.com</p>
                <p>raziah@gmail.com</p>
                <p>fanny@gmail.com</p>
            </div>
            </div>
            <hr/>
            <div className='url'>
                <p>@2024Inganji.com</p>
            </div>
        </div>
    );
}
export default Contact;
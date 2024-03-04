import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ContactLinks from './ContactLinks';
import TextInput from './TextInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Reusable card component to hold plaintext
const ContactForm = (props) => {
    const handleSubmit = () => {
        event.preventDefault();
        console.log("click");
    }
    
    return (
        // Container div
        <div className="w-8/12
                        bg-opacity-80
                        bg-slate-200
                        rounded-2xl
                        border-4
                        border-purple-500
                        text-purple-800
                        text-center
                        p-5
                        shadow-black
                        shadow-2xl
                        h-max
                        m-auto
                        mt-10">

            <ContactLinks />
            <p>If you would like to work with me, follow these links or fill out the form below!</p>
            
            <form id="contactForm" 
                className='flex 
                            flex-col 
                            text-left 
                            gap-2 
                            pt-4'>

                <TextInput label="Name" placeholder="Enter your name" />
                <TextInput label="Email" placeholder="Email" />
                <TextInput label="Company" placeholder="Company Name" />
                <TextInput label="Subject" placeholder="Message Subject" />
                <label for="otherInfo">Message:</label>
                <textarea className="h-40
                                    p-2
                                    rounded-md" 
                        label="otherInfo" 
                        placeholder="Your message here."></textarea>
                <button type="submit"
                        onClick={handleSubmit}>
                    <FontAwesomeIcon
                        className="text-3xl"
                        icon={faEnvelope} />
                </button>

            </form>
        </div>
    );
}

export default ContactForm;
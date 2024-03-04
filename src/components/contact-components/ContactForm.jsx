import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ContactLinks from './ContactLinks';
import TextInput from './TextInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Reusable card component to hold plaintext
const ContactForm = (props) => {
    // const handleSubmit = () => {
    //     event.preventDefault();
        
    // }
    
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
                action="https://formsubmit.co/dcf3516cf6ffc1cefb232d15e256a2a5" 
                method="POST"
                className='flex 
                            flex-col 
                            text-left 
                            gap-2 
                            pt-4'>

                <TextInput label="Name" type="text" placeholder="Enter your name" />
                <TextInput label="Email" type="email" placeholder="Email" />
                <TextInput label="Company" type="text" placeholder="Company Name" />
                <TextInput label="Subject" type="text" placeholder="Message Subject" />
                <label for="message">Message:</label>
                <textarea name="message"
                        className="h-40
                                    p-2
                                    rounded-md" 
                        placeholder="Your message here."></textarea>
                <button type="submit">
                    <FontAwesomeIcon
                        className="text-3xl"
                        icon={faEnvelope} />
                </button>

            </form>
        </div>
    );
}

export default ContactForm;
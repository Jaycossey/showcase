import { useRef, useState } from 'react';
// form validation 
import { useForm } from 'react-hook-form';
// import font awesome icons
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import emailjs 
import emailjs from '@emailjs/browser';
// import custom components
import ContactLinks from './ContactLinks';
import TextInput from './TextInput';
// import validateForm from '../utils/ValidateForm';

// GLOBAL PLACEHOLDERS, used in testing kept for convenience
const namePlace = 'Please enter your name';
const emailPlace = 'Please enter your email';
const compPlace = "Please enter your company's name";
const subPlace = "Message Subject";


// Reusable card component to hold plaintext
const ContactForm = (props) => {
    // form validation
    const { register, handleSubmit } = useForm();
    // onSubmit function 
    const onSubmit = () => {
        // toggle thankyou page
        props.toggleThanks(true);

        // emailjs package
        emailjs
            // send form method, params in docs, currently in testing and development
            .sendForm('contact_service', 'contact_form', formRef.current, {
                publicKey: 'T0S-t4u_pISfOGgum',
            })
            // console.log success / fail 
            .then(
                () => {
                console.log('SUCCESS!');
                },
                (error) => {
                console.log('FAILED...', error.text);
                },
            );

    }

    // ref for the form 
    const formRef = useRef();

    // // on Submit of form
    // const handleSubmit = (event) => {
    //     // prevent page refresh
    //     event.preventDefault();
    //     console.log("click, check values");


    //     // emailjs package
    //     // emailjs
    //     //     // send form method, params in docs, currently in testing and development
    //     //     .sendForm('contact_service', 'contact_form', formRef.current, {
    //     //         publicKey: 'T0S-t4u_pISfOGgum',
    //     //     })
    //     //     // console.log success / fail 
    //     //     .then(
    //     //         () => {
    //     //         console.log('SUCCESS!');
    //     //         },
    //     //         (error) => {
    //     //         console.log('FAILED...', error.text);
    //     //         },
    //     //     );

    //     event.target.reset();

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

            {/* Contact links for linkedin, github and stackoverflow */}
            <ContactLinks />
            <p>If you would like to work with me, follow these links or fill out the form below!</p>
            
            {/* Custom contact form */}
            <form ref={formRef}  
                // Handle submit
                onSubmit={handleSubmit(onSubmit)}
                className='flex 
                            flex-col 
                            text-left 
                            gap-2 
                            pt-4'>
                
                {/* Contact details of client -- THESE NEED TO MATCH THE email.js VARIABLES */}
                <TextInput label="user_name" labelName="Name" type="text" placeholder={namePlace} register={register} required />
                <TextInput label="user_email" labelName="Email" type="email" placeholder={emailPlace} register={register} required />
                <TextInput label="user_company" labelName="Company" type="text" placeholder={compPlace}  register={register} required />
                <TextInput label="subject" labelName="Subject" type="text" placeholder={subPlace} register={register} required />
                
                {/* Contact form message content */}
                <label htmlFor="message">Message:</label>
                <textarea name="message"
                        className="h-20
                                    p-2
                                    rounded-md"
                        placeholder="Your message here."></textarea>
                
                {/* Submit button, email fontawesome icon */}
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
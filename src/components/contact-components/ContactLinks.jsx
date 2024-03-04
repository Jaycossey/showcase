import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faStackOverflow, faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef } from 'react';

const ContactLinks = () => {

    return (
        // Font awesome container for contact section
        <div className='text-3xl 
                        text-center'>

            {/* Icons within their respective anchors */}
            <a href="https://www.linkedin.com/in/ian-j-scott/" target="_blank" referrer="noreferrer noopener">
                <FontAwesomeIcon icon={faLinkedin} 
                                className='fa-2xl 
                                            m-2 
                                            drop-shadow 
                                            text-purple-500 
                                            hover:scale-110 
                                            cursorIcon' />
            </a>

            <a href="https://github.com/Jaycossey" target="_blank" referrer="noreferrer noopener">
                <FontAwesomeIcon icon={faGithubSquare} 
                                className='fa-2xl 
                                            m-2 
                                            drop-shadow 
                                            text-purple-500 
                                            hover:scale-110 
                                            cursorIcon' />
            </a>
            
            <a href="https://stackoverflow.com/users/20585015/jaycossey" target="_blank" referrer="noreferrer noopener">
                <FontAwesomeIcon icon={faStackOverflow} 
                                className='fa-2xl 
                                            m-2 
                                            drop-shadow 
                                            text-purple-500 
                                            hover:scale-110 
                                            cursorIcon' />
            </a>

        </div>
        
    );
}

export default ContactLinks;
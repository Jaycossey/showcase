import Background from '../Background';
import Card from "../containers/Card";
import ContactLinks from '../contact-components/ContactLinks';

const Home = (props) => {
    const handleClick = props.onClick;
    const welcomeText = "Ian Scott - Software Developer";
    const techStack = "HTML | CSS | JavaScript | Node.JS | React.JS | jQuery | BootstrapCSS | TailwindCSS | Git | GitHub";

    return (
        <>
            <Background />

            <div className='flex
                            flex-col
                            min-h-screen
                            text-center
                            pb-28
                            px-8
                            sm:px-20
                            gap-10
                            text-2xl
                            text-white
                            bg-purple-custom'>
                            
                {/* Contact links for linkedin, github and stackoverflow */}
                <ContactLinks />

                <img className="w-80
                                rounded-full
                                border-8
                                border-purple-600
                                m-auto
                                my-10
                                mb-10
                                shadow-2xl
                                shadow-black" 
                    src="./images/profile.png" 
                    alt="Profile Photo" />
                
                <Card text={welcomeText} />
            
                <Card text={techStack} />
            
                <button className='border-4 
                                    border-purple-600
                                    text-purple-900
                                    bg-purple-300
                                    p-4 
                                    hover:underline
                                    hover:scale-105
                                    active:scale-90
                                    underline-offset-4
                                    rounded-lg 
                                    w-content 
                                    m-auto' 
                    onClick={handleClick}>
                        My Work
                </button>
            
            </div>
        </>
    );
}

export default Home;
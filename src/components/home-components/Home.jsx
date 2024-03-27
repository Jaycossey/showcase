import Background from '../Background';
import Card from "../containers/Card";

const Home = (props) => {
    const welcomeText = "My name is Ian, I am a Front End Software Developer with a passion for bringing your software needs to life.";
    const techStack = "HTML | CSS | JavaScript | Node.JS | React.JS | jQuery | BootstrapCSS | TailwindCSS | Git | GitHub";

    return (
        <>
            <Background />
            <div className='flex
                            flex-col
                            h-screen
                            text-center
                            pb-28
                            p-20
                            gap-10
                            text-2xl
                            text-white
                            bg-purple-custom'>
                            

                            <img className="w-80
                                            rounded-full
                                            border-8
                                            border-purple-600
                                            m-auto
                                            my-10
                                            mb-20
                                            shadow-2xl
                                            shadow-black" 
                                src="./images/profile.png" 
                                alt="Profile Photo" />
                            
                            <Card text={welcomeText} />
                            <Card text={techStack} />
                            <a><button>My Work</button></a>
            </div>
        </>
    );
}

export default Home;
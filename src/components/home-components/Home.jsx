import Background from '../Background';
import Card from "../containers/Card";

const Home = (props) => {
    const techStack = "HTML | CSS | JavaScript | Node.JS | React.JS | jQuery | BootstrapCSS | TailwindCSS | Git | GitHub";

    return (
        <>
            <Background />
            <div className='flex
                            flex-col
                            text-center
                            p-10
                            pt-20
                            px-10
                            sm:px-36
                            gap-12
                            text-2xl
                            text-white'>

                            <Card text="Hello World!" />
                            
                            <img className="w-80
                                            rounded-full
                                            border-8
                                            border-purple-600
                                            m-auto
                                            shadow-2xl
                                            shadow-black" 
                                src="./images/profile.png" 
                                alt="Profile Photo" />
                            
                            <Card text="My name is Ian, I am a Front End Software Developer with a passion for bringing your software needs to life." />
                            <Card text={techStack} />

            </div>

        </>
    );
}

export default Home;
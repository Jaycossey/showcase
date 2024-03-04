import Background from '../Background';
import Card from "../containers/Card";

const Home = (props) => {

    return (
        <>
            <Background />
            <div className='flex
                            flex-col
                            text-center
                            p-10
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
                            
                            <Card text="My name is Ian, I am a Software Developer" />
            </div>


        </>
    );
}

export default Home;
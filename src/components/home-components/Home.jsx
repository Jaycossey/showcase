import Background from '../Background';

const Home = (props) => {

    return (
        <>
            <Background />
            <div className='flex
                            flex-col
                            text-center
                            p-36
                            gap-12
                            text-2xl
                            text-white'>

                            <p>Hello World!</p>
                            
                            <img className="w-80
                                            rounded-full
                                            border-8
                                            border-purple-600
                                            m-auto" 
                                src="./images/profile.png" 
                                alt="Profile Photo" />
                            
                            <p>My name is Ian, I am a Software Developer</p>
            </div>
        </>
    );
}

export default Home;
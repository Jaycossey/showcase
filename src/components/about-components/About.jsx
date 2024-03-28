import Card from '../containers/Card';

const About = (props) => {
    const aboutText = "Embarking on my journey in software development in 2022, I began my career self-learning, solidifying my understanding of fundamental principles and sharpening my skills in web design and JavaScript algorithms. Recognizing the value of structured education, I pursued further training by enrolling in a front-end web development bootcamp in September 2023. Since then, my focus has been on mastering the MERN tech stack. Beyond specific technologies, my primary objective remains centered on identifying and addressing the diverse technological needs of individuals and businesses. With a problem-solving mindset, adaptability, and a genuine passion for creating impactful digital solutions, I am committed to collaborating with clients to deliver tailored and innovative responses to their technological challenges, regardless of their scale or industry.";

    return (
        <>
            <div id="aboutSection" 
                    className="h-max-content
                            p-8
                            sm:p-20
                            pt-16
                            flex
                            flex-col
                            text-2xl
                            gap-10">
                                
                <Card text="About Me" />
                
                <Card text={`${aboutText}`} />
            </div>
        </>
    );
}

export default About;
import Card from '../containers/Card';

const About = (props) => {
    const aboutText = "As a software developer skilled in HTML, CSS, JavaScript, React, and Node.js, I specialize in delivering comprehensive solutions across various domains. With a focus on front-end web development, I design captivating interfaces and optimize website performance for seamless user experiences. Beyond web design, I leverage automation to streamline processes and enhance efficiency, utilizing Node.js to build robust backend systems that automate workflows, reducing manual intervention and errors. My expertise extends to crafting bespoke software solutions tailored to meet the unique needs of each client, enabling businesses to thrive in today's digital landscape.";

    return (
        <>
            <div id="aboutSection" 
                    className="w-screen
                            h-screen
                            bg-pix-left
                            p-10
                            pt-20
                            flex
                            flex-col
                            text-lg
                            gap-10">
                <Card text="About Me" />
                
                <Card text={`${aboutText}`} />
                {/* EMPTY SPACE NEEDS FILLING */}
            </div>
        </>
    );
}

export default About;
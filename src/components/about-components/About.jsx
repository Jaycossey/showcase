import Card from '../containers/Card';

const About = (props) => {
    const aboutText = "When I began programming, I was awoken to a world from my childhood dreams. Bringing back a love for the endless possibilities, video game ideas and technology as a whole. I remembered a story that I could tell through a game, a story as old as time itself. Now, still very much learning every day, I have discovered skills and concepts that will help me truly realise that dream. I started with learning responsive web development. Gaining the foundations to the muscle memory of HTML, CSS and Javascript. Then I moved on to the concepts of computer science as a whole, gaining insight into algorithmic thinking, logical approaches to problems, and planning (which I cannot stress enough). I have experience working both on my own, and within a team, both inside and outside the world of code, though I prefer a collaborative approach. I offer a professional, organised, motivated service for front end development, especially for the weird and wonderful.";
    const techStack = "HTML | CSS | JavaScript | Node.JS | React.JS | jQuery | BootstrapCSS | TailwindCSS | Git | GitHub";
    
    return (
        <>
            <div id="aboutSection" className="max-w-screen
                            min-h-screen
                            bg-pix-left
                            p-10
                            pt-20
                            flex
                            flex-col
                            gap-10">
                <Card text="About Me" />
                
                <Card text={aboutText} />

                <Card text={`My Tech Stack includes: ${techStack}`} />
            </div>
        </>
    );
}

export default About;
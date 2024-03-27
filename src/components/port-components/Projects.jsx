import Card from "../containers/Card";
import projectArray from "../utils/ProjectArray";
import Presentation from "./Presentation";

const Projects = (props) => {
    return (
        <>
            <div className="w-screen
                            h-max-content
                            bg-purple-custom
                            p-20
                            flex
                            flex-col">
                <Card text="My Projects" />

                <div className="relative
                                w-full
                                my-10
                                flex
                                flex-wrap
                                gap-10
                                justify-center
                                items-center
                                h-max-content">
                    {projectArray.map((project, i) => {
                        return <Presentation key={i} title={project.title} desc={project.description} image={project.image} link={project.link} />
                    })}

                    {/* ADD MORE PROJECTS!!!! */}
                </div>
            </div>
        </>
    );
}

export default Projects;
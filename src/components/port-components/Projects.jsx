import Card from "../containers/Card";
import projectArray from "../utils/ProjectArray";
import Presentation from "./Presentation";

const Projects = (props) => {

    return (
        <>
            <div className="min-h-screen
                            h-max-content
                            m-2
                            rounded-md
                            bg-purple-custom
                            p-10
                            text-2xl
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
                        return <Presentation key={i} title={project.title} desc={project.description} tech={project.techStack} image={project.image} gitHubLink={project.gitHubLink} depLink={project.depLink} />
                    })}

                    {/* ADD MORE PROJECTS!!!! */}
                </div>
            </div>
        </>
    );
}

export default Projects;
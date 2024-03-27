const Presentation = (props) => {
    const {title, desc, image, tech, depLink, gitHubLink} = props;
    const handleClick = (link) => {
        window.open(link, "_blank", "noopener noreferrer");
    }

    return (        
            <div className="bg-slate-200
                    bg-opacity-80
                    rounded-2xl
                    border-4
                    border-purple-500
                    text-purple-800
                    text-left
                    flex
                    flex-col
                    items-left
                    p-2
                    shadow-black
                    shadow-2xl
                    max-w-80
                    custom-link">

                
                <img className="w-full
                                h-28
                                shadow-xl
                                rounded-md" 
                    src={image}
                    alt="Project Screenshot" />

                <p className="text-md
                            underline
                            underline-offset-2">
                                {title}
                </p>

                <p className="text-sm mb-2">{tech}</p>
                <p className="text-sm pb-1">{desc}</p>
                <a onClick={() => handleClick(gitHubLink)} 
                    className="text-sm font-semibold hover:cursor-pointer">
                        {gitHubLink}
                </a>
                
                <a onClick={() => handleClick(depLink)} 
                    className="text-sm font-semibold hover:cursor-pointer">
                        {depLink}
                </a>
            </div>
    );
}

export default Presentation;
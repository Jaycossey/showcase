const Presentation = (props) => {
    const {title, desc, image, link} = props;
    const handleClick = () => {
        window.open(link, "_blank", "noopener noreferrer");
    }

    return (        
            <div onClick={handleClick} 
                className="bg-slate-200
                    bg-opacity-80
                    rounded-2xl
                    border-4
                    border-purple-500
                    text-purple-800
                    text-center
                    flex
                    flex-col
                    items-center
                    p-1
                    shadow-black
                    shadow-2xl
                    h-64
                    w-80
                    custom-link">

                <p className="text-lg
                            underline
                            underline-offset-2">
                                {title}
                </p>
                
                <img className="w-38
                                h-20
                                shadow-xl
                                rounded-md
                                my-2" 
                    src={image}
                    alt="Project Screenshot" />

                <p className="text-sm">{desc}</p>
                
                <p className="text-sm">{link}</p>
            </div>
    );
}

export default Presentation;
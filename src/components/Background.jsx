// imports
import { useEffect, useRef } from "react";
// imort custom Effect Class
import Effect from "./utils/Effect";

// Background component
const Background = (props) => {
    // width and height of canvas !----- TODO - Ensure dynamic rendering of the component 
    // to handle the screen resolution changes, using desktop max for current to ensure responsiveness 
    // for the moment, needs fix to be responsive 
    let width = window.innerWidth - 20;
    let height = window.innerHeight - 20;

    // reference to canvas element
    const canvasRef = useRef(null);

    // on initial load
    useEffect(() => {
        // create canvas reference and get context
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // create a gradient for each of the particles as they travel on screen
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, 'blue');
        gradient.addColorStop(0.5, 'purple');
        gradient.addColorStop(1, 'red');

        // fill the particles of gradient color style
        ctx.fillStyle = gradient;
        // connecting line styles
        ctx.strokeStyle = 'cyan';

        // create new Effect (particle system with canvas as ref, handle particles via ctx)
        const effect = new Effect(canvas);
        effect.handleParticles(ctx);
    
        // animate function, only used for this component so declared locally
        const animate = () => {
            // clear current frame
            ctx.clearRect(0, 0, width, height);
            // particle class method
            effect.handleParticles(ctx);
            // recursive animation
            requestAnimationFrame(animate);
        }
        // call animations
        animate();
    }, []);

    return (
        // canvas element returned
        <canvas ref={canvasRef}
            // Had to ensure that I declared width and height OUTSIDE of the tailwind classes
            // z-index to -10 to remove need for remembering to add it elsewhere
            width={width}
            height={height} 
            className="fixed
                    -z-10">Hello Backround</canvas>
    );
}

export default Background;
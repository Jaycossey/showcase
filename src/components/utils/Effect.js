// import Particle class 
import Particle from "./Particle";

// custom Effect class
class Effect {
    // constructor, takes canvas as param
    constructor(canvas) {
        // binding canvas and assigning width and heights
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        // empty array to store all particles
        this.particles = [];
        this.numberOfParticles = 100;
        // when called, create particles using this.method
        this.createParticles();
    }
    // when called, populate array with x num of particles
    createParticles() {
        for (let i = 0; i < this.numberOfParticles; i++) {
            this.particles.push(new Particle(this));
        }
    }
    // handle the particles draw and update methods
    handleParticles(context) {
        this.particles.forEach((particle) => {
            particle.draw(context);
            particle.update();
        });
        // connect method call
        this.connectParticles(context);
    }
    // connect method
    connectParticles(context) {
        // assign max distance between particles for line draw
        const maxDist = 150;

        // compare all particles (i) with those next to it (j)
        for (let i = 0; i < this.particles.length; i++) {
            // j = i, to prevent comparing against those already compared
            for (let j = i; j < this.particles.length; j++) {
                // distance between x and y of particles
                const dx = this.particles[i].x - this.particles[j].x;
                const dy = this.particles[i].y - this.particles[j].y;
                // actual distance between using hypotenuse
                const dist = Math.hypot(dx, dy);

                // if actual distance is less than max
                if (dist < maxDist) {
                    // save context 
                    context.save();
                    // create opacity
                    const opacity = 1 - (dist / maxDist);
                    // update the opacity of the lines
                    context.globalAlpha - opacity;
                    // update lines between particles with path
                    context.beginPath();
                    // from
                    context.moveTo(this.particles[i].x, this.particles[i].y);
                    // to
                    context.lineTo(this.particles[j].x, this.particles[j].y);
                    // draw line
                    context.stroke();
                    context.restore();
                }
            }
        }
    }
}

export default Effect;
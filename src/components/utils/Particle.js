// Particle custom class
class Particle {
    // constructor
    constructor(effect) {
        // bindings, assigning position and size of particles
        this.effect = effect;
        this.radius = Math.floor(Math.random() * 10 + 1);
        this.x = this.radius + Math.random() * (this.effect.width - this.radius * 1);
        this.y = this.radius + Math.random() * (this.effect.height - this.radius * 1);
        // velocity of each particle
        this.vx = Math.random() * 1 - 0.2;
        this.vy = Math.random() * 1 - 0.2;
    }
    // draw method 
    draw(context) {
        // draw each particle
        context.beginPath();
        // in arc
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        // fill particle
        context.fill();
    }
    // update method
    update() {
        // this particle position x and y
        this.x += this.vx;
        this.y += this.vy;
        // if within range, update the particles velocity x
        if (this.x > this.effect.width - this.radius || this.x < this.radius) this.vx *= -0.5;

        // if within range, update the particles velocity y        
        if (this.y > this.effect.height - this.radius || this.y < this.radius) this.vy *= -0.5;
    }
}

export default Particle;
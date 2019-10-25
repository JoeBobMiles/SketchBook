
const circles = [];

function setup () {
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < 1000; i++) {
        circles.push({
            position: createVector(random(0, windowWidth), random(0, windowHeight)),
            direction: createVector(0, 0),
            velocity: createVector(0, 0),
            speed: 0.4,
            diameter: 2
        });
    }

    fill(0);
    noStroke();
    smooth();
}

function draw () {
    circles.forEach((c) => {
        circle(c.position.x, c.position.y, c.diameter);
    });

    for (let i = 0; i < circles.length; i++) {
        const c = circles[i];

        circles[i] = move(c);

        circle(c.position.x, c.position.y, c.diameter);
    }
}

function move (c) {
    // 800 is the magic number for getting the circles to move the way they do
    // in the example.
    const noiseScale = 800;
    const adjustment = 1.0;

    // The magic happens in the tail of this expression, where we multiply the
    // angle (in radians) by the noiseScale. I don't 100% have an explanation as
    // to why this works, but it does. adjustment is used to alter the behavior.
    const angle = noise(c.position.x / noiseScale,
                        c.position.y / noiseScale) * TWO_PI * (noiseScale * adjustment);

    c.direction.x = cos(angle);
    c.direction.y = sin(angle);

    c.velocity = c.direction.mult(c.speed);

    c.position.add(c.velocity);

    c = checkEdge(c);

    return c;
}

function checkEdge (c) {
    if (c.position.x < 0 || c.position.x > width || c.position.y < 0 || c.position.y > height) {
        c.position.x = random(0, width);
        c.position.y = random(0, height);
    }

    return c;
}
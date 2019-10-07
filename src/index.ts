
const main = () => {
    // Get the canvas on our demo page.
    const canvas = document.body.getElementsByTagName("canvas")[0];
    // Create a GL context out of our canvas.
    const gl = canvas.getContext("webgl");

    if (gl == null) {
        const msg = "Unable to load WebGL!";

        alert(msg);
        console.error(msg);

        return;
    }

    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);
};

window.onload = main;

// @file index.ts
// @author Joseph Miles <josephmiles2015@gmail.com>
// @date 2019-10-06
//
// This file is our main driver for SketchBook.


// This function accepts the name of a shader and returns the body of that
// shader.
const readShader: (string) => string = (shader) => {
    return require(`./shaders/${shader}`);
}


// This function loads our shaders and intializes our shader program.
const initShaderProgram: () => void = () => {
    const vertexShader = readShader("basic/basic.vert");
    const fragmentShader = readShader("basic/basic.frag");

    return;
}


// Our main entry point for the index page.
const main = () => {
    // Get the canvas on our demo page.
    const canvas = document.body.getElementsByTagName("canvas")[0];
    // Create a GL context out of our canvas.
    const gl = canvas.getContext("webgl");

    // If WebGL is not supported (or we had other troubles loading WebGL), tell
    // the user we couldn't start the application.
    // TODO[joe] Report cause of error.
    if (gl == null) {
        const msg = "Unable to load WebGL!";

        alert(msg);
        console.error(msg);

        return;
    }

    gl.clearColor(0, 0, 0, 1);
    gl.clear(gl.COLOR_BUFFER_BIT);

    console.log(readShader("basic/basic.vert"));
};

// Invoke our entry point function on page load.
window.onload = main;

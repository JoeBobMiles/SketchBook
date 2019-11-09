// @file new_sketch.ts
// @author Joseph R Miles <me@josephrmiles.com>
// @date 2019-10-25
//
// This file creates new sketches for us. All we have to do is provide a name.

import * as filesystem from "fs";


function createFromTemplate (name: string, type: string): boolean {

    try {
        let buffer = filesystem.readFileSync(`./templates/template.${type}`);

        let fileContents = buffer.toString().replace("{{}}", name);

        const directoryMap = {
            js: "./public/sketch/",
            html: "./public/"
        }

        const fileName = name + "." + type;

        filesystem.writeFile(directoryMap[type] + fileName, fileContents,
                             (error) => { if (error) throw error; });
    }
    catch (e) {
        console.error(e.msg);

        return false;
    }

    return true;
}


const sketchName = process.argv[2];

if (sketchName === undefined) {
    console.log("Sketch name is undefined!");
}
else {
    createFromTemplate(sketchName, "js");
    createFromTemplate(sketchName, "html");
}

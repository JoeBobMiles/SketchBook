// @file serve.ts
// @author Joseph R Miles <me@josephrmiles.com>
// @date 2019-10-06
//
// This file is our test server, used to perform local testing of our WebGL.

import * as filesystem from "fs";
import * as http from "http";


const ROOT_DIR = "./public";


const server = http.createServer();


server.on("error", (error) => console.error(error));

server.on("request", (request, response) => {
    response.writeHead(200, {
        "Content-Type": "text/html"
    });

    const url = request.url === "/" ? "/index.html" : request.url;

    filesystem.readFile(`${ROOT_DIR}${url}`, (error, data) => {
        if (error && error.code !== "ENOENT")
            console.error(error);

        else
            response.end(data);
    });
});


server.listen(80);

import * as http from "http";
import * as filesystem from "fs";


const ROOT_DIR = "./build";


const server = http.createServer();


server.on("error", (error) => console.error(error));

server.on("request", (request, response) => {
    response.writeHead(200, {
        "Content-Type": "text/html"
    });

    let url = request.url == "/" ? "index.html" : request.url;

    filesystem.readFile(`${ROOT_DIR}/${url}`, (error, data) => {
        if (error && error.code != "ENOENT")
            console.error(error);

        else
            response.end(data);
    });
});


server.listen(8000);

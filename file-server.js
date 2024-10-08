#!/usr/bin/env node
const fs = require("fs");
const http = require("http");

let file = process.argv[2];
let port = parseInt(process.argv[3]);

http.createServer((req, res) => {
    res.setHeader('Content-Disposition', `attachment; filename=${encodeURIComponent(file)}`);
    fs.createReadStream(file).pipe(res);
    let ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
    console.log(`${ip} requested.`);
}).listen(port, () => {
    console.log(`Listening on port ${port}`);
});

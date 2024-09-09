const http = require("http");

module.exports = (file, port, callback = () => {}) => {
    if (typeof file === "string") {
        const fs = require("fs");
        http.createServer((req, res) => {
            res.setHeader('Content-Disposition', `attachment; filename=${encodeURIComponent(file)}`)
            fs.createReadStream(file).pipe(res)
        })
        .listen(port, callback);
    } else {
        http.createServer((req, res) => res.end(file))
        .listen(port, callback);
    }
}

# File Server
Quickly send your file to other device.

# Installation
## For CLI
```bash
npm i fsup -g
```
## For CommonJS
```bash
npm i fsup
```

# Usage
## CLI
```bash
file-server file.png 8080
# or
fsup file.png 8080
```
## CommonJS
```js
const fsup = require("fsup");
fsup("test.txt", 8080, () => {
    console.log("Listening!");
});
```

# New
- Added logging feauture to CLI. CLI will log all ip of requests!

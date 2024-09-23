import express from 'express';
const app = express();
const port = 3000;
import { dirname } from 'path';
import { fileURLToPath } from "node:url";
import * as birds from './birds.js';
import * as path from "node:path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const object = {
    name: "Omkar Panda",
    role: "Junior Web Developer",
    func: function () {
        console.log("Omkar Panda is the greatest programmer to ever walk on the surface of the earth");
    }
};
app.get('/google', (req, res, next) => {
    console.log("within a short period of time you'll be redirected to google.com");
    setTimeout(function () {
        next();
    }, 5000);
}, (req, res) => {
    res.redirect("https://www.google.com");
    res.end();
});
let html = "<p>Hey, this is my website</p>";
app.get("/website", (req, res) => {
    res.send(html);
});
app.get('/file/index', (req, res, next) => {
    let options = {
        root: path.join(__dirname),
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };
    let filename = "index.js";
    res.sendFile(filename, options, function (err) {
        if (err) {
            next(err);
        }
        else {
            console.log(`Sent: ${filename}`);
        }
    });
});
app.get('/file/download', (req, res, next) => {
    let options = {
        root: path.join(__dirname),
        dotfiles: 'deny',
        headers: {
            'x-timestamo': Date.now(),
            'x-sent': true
        }
    };
    let filename = "index.js";
    res.download(filename, function (err) {
        if (err) {
            next(err);
        }
        else {
            console.log(`Downloaded: ${filename}`);
        }
    }), (req, res) => {
        console.log('error occurred');
    };
});
//chainable route handlers
app.route('/book')
    .get((req, res) => {
    res.send("Get a random book");
})
    .post((req, res) => {
    res.send("Add a book");
})
    .put((req, res) => {
    res.send("Update the book");
});
app.use('/birds', birds.router);
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
});
//# sourceMappingURL=index.js.map
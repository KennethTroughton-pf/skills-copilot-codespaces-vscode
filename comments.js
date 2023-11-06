// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
const port = 3000;
// Start server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
// Set view engine
app.set('view engine', 'ejs');
// Set body parser
app.use(bodyParser.urlencoded({ extended: true }));
// Set route
app.get('/', (req, res) => {
    res.render('index');
});
app.post('/', (req, res) => {
    let { url } = req.body;
    // Get comments
    request(url, (err, response, body) => {
        if (err) {
            console.log(err);
        }
        let comments = JSON.parse(body);
        res.render('index', { comments });
    });
});
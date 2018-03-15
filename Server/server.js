const express = require('express');
const path = require('path');
const webpack = require('webpack');

const port = 3000;
const app = express();

const compiler = webpack(require('../webpack.config'));

app.use(require('webpack-dev-middleware')(compiler, { hot: true, noInfo: true, }));
app.use(require('webpack-hot-middleware')(compiler));

app.listen(port, function (error) {
    if (error) {
        console.error(error);
    } else {
        console.info(`Server start on ${port} port`);
    }
});

app.get(/.*/, (req, res) => {
    res.redirect('/');
});

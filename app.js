const express = require('express');

const app = express();

app.use(',', (req,res,next) => {
    console.log('In first mw');
    next();
});

app.use('/add-product', (req, res,next) => {
    console.log('in second mw');
    res.send('add product route');
});

app.use('/', (req,res, next) => {
    console.log('In third mw');
    res.send('default route');
});

app.listen(3000);
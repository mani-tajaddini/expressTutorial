'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.set('view engine', 'pug');
app.set('views', './views');

//First middleware before response is sent
app.use(function (req, res, next) {
    console.log("Start");
    next();
});

//Route handler
app.get('/first_template', function (req, res, next) {
    res.render('first_view');
    next();
});

app.get('/dynamic_view', function (req, res, next) {
    res.render('dynamic', {
        name: "TutorialsPoint",
        url: "http://www.tutorialspoint.com"
    });
    next();
});

app.use('/', function (req, res) {
    console.log('End');
});

app.listen(3000);
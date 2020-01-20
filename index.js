
/* โหลด Express มาใช้งาน */
var app = require('express')();
var users = require('./user');
var bodyParser = require('body-parser');

/* ใช้ port 7777 หรือจะส่งเข้ามาตอนรัน app ก็ได้ */
var port = process.env.PORT || 7777;

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

/* Routing */
app.get('/', function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
});
app.get('/index', function (req, res) {
    res.send('<h1>This is index page</h1>');
});

app.get('/user', (req, res) => {
    res.json(users.findAll());
});

app.get('/user/:id', (req, res) => {
    console.log(req)
    var id = req.params.id;
    res.json(users.findById(id));
});

app.post('/newuser', (req, res) => {
    var json = req.body;
    console.log(req.body)
    res.send(`add new ${json.name} completed!`);
});


/* สั่งให้ server ทำการรัน Web Server ด้วย port ที่เรากำหนด */
app.listen(port, function () {
    console.log('Starting node.js on port ' + port);
});
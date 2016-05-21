'use strict';

const restify = require('restify');

const server = restify.createServer();

server.use(restify.CORS());
server.use(restify.queryParser());
server.use(restify.bodyParser( { mapParams: false }));

server.use((req, res, next) => {
    console.log(req.url);

    next();
});

const users = {};

server.get('list/:userId', (req, res) => {
    console.log(users);

    const user = users[req.params.userId];

    if (!user) {
        return res.json(404, 'User not found');
    }

    let query = user.messages;

    if (req.params.timestamp) {
        const timestamp = parseInt(req.params.timestamp);

        query = query.filter(m => m.timestamp > timestamp);
    }

    const messages = query.map(m => m.message);
    res.json(200, messages);
});

server.post('message/:userId', (req, res) => {
    const userId = req.params.userId;

    if (!users[userId]) {
        users[userId] = {};
    }

    const messages = users[userId].messages = users[userId].messages || [];

    messages.push({
        message: req.body,
        timestamp: new Date().getTime()
    });

    res.json(200, 'Ok');
});

server.listen(9090, () => console.log('Ready'));

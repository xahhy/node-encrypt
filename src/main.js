const express = require('express');
const bodyParser = require('body-parser');
const {encrypt} = require('./util');
const app = express();

app.use(bodyParser.text({
    limit: '100mb'
}));

app.post('/', async function handleEncrypt(req, res, next) {
    const data = req.body;
    if (!data || (data.constructor === Object && Object.keys(data).length === 0)) {
        res.send(400, 'Empty body');
        return;
    }
    const result = encrypt(data);
    res.send(result);
});

app.listen(3000, () => console.log(`App listening on 3000 PID: ${process.pid}`));
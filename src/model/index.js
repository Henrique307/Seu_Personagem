import jsonServer from "json-server";

import app from './connection.js'

const port = process.env.PORT || 5000

app.use('/', jsonServer.router('../../db.json'));

app.listen(port, () => {
    console.log(`conectado em http://localhost:${port}`)
});
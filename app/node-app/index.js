const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'app-db',
    user: 'root',
    password: 'root',
    database:'app-db'
};
const mysql = require('mysql')

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})

app.get('/', async (req,res) => {
    const connection = mysql.createConnection(config)
    var html = '<h1>Full Cycle Rocks!</h1>'
    connection.query(
        'SELECT * FROM people;',
        (error, result, fields) => {
            html = html + '<ul>'
            result.forEach(element => {
                html = html + '<li>' + element.name + '</li>' 
            });
            html = html + '</ul>'
            res.send(html)
        })
    connection.end()
})
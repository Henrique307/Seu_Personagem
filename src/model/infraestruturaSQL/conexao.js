import mysql from 'mysql';

export const conexao = mysql.createConnection({
    host:"localhost",
    port:3000,
    user:"root",
    password:"admin",
    database:"seu-personagem"
})
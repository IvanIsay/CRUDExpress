
// Importaciones
const express= require('express');
const server= express();
const morgan= require('morgan');
const path= require('path');
const mysql= require('mysql');
const myConnection = require('express-myconnection');

const albumsRoutes = require('./routes/albums');

//Configuraciones
server.set('NombreAPP', 'CRUD:Express-Mysql');
server.set('port', 3010);
server.set('view engine','ejs');
server.set('views',path.join(__dirname, 'views'));

//Middleware
server.use(morgan('common'))
server.use(myConnection(mysql,{
  host:'localhost',
  user:'root',
  password:'',
  port:'3306',
  database:'dbnode',
},'single'));


//Routes
server.get('/',albumsRoutes);



//Static Files
server.use(express.static(path.join(__dirname, 'public')));

//Arranque
server.listen(server.get('port'), () => {
  console.log(server.get('NombreAPP'))
  console.log('server escuchando en puerto',server.get('port'));
  console.log('ctrl + C para cancelar');
});

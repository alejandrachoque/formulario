const express= require('express');
const app = express();
const path = require('path')
const PORT= 3000;
const mainRouter= require('./src/routes/main')
const valid= require('./src/middlewares/formValidar')
const session= require('express-session')
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './src/views')
app.use(session({secret:'secreto'}))
//ruta

app.use('/',mainRouter)


app.listen(PORT,()=>console.log('Servidor funcionando'));
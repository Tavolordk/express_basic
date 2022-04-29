//Usando objeto express
const express = require('express');
//App de Express
const app = express();
//Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000;

//Path inicial, responderá a la url localhost:3000
app.get('/',(req,res)=>{
    res.send('Hello world!');
});
//Agregando otra ruta
app.get('/launchx',(req,res)=>{
    res.send('Bienvenidos a launchx!');
});
//Ruta que regresa objeto
app.get('/explorersInNode',(req,res)=>{
    const explorer = {name:"Octavio",msg:"Hello"}
    res.send(explorer);
});
//Query Params para recibir parametros via url
app.get('/explorers/:explorerName',(req,res)=>{
    res.send(req.params);
});
//Con esto inicializamos esta app
app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})
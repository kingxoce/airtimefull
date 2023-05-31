const express = require("express");

const cors = require("cors");

const mysql = require("mysql");


const app = express();app.use(express.json());
app.use(cors());
const db = mysql.createConnection({   
     host: "localhost",    
     user: "root",    
     password: "master12",    
     database: "airtime1"})

app.get("/clientes-get", (req, res) => {    const sql = "SELECT * FROM CLIENTE";    db.query(sql, (err, data) => {        if(err) return res.json("Error");        return res.json(data);    });});


app.get('/',(req,res)=>{
    res.send('Hola Mundo')
})


app.post('/crearc', (req, res) => {    
    const sql = "INSERT INTO CLIENTE (nombres,apellidos,telefono,nit,correo,USUARIO_idusuario) VALUES (?)";    
    const values = [        req.body.nombres,   req.body.apellidos,     req.body.telefono, req.body.nit,req.body.correo, req.body.usuario    ]    
    db.query(sql, [values], (err, data) => {        if(err) return res.json("Error");       
    return res.json(data);    })})

    app.delete('/deleteclient/:id', (req, res) => {   
        const sql = "DELETE FROM CLIENTE WHERE idcliente = ?";    
        const id = req.params.id;        
        db.query(sql, [id], (err, data) => {
        if(err) return res.json("Error");        
        return res.json(data);    })})


        app.put('/updatec/:id', (req, res) => {   
            const sql = "UPDATE CLIENTE SET nombres = ? ,apellidos=?, telefono = ? , nit = ? , correo =?, USUARIO_idusuario=? where idcliente = ?";    
            const values = [req.body.nombres,   req.body.apellidos,     req.body.telefono, req.body.nit,req.body.correo, req.body.usuario]  
            const id = req.params.id;        
            db.query(sql, [...values, id], (err, data) => { 
            if(err) return res.json("Error");        
            return res.json(data);    })})

            app.get("/searchclient/:id", (req, res) => {  
                const sql = "SELECT * FROM CLIENTE WHERE idcliente=? ;";
                const id = req.params.id;  
                db.query(sql,[id],(err, data) => {      
                if(err) return res.json("Error");    
                return res.json(data);});});
                
                app.get("/searchclientname/:name", (req, res) => {  
                    const sql = "SELECT * FROM CLIENTE WHERE nombres like '?%';";
                    const name = req.params.name;  
                    db.query(sql,[name],(err, data) => {      
                    if(err) return res.json("Error");    
                    return res.json(data);});});


/*app.get('/productos',(req,res)=>{
    var conexion=mysql.createConnection(credenciales)
    conexion.query('select * from sv_productos',(error,result)=>{
        if(error){
            res.status(500).send(error)
        }else{
            res.status(200).send(result)
        }
    })
    conexion.end()
})

app.get('/productos/incluye',(req,res)=>{
    var conexion=mysql.createConnection(credenciales)
    conexion.query('select * from incluye_detalle',(error,result)=>{
        if(error){
            res.status(500).send(error)
        }else{
            res.status(200).send(result)
        }
    })
    conexion.end()
})

//peticion de usuarios a la BD
app.get('/usuarios-get',(req,res)=>{
    var conexion=mysql.createConnection(credenciales)
    conexion.query('select * from usuarios',(error,result)=>{
        if(error){
            res.status(500).send(error)
        }else{
            res.status(200).send(result)
        }
    })
    conexion.end()
})

//peticion de clientes a la BD
app.get('/clientes-get',(req,res)=>{
    var conexion=mysql.createConnection(credenciales)
    conexion.query('select * from clientes',(error,result)=>{
        if(error){
            res.status(500).send(error)
        }else{
            res.status(200).send(result)
        }
    })
    conexion.end()
})

//insercion de usuarios a la BD
app.post('/usuarios-post', (req, res)=>{
    var conexion=mysql.createConnection(credenciales)
    const values = [
        req.body.usuario,
        req.body.email,
        req.body.password,
        req.body.tipo
    ]
    conexion.query('INSERT INTO usuarios (`usuario`, `email`, `password`, `tipo`) VALUES (?)',[values], (err,result)=>{
        if(err) return res.json(err);
        return res.json(result);
    })
    conexion.end()
})
*/
app.listen(4000, ()=>console.log('Bienvenido al Backend'))
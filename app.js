var express=require("express"), //require es una libreria de node. Buscame (cargame) dentro de la carpeta node_modules la libreria express
app=express(); //variable tipo global. Con app voy a gestionar toda mi aplicacion. Creo un objeto (se suelen escribir con un guion _app) de express que hemos llamado app

bodyParser=require("body-parser"),
methodOverride=require("method-override");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());

var router=express.Router();
router.get('/',function(req,res) {res.send("Servidor Activo");}); //req es request, res es respond
router.get('/pringaillo',function(req,res) {res.send("Hola pringado");}); //req es request, res es respond

app.use(router);

//Cojo mi app creado y:
app.listen(80, function(){ console.log("Mi primer servidor") }); // el servidor nos escucha en el puerto 3000

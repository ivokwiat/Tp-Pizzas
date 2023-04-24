import config from './dbconfig.js'
import sql from 'mssql'
import Pizza from './src/models/pizza.js'
import PizzaService from './src/services/pizzas-services.js'
let svc = new PizzaService();

let pizzaNueva = new Pizza();
pizzaNueva.nombre = 'Pizza de aceitunas';
pizzaNueva.libreGluten = false;
pizzaNueva.importe = 12345;
pizzaNueva.descripcion = "Pizza con aceitunas capo, que  sos? lucho?";

let resultado = await svc.insert(pizzaNueva)

//let resultado2 = await svc.insert("hola", 0, 1342, "hola descripcion")
console.log(resultado);
/*

let miPizza  = await svc.getById(2);
console.log( miPizza);




let pool = await sql.connect(config)
let result = await pool.request().query("SELECT TOP 2 * FROM Pizzas")

console.log(result.recordsets.length)
console.log(result.recordsets[0].length)
console.log(result.recordsets[0])
console.log(result.recordset)
console.log(result.returnvalue)
console.log(result.output)
console.log(result.rowsAffected)

process.exit()
*/
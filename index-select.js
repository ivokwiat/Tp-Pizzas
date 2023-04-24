import config from './dbconfig.js'
import sql from 'mssql'
import PizzaService from './src/services/pizzas-services.js'

let svc = new PizzaService();

let resultado = await svc.getAll();
console.log(resultado);


//let miPizza  = await svc.getById(2);
//console.log( miPizza);

/*


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
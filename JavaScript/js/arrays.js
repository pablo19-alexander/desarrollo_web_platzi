//               0         1         2        3
var frutas = ["papaya", "manzana", "pera", "cereza"];
console.log(frutas); //imprime el arreglo ["papaya", "manzana", "pera", "cereza"]
console.log(frutas, length) //imprime la cantidad de los elementos en el arreglo
console.log(frutas[0]) //aceder a un elemento del arreglo

//para agregar mas frutas al arreglo
var masFrutas = frutas.push("uvas");

//para eliminar 
var ultimo = frutas.pop("uvas");

// un elemento que se posisiona al comienzo del arreglo
var nuevaLongitud = frutas.unshift("uvas");

//eliminar el elemento que este en el inicio
var borrarFruta = frutas.shift("uvas");

//saber la posision del elemento 
var posicion = frutas.indexOf("manzana");
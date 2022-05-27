//  es cuando se procesan las variables y las funciones se 
// procesan antes de que se ejecutel cualquie tipo de codigo

var miNombre = undefined;

console.log(miNombre + " soy ese hoisting");

miNombre = "pablo";

// en funciones 

hey();

function hey() {
    console.log("hola " + miNombre);
}

var miNombre = "pablo"
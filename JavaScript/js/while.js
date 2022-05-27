var estudiantes = ["maria", "sergio", "rosa", "daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`hola, ${estudiante}`);
}

// mientras estudiante.length que es la longitud del arreglo sea mayor a cero 
// entoces se debe cumplir este siclo
// el shift va a ir sacando elemontos 
while (estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}
var estudiantes = ["maria", "sergio", "rosa", "daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`hola, ${estudiante}`);
}
// mientras que la variable i sea menor a la longitud del arreglo entoces i se aunmenta de numero
for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}

//segunda forma de usar el for
//el estudiante 0 del arreglo estudiantes entoces manda a llamar la funcion
for (var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}
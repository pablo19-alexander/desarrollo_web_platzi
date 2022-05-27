// scope global

var miNombre = "PABLO";

function nombre() {
    //scope local
    var miApellido = "SALAZAR";
    console.log(miNombre + " " + miApellido);
}

nombre();
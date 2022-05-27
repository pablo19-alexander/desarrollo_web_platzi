var miAuto = {
    marca: "toyota",
    modelo: "corola",
    año: 2020,
    //agregarle una funcion o propiedad - this = miAuto
    detalleDelAuto: function() {
        console.log(`auto: ${this.modelo} ${this.año}`);
    }
};

//para traer algo en especifico
miAuto.marca
    //"toyota"
miAuto.modelo
    //"corola"
miAuto.año
    //2020

//llamar la fincion
miAuto.detalleDelAuto();
//"Auto Corolla 2020"
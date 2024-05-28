var bicicleta = {
    color: "blanco",
    modelo: "2023",
    velocidad: "20km",
    cambiarcolo: function cambio(nuevo_color){
        this.color = nuevo_color;
    }
}

bicicleta.cambiarcolo("azul")
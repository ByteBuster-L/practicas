const pan = {
    tipo: "bolillo",
    precio: 2,
    saludar () {
        console.log(`Hola soy un ${this.tipo}`);
    }
}

pan.saludar();
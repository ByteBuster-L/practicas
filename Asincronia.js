// Esta función simula una descarga que tarda 2 segundos.
// Devuelve una Promesa.
function simularDescarga() {
  console.log("2. La descarga ha comenzado... (espera 2 segundos)");
  
  // Creamos y devolvemos la promesa
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(Math.random() > 0.5){
      resolve({ modelo: "robot.glb", tamaño: "15MB" });
      }else{
        reject("Error de conexion");
      }
    }, 5000); // 2000 milisegundos = 2 segundos
  });
}

// Nuestra función 'async' para manejar la operación
async function iniciarCarga() {
  console.log("1. Estamos a punto de iniciar la descarga.");

  try{
    const miModelo = await simularDescarga();
    console.log("Exito", miModelo)
  }catch{
    console.log("fallo la descarga");
  }

}

// Llamamos a la función para que todo empiece
iniciarCarga();
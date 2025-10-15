// 1. CLASE PADRE (para mostrar HERENCIA)
// Esta clase encapsula las propiedades y métodos comunes.
class Animal {
  constructor(nombre) {
    this.nombre = nombre; // Propiedad
  }

  // Método que será heredado y luego sobreescrito (Polimorfismo)
  hacerSonido() {
    console.log("El animal hace un sonido genérico.");
  }

  // Método que será simplemente heredado
  comer() {
    console.log(this.nombre + " está comiendo.");
  }
}

// 2. CLASES HIJAS (heredan de Animal)
class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre); // Llama al constructor de la clase padre (Animal)
    this.raza = raza;
  }

  // 3. POLIMORFISMO: Sobreescribimos el método del padre
  hacerSonido() {
    console.log("¡Guau! ¡Guau!");
  }

  // Método propio de la clase Perro
  perseguirCola() {
    console.log(this.nombre + " está persiguiendo su cola.");
  }
}

class Gato extends Animal {
  // No necesita su propio constructor, usa el de Animal

  // 3. POLIMORFISMO: Sobreescribimos el método del padre
  hacerSonido() {
    console.log("¡Miau!");
  }
}

// --- Usando los objetos ---

const miPerro = new Perro("Fido", "Golden Retriever");
const miGato = new Gato("Misi");

miPerro.comer(); // Método heredado de Animal
miGato.comer();  // Método heredado de Animal

miPerro.hacerSonido(); // Muestra "¡Guau! ¡Guau!" (Polimorfismo)
miGato.hacerSonido();  // Muestra "¡Miau!" (Polimorfismo)

// 4. ABSTRACCIÓN:
// No necesitamos saber cómo se implementa 'hacerSonido' o 'comer' internamente,
// simplemente los usamos. La complejidad está oculta.

class Persona {
    constructor (nombre, edad, trabajo){
        this.nombre = nombre,
        this.edad = edad,
        this.trabajo = trabajo
    };

    saludar () {
        console.log(`Hi mi nombre es ${this.nombre} y tengo ${this.edad}`);
    }
}

class Programador extends Persona {
    constructor(nombre, edad, trabajo, lenguaje){
        super(nombre, edad, trabajo);
        this.lenguaje = lenguaje;
    }

    saludar () {
        console.log(`Hi mi nombre es: ${this.nombre} mi edad es: ${this.edad} trabajo como ${this.trabajo} y mi lenguaje favorito es: ${this.lenguaje}`)
    }
}

class Animador extends Persona{
  constructor(nombre, edad, trabajo, comida){
    super(nombre, edad, trabajo);
    this.nose = comida;
  }

  hola (){
    console.log(`Hola soy ${this.nombre} y tabajo como ${this.trabajo} mi comidad favorita son las ${this.nose}`)
  }
}

const briana = new Animador("Briana", 17, "animadora", "papas");
briana.hola();

const Charlie = new Persona("Carlos", 17, "Front-end");
Charlie.saludar();

const Brian = new Programador("Brian", 17, "Programador", "JavaScript");
Brian.saludar();

const Quintero = new Programador("Daniel", 17, "Barista y programador", "Ensamblador");
Quintero.saludar();

class NombreDeLaClase {
  // El constructor es un método especial para crear e inicializar un objeto.
  // Se ejecuta automáticamente cuando usamos la palabra 'new'.
  constructor(parametro1, parametro2) {
    // 'this' se refiere al objeto que se está creando.
    // Aquí asignamos los valores de los parámetros a las propiedades del objeto.
    this.propiedad1 = parametro1;
    this.propiedad2 = parametro2;
  }

  // Esto es un método (una función dentro de la clase).
  metodo1() {
    // Aquí va el código que define lo que el objeto puede hacer,
    // usando sus propiedades con 'this'.
    console.log(`El valor de mi propiedad1 es ${this.propiedad1}`);
  }
}
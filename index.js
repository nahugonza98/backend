    // Desafio 1

    /* Creo la clase */
    class Usuario {
    /* Inicializo el contructor */
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    //? Metodos

    getFullName() {
        console.log(`${this.nombre} ${this.apellido}`);
    }

    //TODO: Le paso un params al metodo para que lo pushee.
    addMascota(mascota) {
        this.mascotas.push(mascota);
    }

    //TODO: Muestra cantidad de elementos con el .length
    countMascota() {
        console.log(this.mascotas.length);
    }

    //TODO: Se pasa por params author, name para pushear al constructor (objeto)
    addBook(author, name) {
        this.libros.push({ nombre: name, autor: author });
    }

    //TODO: Se crea una variable, y luego se mapea el "this.libros".
    //TODO: itera todo el this.libros, mostrando solo los "".nombres"
    getBookNames() {
        let nombres = this.libros.map((books) => books.nombre);
        console.log(nombres);
    }
    }

    const user = new Usuario("Nahuel", "Gonzalez");
    user.addMascota("perro");
    user.addMascota("gato");
    user.addBook("Willian Golding", "El señor de las moscas");
    user.addBook("Stephen King", "It");
    console.log(user);
    user.getFullName();
    user.countMascota();
    user.getBookNames();

class Persona{
    #valorPrivado = "secreto";
    #nombre;
    constructor(nombre){
        this.#nombre = nombre,
        this.#valorPrivado = "otro dato"
    }
    mostrarDatos(){
        let saludo = "hola";
        console.log(`
            Nombre: ${this.#nombre}
            ${saludo}
        `);
    }
    #editarNombre(nombre){
        this.#nombre = nombre;
    }
    validarNombre(nombre){
        if(nombre !== ""){
            this.#editarNombre(nombre);
        }else{
            console.log("Debes ingresar un nombre!");
        }
    }
    getNombre(){
        return this.#nombre;
    }
    getValorPrivado(){
        return this.#valorPrivado;
    }
    setNombre(nombre){
        this.#nombre = nombre;
    }
    setValorPrivado(valor){
        this.#valorPrivado = valor;
    }
}

export default Persona;
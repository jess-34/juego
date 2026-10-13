class Personaje {
    #vida = 100;
    #nombre;
    #ki = 100;
    #energia = 100;
    #semilla = 2;
    #personaje = "";

    constructor(nombre) {
        this.#nombre = nombre;
        this.#personaje = nombre;
    }

    getPersonaje() {
        return this.#personaje;
    }

    getVida() {
        return this.#vida;
    }

    getKi() {
        return this.#ki;
    }

    getEnergia() {
        return this.#energia;
    }

    getSemilla() {
        return this.#semilla;
    }

    getNombre() {
        return this.#nombre;
    }

    setVida(vida) {
        this.#vida = Math.max(0, Math.min(100, vida));
    }

    setKi(ki) {
        this.#ki = Math.max(0, Math.min(100, ki));
    }

    setEnergia(energia) {
        this.#energia = Math.max(0, Math.min(100, energia));
    }

    setSemilla(semilla) {
        this.#semilla = Math.max(0, Math.min(2, semilla));
    }
}

export default Personaje;
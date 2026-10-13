import Personaje from "./Personaje.js";

class Acciones extends Personaje {
    constructor(nombre) {
        super(nombre);
    }

    atkBasico() {
        this.setEnergia(this.getEnergia() - 5);
        this.setKi(this.getKi() - 10);
    }

    atkEspecial() {
        this.setEnergia(this.getEnergia() - 15);
        this.setKi(this.getKi() - 20);
    }

    curacion() {
        if (this.getVida() < 100 || this.getEnergia() < 100 || this.getKi() < 100) {
            if (this.getSemilla() > 0) {
                this.setEnergia(100);
                this.setKi(100);
                this.setVida(100);
                this.setSemilla(this.getSemilla() - 1);
                return true;
            }
        }
        return false;
    }

    cargaEnergia() {
        this.setEnergia(this.getEnergia() + 15);
        this.setKi(this.getKi() + 10);
    }
}

export default Acciones;
import Swal from "sweetalert2";

const atributosPersonaje = {
    "Goku": {
        atk_basico: "¡Kame Hame Ha!",
        atk_especial: "¡Es tu fin!",
        fondo: "rgba(7, 196, 238, 0.6)"
    },
    "Trunks": {
        atk_basico: "¡Toma esto!",
        atk_especial: "¡Destello final!",
        fondo: "rgba(138, 43, 226, 0.6)"
    },
    "Gohan": {
        atk_basico: "¡Masenko!",
        atk_especial: "¡Kamehameha anger!",
        fondo: "rgba(255, 140, 0, 0.6)"
    },
    "Vegitto": {
        atk_basico: "¡Espada de ki!",
        atk_especial: "¡Final Kamehameha!",
        fondo: "rgba(0, 100, 255, 0.6)"
    },
    "Vegeta": {
        atk_basico: "¡Cañón Gallick!",
        atk_especial: "¡Final Flash!",
        fondo: "rgba(220, 20, 60, 0.6)"
    },
    "Cell": {
        atk_basico: "¡Rayo mortal!",
        atk_especial: "¡Kamehameha solar!",
        fondo: "rgba(0, 128, 0, 0.6)"
    },
    "Piccolo": {
        atk_basico: "¡Makankosappo!",
        atk_especial: "¡Granada de luz!",
        fondo: "rgba(46, 139, 87, 0.6)"
    },
    "Gogeta": {
        atk_basico: "¡Golpe frenético!",
        atk_especial: "¡Punizador de almas!",
        fondo: "rgba(255, 215, 0, 0.6)"
    }
};

const atk_basico = (atacante, defensor, personajeActual) => {
    atacante.atkBasico();
    defensor.setVida(defensor.getVida() - 10);

    const textoAtaque = atributosPersonaje[personajeActual]?.atk_basico || "¡Ataque básico!";
    const colorFondo = atributosPersonaje[personajeActual]?.fondo || "rgba(0, 0, 0, 0.5)";

    Swal.fire({
        text: textoAtaque,
        imageUrl: `./public/img/${personajeActual}/basico.png`,
        imageWidth: 300,
        imageHeight: 300,
        position: "center-center",
        width: 600,
        color: "#fff",
        background: "none",
        imageAlt: "Ataque Basico",
        backdrop: colorFondo,
        showConfirmButton: false,
        timer: 1500 
    });
};

const atk_especial = (atacante, defensor, personajeActual) => {
    atacante.atkEspecial();
    defensor.setVida(defensor.getVida() - 25);

    const textoAtaque = atributosPersonaje[personajeActual]?.atk_especial || "¡Ataque especial!";
    const colorFondo = atributosPersonaje[personajeActual]?.fondo || "rgba(0, 0, 0, 0.5)";

    Swal.fire({
        text: textoAtaque,
        imageUrl: `./public/img/${personajeActual}/especial.png`,
        imageWidth: 300,
        imageHeight: 300,
        position: "center-center",
        width: 600,
        color: "#fff",
        background: "none",
        imageAlt: "Ataque Especial",
        backdrop: colorFondo,
        showConfirmButton: false,
        timer: 1500 
    });
};

const cargar_ki = (jugador, personajeActual) => {
    jugador.cargaEnergia();

    const colorFondo = atributosPersonaje[personajeActual]?.fondo || "rgba(0, 0, 0, 0.5)";
    const urlImagen = `./public/img/${personajeActual}/energia.png`;

    Swal.fire({
        text: "¡Cargando Ki!",
        imageUrl: urlImagen,
        imageWidth: 300,
        imageHeight: 300,
        position: "center-center",
        width: 600,
        color: "#fff",
        background: "none",
        imageAlt: "Cargando Ki",
        backdrop: colorFondo,
        showConfirmButton: false,
        timer: 1500 
    });
};

const usar_semilla = (jugador) => {
    if (jugador.getVida() === 100 && jugador.getEnergia() === 100 && jugador.getKi() === 100) {
        Swal.fire({
            icon: "warning",
            title: "¡Vida al máximo!",
            text: "Las barras de vida, energía y ki están al 100%, no puedes usar semillas.",
            timer: 1500,
            showConfirmButton: false
        });
        return false;
    }

    if (jugador.getSemilla() <= 0) {
        Swal.fire({
            icon: "error",
            title: "¡Sin semillas!",
            text: "Solo puedes utilizar dos semillas por jugador.",
            timer: 1500,
            showConfirmButton: false
        });
        return false;
    }

    if (jugador.curacion()) {
        Swal.fire({
            icon: "success",
            title: "¡Semilla usada!",
            showConfirmButton: false,
            timer: 1000
        });
        return true;
    }
    return false;
};

export { atk_basico, atk_especial, cargar_ki, usar_semilla };
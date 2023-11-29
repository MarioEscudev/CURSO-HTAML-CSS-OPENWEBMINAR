let jugador = {
    nombre : 'Mario',
    Fuerza : 1,
    InrementarFuerza: function () {
        this.Fuerza += 1;

        
    },
    consultarFuerza: function(){
        console.log("Tu fuerza es " + this.Fuerza);

    }
    
}
jugador.consultarFuerza();
jugador.InrementarFuerza();
jugador.consultarFuerza();

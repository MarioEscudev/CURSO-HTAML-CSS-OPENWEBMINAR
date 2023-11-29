let aleatorio = Math.random();

function generarNumero(numeroMaximo){
    return Math.round(Math.random() * numeroMaximo);
}

console.log(generarNumero(100));
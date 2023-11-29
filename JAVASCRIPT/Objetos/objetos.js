var persona ={
    nombre: 'Mario',
    edad: 30,
    saludar: function (){

        console.log("Hola " + this.nombre);
    }
};

persona.saludar();
var campoFiltro = document.querySelector("#filtrar-tabla");

campoFiltro.addEventListener("input",function () {    
    //this.value es el valor de la caja de texto.
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNombre = paciente.querySelector(".info-nombre");
            var nombre = tdNombre.textContent;
            var expresion = new RegExp(this.value,"i");
            
            //expresion es una expresión regular, "i" es lo que indica que es key sensitive
            //y expresion.test es un metodo que compara si expresión está dentro del nombre.
            if(!expresion.test(nombre)) {
                paciente.classList.add("invisible");
            } else {
                paciente.classList.remove("invisible");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisible");
        }
    }
})
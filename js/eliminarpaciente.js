var pacientes = document.querySelectorAll(".paciente");

var tabla = document.querySelector("#tabla-pacientes");

tabla.addEventListener("click",function(event) {
    var opción = confirm("¿Quiere eliminar la fila realmente?")
    if(opción) {
        //Target dice que capture el lugar donde hicimos click.
        //parentNode dice que seleccione al padre del objeto que capturamos.
        event.target.parentNode.classList.add("fadeOut");
        //setTimeout hace que la función anónima que le pasamos por parametro se ejecute después
        //de un determinado tiempo.
        setTimeout(function() {
            event.target.parentNode.remove();        
        },500);
    } else {
        alert("No se ha eliminado la fila");
    }
})

/*
pacientes.forEach(function(paciente) {
    paciente.addEventListener("dblclick",function(){
        this.remove(); 
    })
})
*/
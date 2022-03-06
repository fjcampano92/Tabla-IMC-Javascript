function capturarDatosPaciente(form) {
    //Captura los datos del formulario

    var paciente = {
    nombre: form.nombre.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calcularImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function construirTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(construirTd(paciente.nombre,"info-nombre"));
    pacienteTr.appendChild(construirTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(construirTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(construirTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(construirTd(paciente.imc,"info-imc"));

    return pacienteTr;
}

function construirTd(dato,clase) {
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;

    return td;
}

function validarPaciente(paciente) {
    var errores = [];

    if(paciente.nombre.length == 0) {
        errores.push("El nombre no puede estar vacío.")
    }

    if(paciente.altura.length == 0) {
        errores.push("La altura no puede estar vacía.")
    }

    if(paciente.peso.length == 0) {
        errores.push("El peso no puede estar vacío.")
    }

    if(paciente.gordura.length == 0) {
        errores.push("El % de gordura no puede estar vacío.")
    }

    if(!validarPeso(paciente.peso)) {
        errores.push("Peso incorrecto.");
    }

    if(!validarAltura(paciente.altura)) {
        errores.push("Altura incorrecta.");
    }

    return errores;
}

function mostrarMensajesErrores(errores) {
    var ul = document.querySelector("#mensajes-errores");
    
    //Deja la lista sin items en caso de que haya algún error de otra validación anterior.
    ul.innerHTML = "";

    //para cada item del array errores creamos una función anónima que itera cada error.
    errores.forEach(function (error) {
    var li = document.createElement("li");
    li.textContent = error;
    ul.appendChild(li);
    });

}

function adicionarPacienteEnLaTabla(paciente) {
    var pacienteTr = construirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
}

//Adicionar pacientes a la tabla mediante el formulario y el botón agregar.

var botonAgregar = document.querySelector("#adicionar-paciente");

botonAgregar.addEventListener("click", function (event) {
    event.preventDefault();
    var form = document.querySelector("#form-agregar");
    var paciente = capturarDatosPaciente(form);    
    var pacienteTr = construirTr(paciente);

    var errores = validarPaciente(paciente);

    if(errores.length > 0) {
        mostrarMensajesErrores(errores);
        return;
    }

    var ul = document.querySelector("#mensajes-errores");
    ul.innerHTML = "";
    adicionarPacienteEnLaTabla(paciente);
    form.reset();
});
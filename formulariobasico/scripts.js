document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.forms['formulario'];

    formulario.onsubmit = function (e) {
        e.preventDefault();

        let nombre = formulario.nombre.value;
        let contraseña = formulario.contraseña.value;
        let hombre = formulario.hombrecb.checked;
        let mujer = formulario.mujercb.checked;

        alert(
            "Nombre: " + nombre + "\n" +
            "Contraseña: " + contraseña + "\n" +
            "Hombre: " + (hombre ? "Sí" : "No") + "\n" +
            "Mujer: " + (mujer ? "Sí" : "No")
        );
    };
});

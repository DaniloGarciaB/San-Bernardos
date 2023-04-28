function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var direccion = document.getElementById('direccion').value;
    var telefono = document.getElementById('telefono').value;
    var correo = document.getElementById('correo').value;
    var ciudad = document.getElementById('ciudad').value;
    var edad = document.getElementById('edad').value;

    if (nombre == "" || direccion == "" || telefono == "" || correo == "" || ciudad == "" || edad == "") {
      alert("Debes llenar todos los campos...");
      return false;
    }
    return true;
  }
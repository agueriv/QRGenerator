function saveQR() {
  // Obtenemos el canvas
  var can = document.getElementsByTagName("canvas")[0];
  // Hacemos una variable para guardar el contexto
  var ctx = can.getContext("2d");
  // Vamos a guardar la imagen como png
  var imagen = can.toDataURL();
  // Creamos elemento link
  var link = document.createElement("a");
  // Lo redirigimos a la imagen
  link.href = imagen;
  // Establecemos un nombre por defecto
  if (document.getElementById("filename").value == "") {
    document.getElementById("filename").value = "QR";
  }
  // Establecemos que al download el archivo tenga el nombre introducido
  link.download = document.getElementById("filename").value + ".png";
  // Añadimos el link al body
  document.body.appendChild(link);
  // Hacemos click en el link
  link.click();
  // Borramos el elemento link
  document.body.removeChild(link);
}

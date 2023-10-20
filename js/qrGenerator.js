function generateQR() {
  // Primero hacemos un control donde si hay ya un QR mostrandose, este se elimina
  var contenedor = document.getElementById("qrcode");
  while (contenedor.hasChildNodes()) {
    contenedor.removeChild(contenedor.firstChild);
  }
  // Creamos el nuevo QR
  var qrcode = new QRCode(document.getElementById("qrcode"), {
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff00",
  });
  // Guardamos la dirección del QR
  var elText = document.getElementById("text");
  // Hacemos una comprobación: si el texto no esta vacío, se genera el QR y muestra. Si no se genera el QR.
  if (elText.value != "") {
    qrcode.makeCode(elText.value);
    document.getElementById("qrcode").style.display = "block";
    document.getElementById("filename").style.display = "block";
    document.getElementById("download-b").style.display = "block";
  } else {
    document.getElementById("qrcode").style.display = "none";
    document.getElementById("filename").style.display = "none";
    document.getElementById("download-b").style.display = "none";
  }
}

// Con esta función hacemos que se vuelva al estado inicial de la App
function reDo() {
  // Eliminamos los hijos del qr si los hay
  var contenedor = document.getElementById("qrcode");
  while (contenedor.hasChildNodes()) {
    contenedor.removeChild(contenedor.firstChild);
  }
  // Escondemos el qr y los botones de descargar
  document.getElementById("qrcode").style.display = "none";
  document.getElementById("filename").style.display = "none";
  document.getElementById("download-b").style.display = "none";
  // Seteamos el texto a vacío
  document.getElementById("text").value = "";
}

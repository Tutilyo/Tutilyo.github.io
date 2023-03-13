const botonInfo = document.getElementById("botonInfo");
const parrafoOculto = document.getElementById("parrafoOculto");
const textoBoton = document.getElementById("textoBoton");
const contenedorBoton = document.getElementById("botonInfo").parentNode;
contenedorBoton.classList.add("text-center");

botonInfo.addEventListener("click", function() {
  if (parrafoOculto.style.display === "none") {
    parrafoOculto.style.display = "block";
    textoBoton.innerHTML = "Ocultar";
  } else {
    parrafoOculto.style.display = "none";
    textoBoton.innerHTML = "Información Personal <p id='clickAqui'>click aquí</p>";
  }
});
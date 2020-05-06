let pantallas = ["menu", "add", "lista", "login"];
// Función que muestra una pantalla y oculta las demás
let mostrar = function (id) {
  //Abstracción
  // Buscar y mostrar el elemento deseado
  let aMostrar = document.querySelector("#" + id);
  aMostrar.style.display = "block";
  // Ocultar los demás elementos
  for (pantalla of pantallas) {
    if (pantalla !== id)
      document.querySelector("#" + pantalla).style.display = "none";
  }
  //   return
};

mostrar("login");
let prueba = function () {
  console.log("Boton clickeado!!!");
};

let botonesAdd = document.getElementsByClassName("irAAdd");
for (boton of botonesAdd) {
  // onclick necesita la referencia a una función, no
  // el resultado de evaluar una función
  // ARROW FUNCTIONS ()=>{aksj}, funciones anónimas
  boton.onclick = () => mostrar("add");
  // boton.onmouseover = () => mostrar("lista");
}

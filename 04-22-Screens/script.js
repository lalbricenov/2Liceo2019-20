let pantallas = ["menu", "add", "lista"];

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

mostrar("menu");

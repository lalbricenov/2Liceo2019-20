let pantallas = ["login", "menu", "add", "lista"];
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

let botonesAdd = document.getElementsByClassName("irAAdd");
for (boton of botonesAdd) {
  // onclick necesita la referencia a una función, no
  // el resultado de evaluar una función
  // ARROW FUNCTIONS ()=>{aksj}, funciones anónimas
  boton.onclick = () => mostrar("add");
  // boton.onmouseover = () => mostrar("lista");
}

let usuarios = [
  { nombre: "Luis", clave: "clave1234" },
  { nombre: "Juan", clave: "abcd.1234" },
  { nombre: "Maria", clave: "miClave" },
];
let USUARIO;
let iniciarSesion = function () {
  console.log("Intento de inicio de sesion");
  let nombreIntento = document.getElementById("nombre").value;
  let claveIntento = document.getElementById("password").value;
  console.log(nombreIntento);
  console.log(claveIntento);
  for (usuario of usuarios) {
    if (usuario.nombre == nombreIntento && usuario.clave == claveIntento) {
      //Inicio de sesion exitoso
      USUARIO = usuario.nombre;
      mostrar("menu");
      return false;
    }
  }
  // Si se llega a este punto, quiere decir que el inicio de sesion no fue exitoso
  alert("Nombre de usuario o contraseña equivocados");
  return false;
};
let formaInicioSesion = document.getElementById("formaInicioSesion");
formaInicioSesion.onsubmit = iniciarSesion;

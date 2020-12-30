/*
 Variables
*/
const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#lista-cursos");
const contendorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");

registrarListeners();

function registrarListeners() {
  // Cuando agregar un curso al carrito
  listaCursos.addEventListener("click", agregarCurso);
}

/*
 Funciones
*/

function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const curso = e.target.parentElement.parentElement;
    leerDatosCurso(curso);
  }
}

function leerDatosCurso(curso) {
  // se encargará de tomar los datos del curso
  console.log(curso);
  // Objeto del curso
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio .u-pull-right").textContent,
    // precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };
  console.log(infoCurso.id);
}

/*
 Variables
*/
const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#lista-cursos");
const contendorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
let articulosCarrito = [];

registrarListeners();

function registrarListeners() {
  // Cuando agregar un curso al carrito
  listaCursos.addEventListener("click", agregarCurso);
  // Elimina cursos del carrito
  carrito.addEventListener("click", eliminarCurso);
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
  // Objeto del curso
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio .u-pull-right").textContent,
    // precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };
  // Valida si el curso ya fue adicionado al carrito
  const existe = articulosCarrito.some((curso) => curso.id === infoCurso.id);
  if (existe) {
    // Actualiza cantidad del curso
    const cursos = articulosCarrito.map((curso) => {
      if (curso.id === infoCurso.id) {
        curso.cantidad++;
        return curso;
      } else {
        return curso;
      }
    });
    // Se agrega el curso al listado
    articulosCarrito = [...cursos];
  } else {
    // Se agrega el curso al listado
    articulosCarrito = [...articulosCarrito, infoCurso];
  }
  // Se pinta el curso agregado en el carrito
  mostrarCarritoHTML();
}

function limpiarHTML() {
  //contendorCarrito.innerHTML = "";
  while (contendorCarrito.firstChild) {
    contendorCarrito.removeChild(contendorCarrito.firstChild);
  }
}

function mostrarCarritoHTML() {
  // Limpiar el HTML
  limpiarHTML();
  // Recorre el carrito y genera el HTML
  articulosCarrito.forEach((curso) => {
    const { imagen, titulo, precio, cantidad, id } = curso;
    const row = document.createElement("tr");
    row.innerHTML = `
               <td>
                    <img src="${imagen}" style="width: 100px;">
               </td>
               <td>${titulo}</td>
               <td>${precio}</td>
               <td>${cantidad}</td>
               <td> <a hre="#" class="borrar-curso" data-id="${id}">X</a></td>
          `;
    // Agrega el row al contenedor
    contendorCarrito.appendChild(row);
  });
}

function eliminarCurso(e) {
  e.preventDefault();
  const id = e.target.getAttribute("data-id");
  articulosCarrito.forEach((curso, indice) => {
    if (curso.id === id) {
      if (curso.cantidad >= 2) {
        curso.cantidad--;
      } else {
        articulosCarrito.splice(indice, 1);
      }
    }
  });

  // Se pinta el curso agregado en el carrito
  mostrarCarritoHTML();
}

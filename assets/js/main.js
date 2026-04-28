
const menu = document.querySelector("#menu");
const abrir = document.querySelector("#abrir-menu");
const cerrar = document.querySelector("#cerrar-menu");

abrir.addEventListener("click", () => {
    menu.classList.add("visible");
})
cerrar.addEventListener("click", () => {
    menu.classList.remove("visible");
})
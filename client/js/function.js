// Obtener los elementos por su id
var menulateral = document.querySelector("#menulateral");
var userMenu = document.querySelector("#userMenu");

// Agregar evento de clic al elemento menulateral
menulateral.addEventListener("click", function() {
    // Cambiar la clase para mostrar el elemento userMenu
    userMenu.classList.remove("d-none");
    userMenu.classList.add("d-block");
    menulateral.classList.add("d-none");
    // Crear el elemento de botón
    const closeButton = document.createElement("button");
    closeButton.innerHTML = "❌";
    closeButton.classList.add("close");
    closeButton.classList.add("w-100")
  
    // Agregar el botón como hijo del elemento userMenu
    userMenu.insertBefore(closeButton, userMenu.firstChild);
});



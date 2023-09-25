const menulateral = document.querySelector("#menulateral");
const userMenu = document.querySelector("#userMenu");
const confgUserMenu = document.querySelector("#confgUserMenu");

menulateral.addEventListener("click", function() {
  userMenu.classList.remove("d-none");
  userMenu.classList.add("d-block");
  confgUserMenu.classList.remove("ps-5");
  confgUserMenu.classList.add("justify-content-end");
  menulateral.classList.add("d-none");

  const closeMenu = document.createElement("div");
  closeMenu.innerHTML = "❌";
  closeMenu.classList.add("close");
  closeMenu.setAttribute("type", "button");

  confgUserMenu.appendChild(closeMenu);

  closeMenu.addEventListener("click", function() {
    userMenu.classList.add("d-none");
    userMenu.classList.remove("d-block");
    confgUserMenu.classList.add("ps-5");
    confgUserMenu.classList.remove("justify-content-end");
    menulateral.classList.remove("d-none");

    confgUserMenu.removeChild(closeMenu);
  });
});


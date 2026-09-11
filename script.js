// ========================================
// NOVA AGENCY — JAVASCRIPT
// ========================================


// ----------------------------------------
// MENÚ MÓVIL
// ----------------------------------------

const menuButton = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");

if (menuButton && navLinks) {

  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");

    menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
    menuButton.setAttribute("aria-label", isOpen ? "Cerrar menú" : "Abrir menú");
  });

}


// ----------------------------------------
// CERRAR MENÚ AL PULSAR UN ENLACE
// ----------------------------------------

document.querySelectorAll(".nav-links a").forEach((link) => {

  link.addEventListener("click", () => {

    if (navLinks) {
      navLinks.classList.remove("open");
    }

    if (menuButton) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Abrir menú");
    }

  });

});


// ----------------------------------------
// AÑO AUTOMÁTICO DEL FOOTER
// ----------------------------------------

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// ----------------------------------------
// FORMULARIO DE CONTACTO
// ----------------------------------------

const contactForm = document.getElementById("contactForm");

if (contactForm) {

  contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const formData = new FormData(contactForm);

    const nombre = formData.get("nombre");
    const email = formData.get("email");
    const mensaje = formData.get("mensaje");

    const agenciaEmail = "hola@nova-agency.com";

    const asunto = encodeURIComponent("Nuevo contacto desde la página web");

    const cuerpo = encodeURIComponent(
      `Hola NOVA,\n\nNombre: ${nombre}\nEmail: ${email}\n\nMensaje:\n${mensaje}\n\nEnviado desde la página web.`
    );

    window.location.href = `mailto:${agenciaEmail}?subject=${asunto}&body=${cuerpo}`;

  });

}


// ----------------------------------------
// ESTADO DEL HEADER AL HACER SCROLL
// ----------------------------------------

const header = document.querySelector("header");

const updateHeaderState = () => {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 40);
};

window.addEventListener("scroll", updateHeaderState);
updateHeaderState();


// ----------------------------------------
// EVITAR EL SALTO VISUAL AL CARGAR
// ----------------------------------------

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

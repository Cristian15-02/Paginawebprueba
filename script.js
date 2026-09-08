```javascript
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

    menuButton.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );

    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Cerrar menú" : "Abrir menú"
    );
  });

}


// ----------------------------------------
// CERRAR MENÚ AL PULSAR UN ENLACE
// ----------------------------------------

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {

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

    // Cambia este correo por el correo real de tu agencia
    const agenciaEmail = "hola@nova-agency.com";

    const asunto = encodeURIComponent(
      "Nuevo contacto desde la página web"
    );

    const cuerpo = encodeURIComponent(
      `Hola NOVA Agency,

Nombre: ${nombre}
Email: ${email}

Mensaje:
${mensaje}

Enviado desde la página web.`
    );

    // Abre el programa de correo del visitante
    window.location.href =
      `mailto:${agenciaEmail}?subject=${asunto}&body=${cuerpo}`;

  });

}


// ----------------------------------------
// ANIMACIONES AL HACER SCROLL
// ----------------------------------------

const animatedElements = document.querySelectorAll(
  ".service, .project, .stat"
);

const observerOptions = {
  threshold: 0.12
};

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";

        observer.unobserve(entry.target);

      }

    });

  },
  observerOptions
);


// Preparar elementos para la animación

animatedElements.forEach((element) => {

  element.style.opacity = "0";
  element.style.transform = "translateY(25px)";
  element.style.transition =
    "opacity .6s ease, transform .6s ease";

  observer.observe(element);

});


// ----------------------------------------
// CAMBIAR ESTADO DEL HEADER AL HACER SCROLL
// ----------------------------------------

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

  if (!header) return;

  if (window.scrollY > 50) {

    header.style.background =
      "rgba(10, 10, 10, 0.96)";

  } else {

    header.style.background =
      "rgba(10, 10, 10, 0.88)";

  }

});


// ----------------------------------------
// EVITAR EL SALTO VISUAL AL CARGAR
// ----------------------------------------

window.addEventListener("load", () => {

  document.body.classList.add("loaded");

});
```

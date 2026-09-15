document.addEventListener('DOMContentLoaded', function () {

	/* -------------------------------------------------
	   Menú móvil
	------------------------------------------------- */
	var header = document.querySelector('.site-header');
	var navToggle = document.getElementById('nav-toggle');
	var mainNav = document.getElementById('main-nav');

	if (navToggle) {
		navToggle.addEventListener('click', function () {
			var isOpen = header.classList.toggle('nav-open');
			navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
		});

		mainNav.querySelectorAll('a').forEach(function (link) {
			link.addEventListener('click', function () {
				header.classList.remove('nav-open');
				navToggle.setAttribute('aria-expanded', 'false');
			});
		});
	}

	/* -------------------------------------------------
	   Acordeón de preguntas frecuentes
	------------------------------------------------- */
	document.querySelectorAll('.faq-item').forEach(function (item) {
		var question = item.querySelector('.faq-question');

		question.addEventListener('click', function () {
			var isOpen = item.classList.contains('open');

			item.classList.toggle('open', !isOpen);
			question.setAttribute('aria-expanded', String(!isOpen));
		});
	});

	/* -------------------------------------------------
	   Contador de caracteres del mensaje
	------------------------------------------------- */
	var mensaje = document.getElementById('mensaje');
	var charCount = document.getElementById('char-count');

	if (mensaje && charCount) {
		var updateCount = function () {
			charCount.textContent = mensaje.value.length + ' / ' + mensaje.maxLength;
		};
		mensaje.addEventListener('input', updateCount);
		updateCount();
	}

	/* -------------------------------------------------
	   Validación y envío del formulario de contacto
	------------------------------------------------- */
	var form = document.getElementById('contact-form');
	var status = document.getElementById('form-status');

	function setFieldError(field, hasError) {
		var wrapper = field.closest('.field');
		if (wrapper) wrapper.classList.toggle('has-error', hasError);
	}

	function validate() {
		var nombre = document.getElementById('nombre');
		var email = document.getElementById('email');
		var mensajeField = document.getElementById('mensaje');
		var valid = true;

		var nombreOk = nombre.value.trim().length > 1;
		setFieldError(nombre, !nombreOk);
		valid = valid && nombreOk;

		var emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
		setFieldError(email, !emailOk);
		valid = valid && emailOk;

		var mensajeOk = mensajeField.value.trim().length >= 20;
		setFieldError(mensajeField, !mensajeOk);
		valid = valid && mensajeOk;

		return valid;
	}

	if (form) {
		form.addEventListener('submit', function (e) {
			e.preventDefault();

			if (!validate()) {
				status.textContent = 'Revisa los campos marcados antes de enviar el formulario.';
				status.classList.remove('success');
				return;
			}

			var submitBtn = form.querySelector('button[type="submit"]');
			var originalLabel = submitBtn.textContent;

			submitBtn.disabled = true;
			submitBtn.textContent = 'Enviando…';
			status.textContent = '';

			// Simulación de envío: aquí es donde conectarías con tu backend
			// o servicio de formularios real (fetch a tu API, Formspree, etc.)
			setTimeout(function () {
				var rol = form.querySelector('input[name="rol"]:checked').value;
				var nombre = document.getElementById('nombre').value.trim();

				status.textContent = '¡Gracias, ' + nombre + '! Hemos recibido tu mensaje como '
					+ (rol === 'marca' ? 'marca/agencia' : 'creador/a') + ' y te contestaremos en menos de 48 horas.';
				status.classList.add('success');

				form.reset();
				updateCount && updateCount();
				submitBtn.disabled = false;
				submitBtn.textContent = originalLabel;
			}, 900);
		});
	}

});

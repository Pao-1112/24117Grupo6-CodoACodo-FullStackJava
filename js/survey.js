const forms = document.getElementById('forms');
const inputs = document.querySelectorAll('#forms input');
const textareas = document.querySelectorAll('#forms textarea');

const expressions = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/, // 7 a 14 numeros.
    message: /^[a-zA-Z0-9_.,+-À-ÿ\s]{1,300}$/
}

const fields = {
	name: false,
	email: false,
	phone: false,
    message: false
}

const validateForm = (e) => {
	switch (e.target.name) {
		case "name":
			validateField(expressions.name, e.target, 'name');
		break;
		case "email":
			validateField(expressions.email, e.target, 'email');
		break;
		case "phone":
			validateField(expressions.phone, e.target, 'phone');
		break;
        case "message":
			validateTextarea(expressions.message, e.target, 'message');
		break;
	}
}

const validateField = (expression, input, field) => {
	if(expression.test(input.value)){
		document.getElementById(`group__${field}`).classList.remove('forms__group-incorrect');
		document.getElementById(`group__${field}`).classList.add('forms__group-correct');
		document.querySelector(`#group__${field} i`).classList.add('fa-check-circle');
		document.querySelector(`#group__${field} i`).classList.remove('fa-times-circle');
		document.querySelector(`#group__${field} .forms__input-error`).classList.remove('forms__input-error-asset');
		fields[field] = true;
	} else {
		document.getElementById(`group__${field}`).classList.add('forms__group-incorrect');
		document.getElementById(`group__${field}`).classList.remove('forms__group-correct');
		document.querySelector(`#group__${field} i`).classList.add('fa-times-circle');
		document.querySelector(`#group__${field} i`).classList.remove('fa-check-circle');
		document.querySelector(`#group__${field} .forms__input-error`).classList.add('forms__input-error-asset');
		fields[field] = false;
	}
}
const validateTextarea = (expression, textarea, field) => {
	if(expression.test(textarea.value)){
		document.getElementById(`group__${field}`).classList.remove('forms__group-incorrect');
		document.getElementById(`group__${field}`).classList.add('forms__group-correct');
		document.querySelector(`#group__${field} i`).classList.add('fa-check-circle');
		document.querySelector(`#group__${field} i`).classList.remove('fa-times-circle');
		document.querySelector(`#group__${field} .forms__input-error`).classList.remove('forms__input-error-asset');
		fields[field] = true;
	} else {
		document.getElementById(`group__${field}`).classList.add('forms__group-incorrect');
		document.getElementById(`group__${field}`).classList.remove('forms__group-correct');
		document.querySelector(`#group__${field} i`).classList.add('fa-times-circle');
		document.querySelector(`#group__${field} i`).classList.remove('fa-check-circle');
		document.querySelector(`#group__${field} .forms__input-error`).classList.add('forms__input-error-asset');
		fields[field] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validateForm);
	input.addEventListener('blur', validateForm);
});
textareas.forEach((textarea) => {
	textarea.addEventListener('keyup', validateForm);
	textarea.addEventListener('blur', validateForm);
});

forms.addEventListener('submit', (e) => {
	e.preventDefault();

	if(fields.name && fields.email && fields.phone && fields.message){
		forms.reset();
        document.getElementById('forms__message').classList.remove('forms__message-asset');
		document.getElementById('forms__message-success').classList.add('forms__message-success-asset');
		setTimeout(() => {
			document.getElementById('forms__message-success').classList.remove('forms__message-success-asset');
		}, 5000);

		document.querySelectorAll('.forms__group-correct').forEach((icono) => {
			icono.classList.remove('forms__group-correct');
		});
	} else {
		document.getElementById('forms__message').classList.add('forms__message-asset');
	}
});
const forms = document.getElementById('forms');
const inputs = document.querySelectorAll('#forms input');

const expressions = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	surname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	DNI: /^\d{7,8}$/,
	user:/^[a-zA-Z0-9\_\-]{4,16}$/,
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	phone: /^\d{7,14}$/, // 7 a 14 numeros.
    password: /^.{4,12}$/
}

const fields = {
	name: false,
	surname: false,
	DNI: false,
	user: false,
	email: false,
	phone: false,
    password: false
}

const validateForm = (e) => {
	switch (e.target.name) {
		case "name":
			validateField(expressions.name, e.target, 'name');
			let name1=localStorage.setItem(expressions.name);
		break;
		case "surname":
			validateField(expressions.surname, e.target, 'surname');
			let surname1=localStorage.setItem(expressions.surname);
		break;
		case "DNI":
			validateField(expressions.phone, e.target, 'DNI');
		break;
		case "user":
			validateField(expressions.user, e.target, 'user');
			let user1=localStorage.setItem(expressions.user);
		break;
		case "email":
			validateField(expressions.email, e.target, 'email');
		break;
		case "phone":
			validateField(expressions.phone, e.target, 'phone');
		break;
        case "password":
			validateField(expressions.password, e.target, 'password');
			let password1=localStorage.setItem(expressions.password);
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

inputs.forEach((input) => {
	input.addEventListener('keyup', validateForm);
	input.addEventListener('blur', validateForm);
});

forms.addEventListener('submit', (e) => {
	e.preventDefault();

	if(fields.name && fields.surname && fields.DNI && fields.user && fields.email && fields.phone && fields.password){
        
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
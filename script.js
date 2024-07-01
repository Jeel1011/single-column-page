const email = document.getElementById("email");
const Submit = document.getElementById("btn");

const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validateEmail(input) {
	const formInput = input.parentElement;
	const errorMessage = formInput.querySelector(".error-text");

	if (input.value === "" || input.value === undefined) {
		formInput.classList.add("error");
		errorMessage.textContent = "Provide your email address";
		errorMessage.style.display = "block";
	} else if (!input.value.match(pattern)) {
		formInput.classList.add("error");
		errorMessage.textContent = "Please provide a valid email address";
		errorMessage.style.display = "block";
	} else {
		formInput.classList.remove("error");
		errorMessage.style.display = "none";
	}
}
Submit.addEventListener("click", (e) => {
	e.preventDefault();
	validateEmail(email);
});
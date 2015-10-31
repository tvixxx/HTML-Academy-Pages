// Our variables in ours document and search their
var linkLogin = document.querySelector(".login");
var popupLogin = document.querySelector(".modal-content");
var closeLogin = popupLogin.querySelector(".modal-content-close");
var formLogin = popupLogin.querySelector("form");
var login = popupLogin.querySelector("[name=login]");
var password = popupLogin.querySelector("[name=password");
var storage = localStorage.getItem("login");



// Open the popup modal-window, focus on input login, condition (password.focus)

linkLogin.addEventListener("click" , function (event) {
	event.preventDefault();
	popupLogin.classList.add("modal-content-show");
	login.focus();

	if (storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	}
});

// Close the active popup modal-window by click at the cross

closeLogin.addEventListener("click", function(event){
	event.preventDefault();
	popupLogin.classList.remove("modal-content-show");
});

// Checking our login and(or) password in our form (ifTrue), and setItem login.value

formLogin.addEventListener("submit", function (event){
	if (!(login.value && password.value)){
		event.preventDefault();
		popupLogin.classList.add("modal-error");
	} else {
		localStorage.setItem("login", login.value);
	}
});

// Esc (exit) from open popup modal-window login-form

window.addEventListener("keydown", function(event){
	if (event.keyCode == 27) {
		if (popupLogin.classList.contains("modal-content-show")) {
			popupLogin.classList.remove("modal-content-show");
		}
	}
});

		

		

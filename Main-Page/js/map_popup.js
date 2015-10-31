
// Our variables in ours document and search their
var openMap = document.querySelector(".map-open");
var popupMap = document.querySelector(".modal-content-map");
var closeMap = popupMap.querySelector(".modal-content-close");

openMap.addEventListener("click", function (event){
	event.preventDefault();
	popupMap.classList.add("modal-content-show");

});

closeMap.addEventListener("click", function (event){
	event.preventDefault();
	popupMap.classList.remove("modal-content-show");
});

window.addEventListener("keydown", function(event){
	if (event.keyCode == 27) {
		if (popupMap.classList.contains("modal-content-show")) {
			popupMap.classList.remove("modal-content-show");
		}
	}
});

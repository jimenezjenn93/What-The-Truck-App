let menu = document.querySelector("#menu-bar")
let navbar = document.querySelector(".navbar")

menu.onlicks = () => {
	menu.classList.toggle("fa-times")
	menu.classList.toggle("active")
}

window.onscroll = () => {
	menu.classList.remove("fa-times")
	menu.classList.remove("active")
}
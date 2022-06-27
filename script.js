const submit = document.querySelector("button")
let ratings = document.querySelectorAll(".rate")
const main = document.querySelector(".main")
const thanks = document.querySelector(".thanks")
const list = document.querySelector("ul")
let span = document.querySelector("span")

ratings.forEach(function(rating){
	rating.addEventListener("click", function(){
	
		ratings.forEach(function(rem){
			if (rem.classList.contains("active")) {
				rem.classList.remove("active")
			}
		})
		rating.classList.add("active")
	})
})

submit.addEventListener("click", function(e){
	e.preventDefault()
	let active = document.querySelector(".active")
	//console.log(active.innerText)
	main.style.display = "none"
	thanks.style.display = "block"
	span.innerText = active.innerText
})

const image1 = (key) => {
	if (key === "search") {
		key = document.querySelector("#query").value
	}

	fetch("http://www.splashbase.co/api/v1/images/search?query=" + key, {
		method: "GET",
	})
		.then((response) => response.json())
		.then((body) => {
			let images = body.images
			if (images.length < 9) {
				alert("not enough results")
				return
			}
			console.log(images)
			document.querySelectorAll("#deck .card-img-top").forEach((element, i) => {
				let newimg = document.createElement("img")
				newimg.src = images[i].url
				newimg.classList.add("card-img-top", "ours")
				element.parentNode.replaceChild(newimg, element)
				console.log(newimg.parentElement.querySelector("small").innerText)
				newimg.parentElement.querySelector("small").innerText = images[i].id
			})
		})
}

window.onload = () => {
	makeModals()
}

const makeModals = () => {
	document.querySelectorAll("#deck .btn-group").forEach((element, index) => {
		element.lastElementChild.innerHTML = "Hide"
		element.lastElementChild.addEventListener("click", hide)
	})
}

const hide = (event) => {
	event.target.parentElement.parentElement.parentElement.parentElement.classList.add(
		"d-none"
	)
}

const viewclick = (index) => {
	document.querySelector("#modalImage").src = document.querySelectorAll(
		"#deck .card-img-top"
	)[index].src
	console.log(document.querySelectorAll("#deck .card-img-top")[index].src)
	document.querySelector("#modalImage").style = "width:250px"
}

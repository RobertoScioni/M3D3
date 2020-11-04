const image1 = (key) => {
	fetch("http://www.splashbase.co/api/v1/images/search?query=" + key, {
		method: "GET",
	})
		.then((response) => response.json())
		.then((body) => {
			let images = body.images
			let i = 0
			console.log(images)
			document.querySelectorAll("#deck .card-img-top").forEach((element) => {
				let newimg = document.createElement("img")
				newimg.src = body.images[i].url
				newimg.classList.add("card-img-top", "ours")
				element.parentNode.replaceChild(newimg, element)
				i++
			})
		})
}

window.onload = () => {
	makeModals()
}

const makeModals = () => {
	document.querySelectorAll("#deck .btn-grp").forEach((element) => {
		element.firstChild.setAttribute("data-toggle", "modal")
		element.firstChild.setAttribute("data-target", "#exampleModal")
	})
}

const viewclick = (Event) => {
	console.log(Event.target)
	console.log(Event)
}

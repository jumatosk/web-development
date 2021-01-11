function button() {
	document.getElementById('clickedButton').innerHTML = 'você clicou!';
}

function redirect() {
	window.open('https://google.com');
}

function mousePassed(element) {
	element.innerHTML = "O mouse passou!"
}

function mouseOuted(element) {
    element.innerHTML = "Passe o mouse aqui!"
}

function changedValue(element) {
    console.log(element.value)
}

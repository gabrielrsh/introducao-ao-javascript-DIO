function changeColor(el) {
	el.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255}`;
}

export { changeColor };
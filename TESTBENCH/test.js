let i = 0;
function changeBackground() {
	let colors = ["red", "yellow", "blue", "green"];
	document.body.style.background = colors[i];
	i = (i + 1) % colors.length;
}
// setInterval(changeBackground, 1000);
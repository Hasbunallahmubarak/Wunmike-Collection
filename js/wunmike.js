function openNav() {
	document.getElementById('Nav').style.display="block";
	document.getElementById('Nav').style.width="250px";
}
function closenNav() {
	document.getElementById('Nav').style.display="none";
	document.getElementById('Nav').style.width="0px";
}
var Nav = document.getElementById('Nav');
window.onclick = function (event) {
	if (event.target === Nav) {Nav.style.display="none";}
}
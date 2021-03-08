function calcTip() {
	var v1 = document.getElementById("subTotal").value;
	var v2 = document.getElementById("tip").value;
	var o = (1 + parseInt(v2) / 100) * parseInt(v1);
	document.getElementById("output").innerHTML= o;
}
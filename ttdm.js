function ttdmTfClicked(myId) {
	var rtn = document.getElementById(myId).value;
	alert(rtn + " has been clicked")
}
var myId = "profile-daily-clicked";
document.getElementById(myId).addEventListener("click", ttdmTfClicked(myId));

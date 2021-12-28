function ttdmGetJson(myTarg, myId) {
	//myTarg.innerHtml = "You clicked " + myId;
    console.log("You clicked" + myId);
	/*var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var myObj = JSON.parse(this.responseText);
                document.getElementById(prlId).innerHTML = myObj.data.name;
            }
    };
    xmlhttp.open("GET", "data.json", true);
    xmlhttp.send();*/
}

function ttdmTfClicked() {
	var prl = document.getElementsByClassName("fb-profile-intervals")[0].getElementsByTagName("input");
	for(let i = 0; i <= prl.length; i++) {
		//prl[i].addEventListener("click", ttdmGetJson( prl[i], prl[i].id ));
        prl[i].addEventListener("click", function() {alert("You clicked " + prl[i].id)});
	}
}

ttdmTfClicked();
function ttdmGetJson() {
    var thisId = this.id;
    $.getJSON('data.json', function(data) {
        //do stuff with your data here
        //document.getElementById(thisId).innerHTML = data.name;
    });
	//myTarg.innerHtml = "You clicked " + myId;
    //alert("You clicked " + thisId);
	/*var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var myObj = JSON.parse(this.responseText);
                document.getElementById(thisId).innerHTML = myObj.data.name;
            }
    };
    xmlhttp.open("POST", "data.json", true);
    xmlhttp.send();*/
}

function ttdmTfClicked() {
	document.getElementsByClassName("fb-profile-intervals")[0].querySelectorAll("input")
    .forEach(item => item.addEventListener("click", ttdmGetJson));
    //.forEach(item => item.addEventListener("click", function() {alert("You clicked " + item.id)} ));
    /*for(let i = 0; i <= prl.length; i++) {
		//prl[i].addEventListener("click", ttdmGetJson( prl[i], prl[i].id ));
        prl[i].addEventListener("click", function() {alert("You clicked " + prl[i].id)});
	}*/
}

ttdmTfClicked();
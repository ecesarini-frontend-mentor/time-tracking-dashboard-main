function ttdmGetButtonName() {
    var buttons = document.getElementsByTagName("button");
    for (var i = 0; i <= buttons.length; i += 1) {
        buttons[i].onclick = function() {
           return this.getElementsByName[0];
        }; 
}

function ttdmShowTimeframes(ttdmGetButtonNameCallback) {
    var buttonName = ttdmGetButtonNameCallback();
    switch(buttonName) {
        case "daily": {
            var buttonActionClass = document.getElementsByClassName("get-action-title");
            for (let i = 0; i <= buttonActionClass.length; i++) {
                var xmlhttp = new XMLHttpRequest();
                xmlhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var myObj = JSON.parse(this.responseText);
                    document.getElementById(buttonName).innerHTML = myObj.data.name;
                }
            }
            }   
        }
    };
    xmlhttp.open("GET", "data.json", true);
    xmlhttp.send();
    }
}
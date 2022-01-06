function ttdmDailyAction() {
    $.getJSON('data.json', function(data) {
    var actionClass = document.getElementsByClassName("fb-action-timeframes");
        for(let i = 0; i < actionClass.length; i++) {
            let actionFields = actionClass[i].getElementsByTagName("li");
            actionFields[0].getElementsByTagName("span")[0].innerText = data[i].title;
            actionFields[1].innerText = data[i].timeframes.daily.current + "hrs";
            actionFields[2].innerText = "Yesterday - " + data[i].timeframes.daily.previous + "hrs";
        }
    });
}

function ttdmUpdateAction() {
    var actionType = this.id;
    $.getJSON('data.json', function(data){
    var actionClass = document.getElementsByClassName("fb-action-timeframes");
        for(let i = 0; i < actionClass.length; i++) {
            let actionFields = actionClass[i].getElementsByTagName("li");
            actionFields[0].getElementsByTagName("span")[0].innerText = data[i].title;
            switch (actionType) {
                case "profile-daily-clicked":
                    actionFields[1].innerText = data[i].timeframes.daily.current + "hrs";
                    actionFields[2].innerText = "Yesterday - " + data[i].timeframes.daily.previous + "hrs";
                    break;
                case "profile-weekly-clicked":
                    actionFields[1].innerText = data[i].timeframes.weekly.current + "hrs";
                    actionFields[2].innerText = "Last Week - " + data[i].timeframes.weekly.previous + "hrs";
                    break;
                case "profile-monthly-clicked":
                    actionFields[1].innerText = data[i].timeframes.monthly.current + "hrs";
                    actionFields[2].innerText = "Last Month - " + data[i].timeframes.monthly.previous + "hrs";
                    break;
            }
        }        
    });
}

function ttdmTfClicked() {
    //var isClicked = true;
	document.getElementsByClassName("fb-profile-intervals")[0].querySelectorAll("input").forEach(item => item.addEventListener("click", ttdmUpdateAction, true));
}

ttdmDailyAction();
ttdmTfClicked();
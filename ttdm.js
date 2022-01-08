function ttdmDailyAction() {
    $.getJSON('data.json', function(data) {
    var actionClass = document.getElementsByClassName("fb-action-timeframes");
        for(let i = 0; i < actionClass.length; i++) {
            let actionFields = actionClass[i].getElementsByTagName("li");
            actionFields[0].getElementsByClassName("action-title")[0].innerText = data[i].title;
            actionFields[1].innerText = data[i].timeframes.daily.current + "hrs";
            actionFields[2].innerText = "Yesterday - " + data[i].timeframes.daily.previous + "hrs";
        }
    });
}

function ttdmGlobalUpdateAction() {
    var actionType = this.id;
    $.getJSON('data.json', function(data) {
    var actionClass = document.getElementsByClassName("fb-action-timeframes");
        for(let i = 0; i < actionClass.length; i++) {
            let actionFields = actionClass[i].getElementsByTagName("li");
            actionFields[0].getElementsByClassName("action-title")[0].innerText = data[i].title;
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

function ttdmGridItemUpdateAction() {
    // this.id e richiami classe
    var actionTypeId = this.closest(".grid-element-action").id;
    var timeFrame = this.innerText.toLowerCase();
    var gridItemUpdate = document.getElementById(actionTypeId).getElementsByClassName("fb-action-timeframes")[0]
        .getElementsByTagName("li");
    var i = []
    $.getJSON('data.json', function(data) {
        switch (timeFrame) {
            case "daily":
                gridItemUpdate[1].innerText = data[i].timeframes.daily.current + "hrs";
                gridItemUpdate[2].innerText = "Yesterday - " + data[i].timeframes.daily.previous + "hrs";
                break;
            case "weekly":
                gridItemUpdate[1].innerText = data[i].timeframes.weekly.current + "hrs";
                gridItemUpdate[2].innerText = "Last Week - " + data[i].timeframes.weekly.previous + "hrs";
                break;
            case "monthly":
                gridItemUpdate[1].innerText = data[i].timeframes.monthly.current + "hrs";
                gridItemUpdate[2].innerText = "Last Month - " + data[i].timeframes.monthly.previous + "hrs";
                break;            
        }
    });
}

function ttdmTfClicked() {
	document.getElementsByClassName("fb-profile-intervals")[0].querySelectorAll("input").forEach(item => item.addEventListener("click", ttdmGlobalUpdateAction, true));
    var actionDropdownClasses = document.getElementsByClassName("action-dropdown-content");
    for(var i = 0; i < actionDropdownClasses.length; i ++) {
        actionDropdownClasses[i].querySelectorAll("button").forEach(item => item.addEventListener("click", ttdmGridItemUpdateAction));
    }
}

ttdmDailyAction();
ttdmTfClicked();
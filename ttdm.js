function ttdmGetJson(callback) {
    $.getJSON('data.json', function(data) {
        return callback(data['return']);
    });
}

$(function ttdmDailyAction() {
    //$.getJSON('data.json', function(data) {
    var actionClass = document.getElementsByClassName("fb-action");
    const ttdmJson = ttdmGetJson(data);
        for(let i = 0; i <= actionClass.length; i++) {
            let actionFields = actionClass[i].childNodes;
            actionFields[0].innerHtml = data[i].title;
            actionFields[1].innerHtml = data[i].timeframes.daily.current + "hrs";
            actionFields[2].innerHtml = "Yesterday - " + data[i].timeframes.daily.previous;
        }
    //});
});

function ttdmUpdateAction() {
    const ttdmJson = ttdmGetJson();
}

function ttdmTfClicked() {
	document.getElementsByClassName("fb-profile-intervals")[0].querySelectorAll("input")
    .forEach(item => item.addEventListener("click", ttdmUpdateAction));
}

ttdmDailyAction();
//ttdmTfClicked();
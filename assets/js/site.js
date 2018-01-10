var overRideTime = "";
var overRideAnnoucement = "";

window.onload = function() {
    if (overRideTime == "") {
        document.getElementById("meeting-date").innerHTML = getNextDayOfWeek(new Date(), 3);
    }
    else {
        document.getElementById("meeting-date").innerHTML = overRideTime;
    }

    if (overRideAnnoucement !== "") {
        document.getElementById("announced").innerHTML = overRideAnnoucement;
    }
}

function getNextDayOfWeek(date, dayOfWeek) {
    // Code to check that date and dayOfWeek are valid left as an exercise ;)
    var resultDate = new Date(date.getTime());
    resultDate.setDate(date.getDate() + (7 + dayOfWeek - date.getDay()) % 7);
    return resultDate.toDateString();
}


(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10&appId=535422936849147";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

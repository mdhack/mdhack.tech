var overRideTime = "";
var overRideAnnoucement = "Hope you had a great winter break! Your projects are due at the next meeting. Bring something that you are proud of!";

window.onload = function() {
    if (overRideTime == ""){
        document.getElementById("meeting-date").innerHTML = getNextDayOfWeek(new Date(), 3);
    } else {
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
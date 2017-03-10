
var timeAPI = "https://api.mocogeeks.com/apis/meetTime.json";

var hackerAPI = "https://api.mocogeeks.com/apis/hackerCount.json";

$(document).ready(function () {
  $('.tooltipped').tooltip({ delay: 50 });
  $(".button-collapse").sideNav();
  hackApi(timeAPI, function (error, data) {
    if (error) {
      document.getElementById("api-fetch").innerHTML = "Failed to fetch next meeting data.";
      console.log('Error found while trying to fetch HackAPI.', error);
    } else {
      if (Object.keys(data.beta).length != 0) {
        document.getElementById("api-time-beta").innerHTML = data.beta.time;
        document.getElementById("api-date-beta").innerHTML = data.beta.date;
        document.getElementById("api-loc-beta").innerHTML = data.beta.location;
        document.getElementById("api-des-beta").innerHTML = data.beta.detail;
      }
      else {
        document.getElementById("api-fetch-beta").innerHTML = "No meeting coming up for Beta Program!"
      }
      if (Object.keys(data.wootton).length != 0) {
        document.getElementById("api-time-wootton").innerHTML = data.wootton.time;
        document.getElementById("api-date-wootton").innerHTML = data.wootton.date;
        document.getElementById("api-loc-wootton").innerHTML = data.wootton.location;
        document.getElementById("api-des-wootton").innerHTML = data.wootton.detail;
      }
      else {
        document.getElementById("api-fetch-wootton").innerHTML = "No meeting coming up for Wootton!"
      }
      if (Object.keys(data.blair).length != 0) {
        document.getElementById("api-time-blair").innerHTML = data.blair.time;
        document.getElementById("api-date-blair").innerHTML = data.blair.date;
        document.getElementById("api-loc-blair").innerHTML = data.blair.location;
        document.getElementById("api-des-blair").innerHTML = data.blair.detail;
      }
      else {
        document.getElementById("api-fetch-blair").innerHTML = "No meeting coming up for Blair!"
      }
      document.getElementById("api-fetch-beta").style.display = "";
      document.getElementById("api-fetch-wootton").style.display = "";
      document.getElementById("api-fetch-blair").style.display = "";
    }
  });
  hackApi(hackerAPI, function (error, data) {
    if (error) {
      document.getElementById("api-fetch-hackerCount").innerHTML = "?";
      document.getElementById("api-fetch-hackerDes").innerHTML = "Mmm... There's gotta be something wrong with our data... Wanna help fixing it?";

      console.log('Error found while trying to fetch HackAPI.', error);
    } else {
      var hackerTotal = data.wootton.officer + data.wootton.hacker + data.blair.officer + data.blair.hacker;
      document.getElementById("api-fetch-hackerCount").innerHTML = hackerTotal;

    }
    document.getElementById("api-fetch-hacker").style.display = "";
  });
});


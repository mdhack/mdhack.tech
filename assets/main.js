
var timeAPI = "https://api.mocogeeks.com/apis/meetTime.json";

var hlAPI = "https://api.mocogeeks.com/apis/hackerList.json";

var hackList = "";

$(document).ready(function () {
  $('select').material_select();
  $('.tooltipped').tooltip({ delay: 50 });
  $(".button-collapse").sideNav();
  $('ul.tabs').tabs();
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

  hackApi(hlAPI, function (error, data) {
    if (error) {
      document.getElementById("api-fetch-hackerCount").innerHTML = "?";
      document.getElementById("api-fetch-hackerDes").innerHTML = "Mmm... There's gotta be something wrong with our data... Wanna help fixing it?";

      console.log('Error found while trying to fetch HackAPI.', error);
    } else {
      hacklist = data;

      var count_wootton_hacker = Object.keys(data.wootton.hacker).length;
      var count_wootton_officer = Object.keys(data.wootton.officer).length;

      var count_blair_hacker = Object.keys(data.blair.hacker).length;
      var count_blair_officer = Object.keys(data.blair.officer).length;

      document.getElementById("api-fetch-hackerCount").innerHTML = count_wootton_hacker + count_wootton_officer + count_blair_hacker + count_blair_officer;

    }
    document.getElementById("api-fetch-hacker").style.display = "";
  });
});


console.log('%cHEY PEOPLE ', 'color: #ff0000');
console.log('%cIF YOU ARE READING THIS... ', 'color: #ff7F00');
console.log('%cYOU ARE DEFINITELY ENCOURAGED TO JOIN HACK CLUB ', 'color: #ffBB11');
console.log('%cYOU MAY WANT TO SAY... WHY? I JUST CLICKED IN BY ACCIDENT ', 'color: #55AA00');
console.log('%cNO. IT\'S THE CURIOSITY URGING YOU TO CLICK THAT BUTTON', 'color: #4B0082');
console.log('%cTHAT\'S WHAT WE\'RE LOOKING FOR ', 'color: #8F00FF');
console.log('');
console.log('%cYOUR CHOICE :-) ', 'color: #000000');
console.log('%cTO JOIN: Call function \"join()\"', 'color: #000000');
console.log('%cTO GIVE UP: Simply close this panel', 'color: #000000');

function join() {
  console.clear();
  console.log('%cYAAAAAAYYYYYYYYYY! ', 'color: #ff0000');
  console.log('%cYou are special. Don\'t use the application form - that\'s for noobs.  ', 'color: #ff0000');
  console.log('%cI mean... You probably can, here\'s the link: https://mocogeeks.com/apply.html', 'color: #ff0000');
  console.log('%cBut to make yourself special, send an email directly to jiang@mingjie.info', 'color: #8F00FF');
  console.log('%cWith the subject \"Mr. Rainbow\" and attach your information/resume', 'color: #8F00FF');
  console.log('')
  console.log('%cLOOKING FORWARD TO UR EMAIL!', 'color: #8F00FF');
  console.log('Written by Mingjie, Hack Club MD President');
}

var elem = document.querySelector("#submit-lookup");

elem.addEventListener("click", function onclick(event) {
  lookup_init()
});

function lookup_init() {
  var fn = document.getElementById('first_name').value;
  var ln = document.getElementById('last_name').value;
  var br = document.getElementById('branch').value;
  var pos = document.getElementById('position').value;

  hackApi(hlAPI, function (error, data) {
    if (error) {
      document.getElementById('retrieved').value = "Does Not Exist";
    } else {
      document.getElementById('retrieved').value = data[br][pos][fn][ln].email;
      document.getElementById('json-string').innerHTML = JSON.stringify(data[br][pos][fn][ln]);

      if (data.wootton.officer[fn][ln].sex == 0)
        document.querySelector("#submit-lookup").innerHTML = "Email Him<i class=\"material-icons right\">email</i>"
      else if (data.wootton.officer[fn][ln].sex == 1)
        document.querySelector("#submit-lookup").innerHTML = "Email Her<i class=\"material-icons right\">email</i>"
      else
        document.querySelector("#submit-lookup").innerHTML = "Email<i class=\"material-icons right\">email</i>"
        document.querySelector("#submit-lookup").addEventListener("click", function onclick(event) {
          window.location = "mailto:" + data.wootton.officer[fn][ln].email;
        });
    }
  });
}
  $(document).ready(function(){
    $('.tooltipped').tooltip({delay: 50});
     $(".button-collapse").sideNav();
  });

var host = "mocogeeks.com";
if (window.location.host == host && window.location.protocol != "https:") {
  window.location.protocol = "https:";
}

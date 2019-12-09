

$(document).ready(function () {
  $("#readmore").click(function () {
    $("#displaymore").toggle();
  });
});

$(function(){
  $.getJSON("scripts/causes.json", function(data){
    let dataadd="";
          $.each(data.listdata, function(key, value) {  
              dataadd += "<li>" + value.data+ "</li>" +"<br>"
      });
      $('#list').html(dataadd); 
  });

});

$(function(){
  $.getJSON("scripts/causes1.json", function(data){
    let dataadd1="";
          $.each(data.gwcauses, function(key, value) {  
              dataadd=value.data1
      });
      $('#para').html(dataadd); 
  });

});



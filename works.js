$(document).ready(function(){
   $("button").click(function(){
        var strm = $("#givemenumberplz").val();
   $.getJSON(`https://api.telnyx.com/anonymous/v2/number_lookup/${strm}`, function(result){
      	console.log("JSONDATA:" + result.data.carrier.name);
    $.each(result, function(i, field){   
      $("#showinformation").append(result.data.carrier.name);
         });
      });
    });
});

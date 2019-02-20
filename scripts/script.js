
$(function(){

  var control = false;

    $("#maDiv").click(function(){
      $(this).css('transition', '0.4s');
      $("#arrow").css('transform','rotate(180deg)');
      $("#arrow").css('transition','0.4s');
        if(control == true){
          $(this).css('height', '80px');
            $("#arrow").css('transform','rotate(0deg)');
          control = false;
        }
        else{
          $(this).css('height', '180px');
          control= true;
        }
    });
});

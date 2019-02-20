
$(function(){

  var control = false;

    $("#maDiv").click(function(){
      $(this).css('transition', '0.4s');
      $("#arrow").css('transform','rotate(180deg)');
      $(".contactContainer").css('display','block');
      $("#arrow").css('transition','0.4s');
        if(control == true){
          $(this).css('height', '80px');
            $("#arrow").css('transform','rotate(0deg)');
            $(".contactContainer").css('display','none');
          control = false;
        }
        else{
          $(this).css('height', '280px');
          control= true;
        }
    });
});

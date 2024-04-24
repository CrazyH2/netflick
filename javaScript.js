
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 5) {
          //background-color: rgb(20, 20, 20) !important;
          //background-image: linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent) !important;

          $(".netflix-navbar").css("background-color" , "rgb(20, 20, 20)");
          $(".netflix-navbar").css("background-image" , "linear-gradient(180deg,rgba(0,0,0,.7) 10%,transparent)");
        }
  
        else{
            $(".netflix-navbar").css("background" , "transparent");  	
        }
    });

  })


function position(id){
  var card = document.getElementsByClassName('card')[id];
  // card.style.transform = 'scale(1.5)';
  console.log(id)
}
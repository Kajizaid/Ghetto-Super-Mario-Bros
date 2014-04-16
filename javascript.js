$(document).ready(function() {

  $('#parent').fadeIn(6000);
$('#PLAY').delay(13051).fadeIn('fast');
 $('#ABOUT').delay(13051).fadeIn('fast'); $('#mario').delay(2500).fadeIn('slow');
 
   function runIt() {
   $("#mario").animate({left: '+=50', top: '+=50'}, 1000);
   }

   runIt();
    runIt();
    runIt();
    runIt();
    runIt();
    runIt();
  $('#mario').delay().fadeOut('fast');
  $('#mario2').delay(9100).fadeIn('slow');
    
     function runIt2(){ $("#mario2").animate({top:'+=10'}, 200);    
                       $("#mario2").animate({top:'+=10'}, 200); 
                       $("#mario2").animate({top:'+=10'}, 200); 
                       $("#mario2").animate({top:'+=10'}, 200); 
                       $("#mario2").animate({top:'+=10'}, 200); 
 
  }
    runIt2();
    runIt2();
    runIt2();
                           $("#mario2").animate({top:'+=5'}, 200);
$("#mario2").fadeOut('fast');
$("#mario3").delay(13000).fadeIn('slow');    


  $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
            
			// Left arrow key pressed
          case 37:
            
            $('divv').addClass('img2'),
           $('divv').animate({left: "-=15px"}, 'fast');
            
      
        
				break;
            
			// Up Arrow Pressed
			case 38:
   
           
			    $('divv').animate({top: "-=40px"}, 'fast'),
                $('divv').animate({top: "+=40px"}, 'fast');
      
            
            			   
				// Put our code here
				break;
			// Right Arrow Pressed
			case 39:
            if($('divv').addClass('img2'))
            {
             $('divv').removeClass('img2'); 
              $('divv').addClass('div1')
            }
		    $('divv').animate({left: "+=15px"}, 'fast');
				// Put our code here
				break;
			// Down Arrow Pressed
			
		}

    });
$(document).keyup(function(key) {
  switch(parseInt(key.which,10))
    {
      case 39:
    
$('divv').stop(true);
        break;
        
      case 37:
        $('divv').stop(true);
        break;
    
      case 38:
        $('divv').clearQueue().finish();
    break;
          }
          });

});

//automate loading
   ;$( function()
   {
   	   "use strict";  // a good programming standard
   	   
   	   var sidebar = $("#sidebar"),
   	        mask = $(".mask"),
   	        top=$(".retrun_top"),
   	        sidebar_link=$("#sidebar_link");
   	        
   	   function showSidebar(){
   	         mask.fadeIn();	
   	         sidebar.css("right",0);
   	   } ; 
   	   
   	   function hideSidebar(){
   	         mask.fadeOut();	
   	         sidebar.css("right", -sidebar.width());
   	   };
   	     	   
   	   sidebar_link.on("click" , showSidebar);
   	   mask.on("click" ,hideSidebar);
   	   
   	   
   	   function scrollTotop(){
   	   	     $("html,body").animate({scrollTop:0},800)
   	   };
   	   
   	   top.on("click",scrollTotop); /* Go to the top*/
   	  
   	  function fadeTopButton(){
   	  	if ($(window).scrollTop()>$(window).height()){
   	  	    top.fadeIn();
   	  	   }
   	  	else top.fadeOut();   
   	  }

      $(window).on("scroll",fadeTopButton);   /* The button will fade when in first page*/
      $(window).trigger("scroll");
   }
 )

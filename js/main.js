/*
    * Andela,Google,Udacity ,
    * Made with love
    * Author:Nehemie Zikama
*/

//General/Global variables 

  
      let  img_modal    =   n$("#image_modal"),
       img    =     n$(".img"),
       body         =   n$("body"),
       main         =   n$(".main"),
       title         =   n$("head>title"),
       click        =   "click",
       close       =   n$('.close'),
       closer       =   n$('.layer'),
       next         =    n$('.Next'),
       prev         =    n$('.Prev'),
       add         =    n$('.add'),
       clas        =    n$('.clas');
   
  $(document).ready(function(){
    //_____________________ add class img-togo to our custom atrribute ___ and open a layer for it ________
$(document).on("click",'[data-toggle="img"]',function(){
       $(this).addClass("img-togo");
     img_modal.style.display = "block";
       closer.style.display = "block";
  });
    //_____________________ close layer and add class img-nomo to our custom atrribute ___ to return in normal mode ________
closer.addEventListener('click', ()=>{
 $(".close").trigger("click");
});
close.addEventListener('click', ()=>{
   let togo = $('[data-toggle="img"]');
       togo.removeClass("img-togo");   
       togo.addClass("img-nomo");   
     img_modal.style.display = "none";
      closer.style.display = "none";
});

$(document).on("focus",'[data-to="grow"]',function(){
  $(window).width() >= 100 && $(this).animate(
    {
      minWidth:'500',
    });$(this).addClass("border");$(this).attr("placeholder", "Thanks for clicking!");});
      $(document).on("blur",'[data-to="grow"]',function(){
        $(this).attr("placeholder", "Click me again!");
        if($(window).width()>=100)$(this).removeClass("border");$(this).animate({minWidth:'300'})
});

}); function n$(event) {
          return document.querySelector(event);
    }
//next
next.addEventListener(click,function(){
        $.ajax({
          type: "GET",
                    url: "../pages/index.html",
          beforeSend: ()=>{$("#body-overlay").show();},
          contentType: false,
          processData:false,
          success: (data)=>
          {
            img.innerHTML = data;
           // not availabe ---> add.innerHTML = data;
            title.innerHTML ="HHH | kampala";
          setInterval(()=> {$("#body-overlay").hide(); },200);
          },
          error: (err)=> 
          {
          console.log(`Failed to load `,err);
          }           
         });    
   });
//prev
prev.addEventListener(click,function(){
        $.ajax({
          type: "GET",
                    url: " ",
          beforeSend: ()=>{$("#body-overlay").show();},
          contentType: false,
          processData:false,
          success: (data)=>
          {
             location.reload();
          setInterval(()=> {$("#body-overlay").hide(); },200);
          },
          error: (err)=> 
          {
          console.log(`Failed to load `,err);
          }           
         });    
   }); 

    //fullscreen button clicked
  $('.fullscreen').on('click', function() {
    if($.isFunction(img.webkitEnterFullscreen)) {
      img.webkitEnterFullscreen();
    } 
    else if ($.isFunction(img.mozRequestFullScreen)) {
      img.mozRequestFullScreen();
    }
    else {
      alert('Your browsers doesn\'t support fullscreen');
    }
  });//1e3

$("li").click(function(){
   $(this).toggleClass("completed");
});

$("span").click(function(e){
   $(this).parent().fadeOut(500, function(){
      $(this).remove();
   });
   //stop event from bubbling up
   e.stopPropagation();
});
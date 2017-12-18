$("ul").on("click", "li", function(){
   $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(e){
   $(this).parent().fadeOut(500, function(){
      $(this).remove();
   });
   //stop event from bubbling up
   e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
   if(e.which === 13) {
      var todoText = $(this).val();
      $(this).val("");
      $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
   };
});

$(".fa-caret-down").click(function(){
   $("input[type='text']").fadeToggle(200);
})
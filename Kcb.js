  $(function(){
     $(".country-trigger").on("click", function(e){
         $(this).parent().toggleClass("open");
         e.preventDefault();
     });
});
        
$(function(){
    $('country').on('click', function(e){
        $('this').parent().toggleClass('open');
        e.preventDefault();});
                    
});
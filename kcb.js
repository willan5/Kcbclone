$(function(){
    $(document).mouseup(function (e){
        var container = $(".country-selector");	
        //var mega = $(".mega-menu, header .sub-nav .has-children");
    
        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {	
            container.removeClass('open');
        }
        
        /*if (!mega.is(e.target) && mega.has(e.target).length === 0) 
        {	
            $('header .sub-nav .has-children').removeClass('active');
            $('header .mega-menu').removeClass('open');
        }*/
        
    }); 
                    
});
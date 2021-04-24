$(function(){ //Country trigger
    $(".country-trigger").on("click", function(e){
        $(this).parent().toggleClass("open");
         e.preventDefault();
    });
//Search button trigger effects -- Showing Search Bar but no searching can be done.
    var searchForm = $('.main-search'),
    searchTrigger = $('.btn-search'),
   coverLayer = $('.cover-layer');
    function closeSearchForm() {
      searchTrigger.removeClass('search-form-visible');
      searchForm.removeClass('is-visible');
      coverLayer.removeClass('search-form-visible');
      $('body').removeClass('search-open');
    }
    searchTrigger.on('click', function (event) {
      event.preventDefault();
      if (searchTrigger.hasClass('search-form-visible')) {
        searchForm.find('form').submit();
      } else {
        $('body').addClass('search-open');
        searchTrigger.addClass('search-form-visible');
        coverLayer.addClass('search-form-visible');
        searchForm.addClass('is-visible').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function () {
          searchForm.find('input[type="search"]').focus().end().off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
       });
      }
    });
    searchForm.on('click', '.btn-search-close', function (event) {
      closeSearchForm();
      event.preventDefault();
    });
    coverLayer.on('click', function () {
      closeSearchForm();
    });

//Revert header back to position after scroll
    var $header = $('header');
  var offset = 60;
  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $header.addClass('scroll');
    } else {
      $header.removeClass('scroll');
    }
  });



  //Home Products
 
  
      
        $('.home-products-tabs a').on('click', function () {
        var tabID = $(this).attr('href');
        $('.home-products-tabs a').removeClass('active');
        $(this).addClass('active');
        $('.home-tab-content').removeClass('active');
        $(tabID).addClass('active');
        if ($(tabID + ' .products-slider').length) {
          $(tabID + ' .products-slider').owlCarousel({
            items: 4,
            responsiveRefreshRate: 0,
            autoplay: true,
            loop: false,
            lazyLoad: true,
            nav: true,
            dots: false,
            navContainer: tabID + ' .products-nav',
            navText: [
              '<i class=\'icon-arrow-left\'></i>',
              '<i class=\'icon-arrow-right\'></i>'
            ],
            margin: 40,
            onInitialized: function () {
              $(tabID + ' .products-slider .item .desc').matchHeight();
            },
            onTranslate: function () {
              $(tabID + ' .products-slider .item .desc').matchHeight();
            },
            onTranslated: function () {
              $(tabID + ' .products-slider .item .desc').matchHeight();
            },
            responsive: {
              0: {
                items: 1
              },
              550: {
                items: 2
              },
              820: {
                items: 3
              },
              1300: {
                items: 4
              }
            }
          });
        }
        return false;
      });
      $('#home-products-dd').on('change', function () {
        var tabID = $(this).val();
        $('.home-tab-content').removeClass('active');
        $(tabID).addClass('active');
        if ($(tabID + ' .products-slider').length) {
          $(tabID + ' .products-slider').owlCarousel({
            items: 4,
            responsiveRefreshRate: 0,
            autoplay: true,
            loop: false,
            lazyLoad: true,
            nav: true,
            dots: false,
            navContainer: tabID + ' .products-nav',
            navText: [
              '<i class=\'icon-arrow-left\'></i>',
              '<i class=\'icon-arrow-right\'></i>'
            ],
            margin: 40,
            onInitialized: function () {
              $(tabID + ' .products-slider .item .desc').matchHeight();
            },
            onTranslate: function () {
              $(tabID + ' .products-slider .item .desc').matchHeight();
            },
            onTranslated: function () {
              $(tabID + ' .products-slider .item .desc').matchHeight();
            },
            responsive: {
              0: {
                items: 1
              },
              550: {
                items: 2
              },
              820: {
                items: 3
              },
              1300: {
                items: 4
              }
            }
          });
        }
        return false;
      });
  
  
      
});
        
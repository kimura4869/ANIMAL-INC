"use strict"; $(function() { var owl; $(window).on('load resize', function() { if ($(window).width() >= 1000) { return $('#carousel .item').height(($('#header-root').height() > $(window).height()) ? $('#header-root').height() : $(window).height()); } }); owl = $('#carousel').owlCarousel({ navigation: true, items: 1, singleItem: true, navigationText: false, autoPlay: 7500 }); return this; }); (function($) { return this; })(jQuery);

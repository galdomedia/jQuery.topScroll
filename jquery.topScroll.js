(function($){
  $.fn.topScroll = function(settings){
    var config = {
    };
    if (settings){$.extend(config, settings);}
    return this.each(function(){
            // element-specific code here
      var scrollbar = $('<div>').css('overflow', 'visible').css('overflow-y', 'hidden').css('width', $(this).width());
      var innerDiv = $('<div>').css('width', $(this)[0].scrollWidth).css('padding-top', '1px').text('\xA0');
      scrollbar.append(innerDiv);
      scrollbar.bind('scroll', function(){
        $(this).scrollLeft(scrollbar.scrollLeft());
      });
      $(this).bind('scroll', function(){
        scrollbar.scrollLeft($(this).scrollLeft());
      });
      scrollbar.insertBefore($(this));
      return this;
    });
  };
})(jQuery);


;(function($){
  $.fn.extend({
    quiz: function( options ) {
      this.defaultOptions = {};
      var settings = $.extend({}, this.defaultOptions, options);
      return this.each(function() {
        var $this = $(this);
		alert(43);
      });
    }
  });
})(jQuery);
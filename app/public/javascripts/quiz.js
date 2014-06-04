;(function($){
  $.fn.extend({
    quiz: function( options ) {
      this.defaultOptions = {};
      var settings = $.extend({}, this.defaultOptions, options);
      return new function() {
        var $this = $(this);
        // above this is just boilerplate
        $.get('/data/quiz', function(response){
          $.each(response, function(index) {
            var question = response[index];
            // create circles
            $('<div>')
              .addClass('circle')
              .attr('id', 'circle-' + index)
              .attr('data-question', 'question-' + index)
              .appendTo($('#circles'));
            $('.circle').first().addClass('active-circle');
            // create questions
            $('<div>')
              .addClass('question hidden')
              .attr('id', 'question-' + index)
              .appendTo($('#questions'))
              .text(question.question);
            $('.question').first().toggleClass('visible', 'hidden');
            // create answers
            $('<div>')
              .addClass('answer hidden')
              .attr('id', 'answers-' + index)
              .appendTo($('#answers'));
            var keys = ['answera', 'answerb', 'answerc', 'answerd', 'answere'];
            $.each(keys, function(i) {
                var key = keys[i];
                  $('<div>')
                  .addClass(key + ' columns')
                  .attr('id', 'answers-' + index + '-' + key)
                  .appendTo($('#answers-' + index))
                  .html(' ' + question[key]).prepend($('<input type="radio">').attr('value', question[key]).addClass('answer-radio'));
            });
            $('.answer').first().toggleClass('visible', 'hidden');        
          });
          // create clock
          $('<img>')
            .attr('src', 'images/timer_icon.png')
            .appendTo('#clock');
          $('<div>')
            .attr('id', 'timer')
            .appendTo('#clock');
          // start timer
          window.seconds = 0;
          setInterval(function() {
            window.seconds += 1;
            var minutes = Math.floor(window.seconds / 60);
            var seconds = window.seconds % 60;
            if (seconds < 60) {
              seconds = "0" + seconds;    
            } 
            var timeString = minutes + ":" + seconds;                          
            $('#timer').text(timeString);
          }, 1000);
        });
        // boilerplate continues
      };
    }
  });
})(jQuery);
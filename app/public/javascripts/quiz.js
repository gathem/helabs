;(function($){
  $.fn.extend({
    quiz: function( options ) {
      this.defaultOptions = {};
      var settings = $.extend({}, this.defaultOptions, options);

      /**
       * Creates a clickable circle for each question.
       * @param {number} index represents the question number.
       */
      var renderCircles_ = function(index) {
        $('<div>')
          .addClass('circle')
          .attr('id', 'circle-' + index)
          .attr('data-question', 'question-' + index)
          .appendTo($('#circles'));
          $('.circle').first().addClass('active-circle');
          $('circle').on('click', function() {
            // TODO(matt): get back to this
          });
      }


      /**
       * Creates all of questions, hidden initially.
       * @param {Object} question contains all of the info needed to render the question
       * @param {number} index represents the question number.
       */
      var renderQuestions_ = function(question, index) {
        $('<div>')
            .addClass('question hidden')
            .attr('id', 'question-' + index)
            .appendTo($('#questions'))
            .text(question.question);
        $('.question')
          .first()
          .toggleClass('visible', 'hidden');
      }


      /**
       * Creates all of answers, hidden initially.
       * @param {Object} question contains all of the info needed to render the question
       * @param {number} index represents the question number.
       */
       var renderAnswers_ = function(question, index) {
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
             .html(' ' + question[key])
               .prepend(
	             $('<input type="radio">')
	               .attr('value', question[key])
	               .addClass('answer-radio'));
           });
           $('.answer').first().toggleClass('visible', 'hidden');
       }


      /**
       * Creates a clock element, and starts a timer
       */
       var renderClock_ = function() {
         $('<img>')
           .attr('src', 'images/timer_icon.png')
           .appendTo('#clock');
         $('<div>')
           .attr('id', 'timer')
           .appendTo('#clock');

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
       }

       this.run = function(data) {
         for (var index in data) {
           var question = data[index];
           renderCircles_(index);
           renderQuestions_(question, index);
           renderAnswers_(question, index);
         }
         renderClock_();
         return this;
       }
       $.get('/data/quiz', this.run);
       // boilerplate continues
    }
  });
})(jQuery);
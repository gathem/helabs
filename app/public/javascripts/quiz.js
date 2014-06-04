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
          .attr('data-question', '#question-' + index)
          .attr('data-answer', '#answers-' + index)
          .appendTo($('#circles'));
          $('.circle').first().addClass('active-circle');

          $('.circle').on('click', function() {
            activateQuestion_($(this).get(0));
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
       * Handle next button and scoring.
       */
      var handleNextButton_ = function() {
        $('#button').on('click', function() {
          var next = $('.active-circle').next().get(0);
          if (next) {
            activateQuestion_(next);
          } else {
            //verify all questions are answered before scoring
            var allQuestionsAnswered = true;
            $('.answer').each(function(){
	          var question = $(this);
              var selected = question.find("input[type='radio']:checked").val();
              if (!selected) {
                //One of the questions was not answered
                allQuestionsAnswered = false;
                var circleEl = '#circle' + $(this).attr('id').substring(7);
				activateQuestion_($(circleEl).get(0));
              }
            });
            if (allQuestionsAnswered) {
              scoreQuiz_();
            }
          }
        });
      }


      /**
       * given a circle Element, make it, and its associated question active.
       * Note: this takes a Javascript element, NOT a jquery array of elements.
       * @param {Element} circle The circle element associated with the question to activate
       */
      var activateQuestion_ = function(circle) {
	      circle = $(circle);
          var questionEl = circle.attr('data-question');
          var answerEl = circle.attr('data-answer');
          var circleEl = '#' + circle.attr('id');
          $('.visible').removeClass('visible');
          $('.active-circle').removeClass('active-circle');
          $(circleEl).addClass('active-circle');
          $(questionEl + ',' + answerEl).addClass('visible');
      }


      /**
       * Checks all of the answers
       */
      var scoreQuiz_ = function(circle) {
        var numWrong = 0;
        var numCorrect = 0;
	    $('.answer').each(function(){
          var answeredRadio = $(this).find("input[type='radio']:checked");
          var answer = answeredRadio.val();
          var correct = answeredRadio.parent().attr('data-cheater');
          var correctRadio = $(answeredRadio.parent().parent().find('input').get(correct));
          if (correctRadio.val() == answer) {
            numCorrect++;
            window.console.info('correct');
          } else {
            numWrong++;
            window.console.error('incorrect');
          }
        });
        var stage = $('#circles').parent();
        stage.html("");
        var score = "You got " + numCorrect + " out of " + (numCorrect + numWrong) + " correct.";
        $('<div>')
          .addClass('panel')
          .html(score)
          .appendTo(stage);
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
             .attr('data-cheater', question.correct)
             .appendTo($('#answers-' + index))
             .html(' ' + question[key])
               .prepend(
	             $('<input type="radio">')
	               .attr('value', question[key])
	               .attr('name', 'answers-' + index)
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
            if (Number(seconds) < 10) {
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
         handleNextButton_();
         return this;
       }
       $.get('/data/quiz', this.run);
    }
  });
})(jQuery);
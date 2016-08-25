// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html

$(function() {
  console.log('hello world :o');

  function showDreams(dreams){
    $('#dreams').html('');
    dreams.forEach(function(dream) {
      $('<li></li>').text(dream).appendTo('#dreams');
    });
  }
  
  $.get('/dreams', function(dreams) {
      showDreams(dreams);
  });

  $('form').submit(function(event) {
    event.preventDefault();
    dream = $('input').val();
    $.post('/dreams?' + $.param({dream: dream}), function(dreams) {
      showDreams(dreams);
      
      $('input').val('');
      $('input').focus();
    });
  });

});

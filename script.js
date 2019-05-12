window.onload = function(){ 
$(function() {
  $('#bluelasagna').hover(function() {
    $('#lasagna').css('display', 'block');
    $('#me').css('display', 'none');
    $('#postcard').css('display', 'none');
  },);
});
$(function() {
  $('#blueme').hover(function() {
    $('#me').css('display', 'block');
    $('#lasagna').css('display', 'none');
    $('#postcard').css('display', 'none');
  },);
});

$(function() {
  $('#bluebrighton').hover(function() {
    $('#postcard').css('display', 'block');
    $('#lasagna').css('display', 'none');
    $('#me').css('display', 'none');
  },);
});





  };
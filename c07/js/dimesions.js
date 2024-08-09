$(function() {
  var listHeight = $('#page').height();
  $('ul').append('<p>Height: </p>' + listHeight + 'px</p>');
  $('li#one').width(125);
  $('li#two').height('75%');
});
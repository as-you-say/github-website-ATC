$(document).on('click', '.item', function(){
  $('.item.on').removeClass('on');
  $(this).addClass('on');

  var i = $(this).index();
  $('.tab.on').removeClass('on');
  $('.tab').eq(i).addClass('on');
})


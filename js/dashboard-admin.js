$(document).on('click', '.js-item', function(){
  $('.js-item.on').removeClass('on');
  $(this).addClass('on');

  var i = $(this).index()*1-1;
  $('.tab.on').removeClass('on');
  $('.tab').eq(i).addClass('on');
})


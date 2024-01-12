// .children() → HTML要素直下の全ての子要素を取得する。
$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});
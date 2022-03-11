$(function (){
  $('.box1').slideDown(5000,function (){
    $('.box1').css({
      'background-color': '#0000FF',
      'width': '200px',
      'height': '100px'
    }).slideUp(3000);
  });
});

// up,downの速度を変える：up,downの第一引数に数字を入れる　※単位：ミリ秒（1秒=1000）
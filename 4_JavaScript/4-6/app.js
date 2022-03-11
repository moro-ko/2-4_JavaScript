// $(function(){
  // $('.box1').mouseover(function(){
  //   $('.box1').css({'background-color': '#0000FF'});
  
  // $('.box1').mouseout(function(){
  //   $('.box1').css({'background-color': '#FF0000'});
// });


// class属性の追加・解除で同様の動きを作る
  // cssにbox1-extを追加　addClass()対象のHTML要素にclass属性を追加、removeClass()要素に設定されているclass属性の解除
$(function(){
  // マウスオーバー
    $('.box1').mouseover(function(){
      $('.box1').addClass('box1-ext');
    });

  // マウスアウト
    $('.box1').mouseout(function(){
      $('.box1').removeClass('box1-ext');
    });
  });
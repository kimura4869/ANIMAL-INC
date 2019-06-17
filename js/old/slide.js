// $(function(){
// var slide = "#slideArea";
// var i = 0;
// $(slide).find(‘li’).eq(0).show();
// var total = $(slide).find(‘li’).index();
//
// setInterval(function(){
// if(i < total){
// $(slide).find(‘li’).fadeOut(1000);
// i++;
// setTimeout(function(){
// $(slide).find(‘li’).eq(i).fadeIn(1000);
// },1000);
// }else if(i == total){
// $(slide).find(‘li’).fadeOut(1000);
// i = 0;
// setTimeout(function(){
// $(slide).find(‘li’).eq(i).fadeIn(1000);
// },1000);
// };
// },6000);
// });

//最初の画像以外を非表示にする
$('.in img:gt(0)').hide();
//タイマー
setInterval(function() {
     //フェードインとアウトを繰り返す
    $('.in :first-child').fadeOut().next('img').fadeIn().end().appendTo('.in');
}, 4500);

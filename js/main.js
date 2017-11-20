$(document).ready(function(){


  $(window).scroll(function(e){
    if($(window).scrollTop()<=0){
    	$(".navbar,.explore").addClass("at_top");
    }else{
    	$(".navbar,.explore").removeClass("at_top");
    }
  });



//滑動
$(document).on('click','a',function(e){
   e.preventDefault();
   var target= $(this).attr('href');
   // console.log(target);
   $('html,body').animate({scrollTop:$(target).offset().top},800);

 });

// sheep move
$(window).mousemove(function(e){
     var x=e.pageX;
     var y=e.pageY;
     console.log(x);

 var sheephole= $('#sheepgrey').offset().left+$('#sheepgrey').width()/2;

 if(Math.abs(x-sheephole)<80) {
   $("#sheepgrey").css("bottom","0px")
 }
 else{
   $("#sheepgrey").css("bottom","-50px")
 }
  
 var sheephole= $('#sheepwhite').offset().left+$('#sheepwhite').width()/2;

 if(Math.abs(x-sheephole)<80) {
   $("#sheepwhite").css("bottom","0px")
 }else{
   $("#sheepwhite").css("bottom","-50px")
 } 
  
  var sheephole= $('#sheepyellow').offset().left+$('#sheepyellow').width()/2;

 if(Math.abs(x-sheephole)<80) {
   $("#sheepyellow").css("bottom","0px")
 }else{
   $("#sheepyellow").css("bottom","-50px")
 }


  //更新簡介中文字的飄浮位置
  $(".r1text").css("transform","translateX("+y/-5+"px)");
  $(".r2text").css("transform","translateX("+y/-10+"px)");
  $(".r3text").css("transform","translateX("+y/-12+"px)");
  
   //更新三角形
  $(".tri1").css("transform",
                 "translateX("+x/-5+"px) rotate(-15deg)");
  $(".tri2").css("transform",
                 "translateX("+x/-10+"px) rotate(-15deg)");
  $(".tri3").css("transform",
                 "translateX("+x/-12+"px) rotate(-15deg)");
  $(".tri4").css("transform",
                 "translateX("+x/-14+"px) rotate(-15deg)");
  $(".tri5").css("transform",
                 "translateX("+x/-16+"px) rotate(-15deg)");


 //更新一些移動景物的位置
  $(".mountain").css("transform","translateX("+(x/-20+50)+"px)")

});




});


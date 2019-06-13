$(function(){
    // //二级导航的展开


       // $(".inServerMenuB").eq(index).css("display","block").siblings().css("display","none");
       // // $(".inServerMenuB").eq(index).show().siblings().hide();
       //  });
         $(".inServerMenu li").mouseover(function() {
            var index = $(this).index();
            // console.log(index);
           $(".inServerMenuB").eq(index).show().siblings().hide();
           // console.log($(".inServerMenuB").eq(index));
        });
        $(".inServerMenu li").mouseout(function() {
            console.log(1111);
            var index = $(this).index();
           $(".inServerMenuB").eq(index).css("display","none");
        });
    })

     
     
     
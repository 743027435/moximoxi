$(function (){
    // 图片放大
       $(".inBandSalesMainC li").hover(function() {
        console.log(111);
          $(this).css("transform","scale(1.2,1.2)");
       },function(){
          $(this).css("transform","none");
       })
       $(".hotPic").hover(function() {
        
          $(this).css("transform","translate(10px ,0px)");
       },function(){
          $(this).css("transform","none");
       })
       
       // 左下角回到顶部
       let f_model = $(".f_model");
       let arrtop = [];
       f_model.each(function(index){
        arrtop.push($(this).offset().top);
       });
       console.log(arrtop);
       $(".use-smooth-scrool").click(function() {
         let index = $(this).index();
        console.log(1111);

        $("body ,html").stop(true).animate({scrollTop:arrtop[index]},200);
        $(".use-smooth-scrool").eq(index).addClass("active").siblings().removeClass('active');
       });
        



      //右边的栏目
      // $(".right_sider").hover(function(){
      //   // console.log(1111);
      //   // $(".mymoxi").stop(true,true).toggle(1000,function(){});
      //   $(".mymoxi").css("display","block");
      //   $(".right_sider").css("background","black")
      // },function(){
      //   $(".mymoxi").css("display","none");
      //     $(".right_sider").css("background","none")
      // });
      $(".right_sider").mouseover(function() {
          $(".mymoxi").css("display","block");
          $(".right_sider").css("background","black")
          
      });
      $(".right_sider").mouseout(function() {
          $(".mymoxi").css("display","none");
          $(".right_sider").css("background","none")
          // $("#user-view").css("display","none");
          // $(".order-view").css("display","none");
      });
      //快递
      $("#traceorder").click(()=>{
        console.log(111);
      });
      $("#traceorder").hover(function(){
        $(".order-view").css("display","block");
        console.log(111);
      },function(){
        $(".order-view").css("display","none");
      })
      $(".btn-close-toolbar-traceorder").click(function(){
        // console.log(111);
        $(".order-view").css("display","none");
      })
      $("#mymoxi").hover(function(){
        $(".user-view").css("display","block");
        console.log(222);
       
      },function(){
        $(".user-view").css("display","none");
      })
      $(".btn-close-toolbar-mymoxi").click(function(){
        console.log(333);
        $("#user-view").css("display","none");
        })
      $(".link ").mouseover(function(){
        $(this).css("background","#ff3d3b").siblings().css("background","");
      })
      //选项卡
      //2保税专区
         $(".tabtitle_5a a").click(function() {
            // console.log($(this));
            // console.log($(this).index(".tabtitle_5a a"))
            let index = $(this).index();

            $(".tabtitle_5a a").eq(index).addClass("activemokuai2").siblings().removeClass("activemokuai2");
            $(".tab_con #tab_kjg").eq(index).css("display","block").siblings().css("display","none");
           
         });
         //食品保健
         $(".tabtitle_3a a").click(function() {
            // console.log($(this));
            // console.log($(this).index(".tabtitle_5a a"))
            let index = $(this).index();

            $(".tabtitle_3a a").eq(index).addClass("activemokuai2").siblings().removeClass("activemokuai2");
            $(".tab_con #tab_sp").eq(index).css("display","block").siblings().css("display","none");
           
         });
         //大轮播图
          let oSlider        = $(".bannerMain");//div
          let oSliderBoxItem = $(".biglun");//li
          let oSliderBox     = $(".inBannerMain");//ul
          let oSliderNav     = $(".inDot");//焦点的父节点
          let timer;
          let oPrev          = $(".prev");
          let oNext          = $(".next");
          let index = 0;
          let oSliderBoxLeft = 0;
          let oSliderBoxItemCount = oSliderBoxItem.length;
          let oSliderBoxItemWidth = oSliderBoxItem.width();
          let switchSlider = (index)=>{
      if (index == oSliderBoxItemCount - 1)
      {
        index = 0;
      }
      $(".slider-nav-item").eq(index).addClass("act").siblings().removeClass("act");
    }
    let next = ()=>{
      index++;
      /*临界值检查*/
      if(index >= oSliderBoxItemCount)
      {
        index = 1;
        oSliderBox.css("left",0);
      }
      oSliderBoxLeft = index *  oSliderBoxItemWidth;
      oSliderBox.stop(true).animate({"left": -oSliderBoxLeft + "px"});
      switchSlider(index);
    }
    let prev = ()=>{
      index--;
      /*临界值检查*/
      if(index < 0)
      {
        index = oSliderBoxItemCount - 2;
        oSliderBox.css("left",-(oSliderBoxItemCount - 1) * oSliderBoxItemWidth);
      }
      oSliderBoxLeft = index *  oSliderBoxItemWidth;
      oSliderBox.stop(true).animate({"left":- oSliderBoxLeft + "px"});
      switchSlider(index);
    }
    let autoPlay = ()=>{
      timer = setInterval(next,2000);
    }


    /*01-设置标签样式*/
    oSliderBoxItem.each(function (i,ele) {
      // $(this).css("background",$.getRandomColor());

      console.log(oSliderBoxItemCount, i);
      if (i == oSliderBoxItemCount -1) return false;
      /*创建对应的图标并且插入到页面中*/
      $(`<li class="slider-nav-item"></li>`).appendTo(oSliderNav);
      $(".slider-nav-item").first().addClass("act");
    })

    /*02-设置自动播放*/
    autoPlay();

    /*03-设置鼠标移入的时候停止自动播放，移开的时候重新播放*/
    oSlider.hover(()=>clearInterval(timer),autoPlay);

    /*04-点击切换*/
    oNext.click(next);
    oPrev.click(prev)

    /*05-鼠标移入小图标的时候显示对应的滑块*/
    $(".slider-nav-item").mouseenter(function () {
      var index = $(this).index();
      oSliderBoxLeft = index *  oSliderBoxItemWidth;
      oSliderBox.stop(true).animate({"left":- oSliderBoxLeft + "px"});
      switchSlider(index);
    })
    //
    //点击照片生成详情页
    $(".inBandSalesMainC").on("click","img",function(){
        window.location.href = "../tpl/list.html";
        console.log(8888);
        plase();
    })





     


    });

    

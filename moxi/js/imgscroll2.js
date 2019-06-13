/* 
* @Author: Marte
* @Date:   2019-06-13 10:00:14
* @Last Modified by:   Marte
* @Last Modified time: 2019-06-13 10:18:57
*/

$(document).ready(function(){
    $(function(){
    //模块lunbotu
          let oSlider        = $(".c-tabs-end");//div
          let oSliderBoxItem = $(".lun");//a
          let oSliderBox     = $(".c-tabs-pic");//ul
          let oSliderNav     = $(".ban_dot");//焦点的父节点
          let timer;
          let oPrev          = $(".tabs-left-btn");
          let oNext          = $(".tabs-left-btn");
          let index = 0;
          let oSliderBoxLeft = 0;
          let oSliderBoxItemCount = oSliderBoxItem.length;
          let oSliderBoxItemWidth = oSliderBoxItem.width();
          let switchSlider = (index)=>{
      if (index == oSliderBoxItemCount - 1)
      {
        // console.log(oSliderBoxItemCount)
        index = 0;
      }
      // console.log(index);
      $(".dot_list").eq(index).addClass("act").siblings().removeClass("act");
    }
    let next = ()=>{
      index++;
      /*临界值检查*/
      if(index >= oSliderBoxItemCount)
      {
        index = 0;
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
      $(`<a class="dot_list"></a>`).appendTo(oSliderNav);
      $(".dot_list").first().addClass("act");
    })

    /*02-设置自动播放*/
    autoPlay();

    /*03-设置鼠标移入的时候停止自动播放，移开的时候重新播放*/
    oSlider.hover(()=>clearInterval(timer),autoPlay);

    /*04-点击切换*/
    oNext.click(next);
    oPrev.click(prev)

    /*05-鼠标移入小图标的时候显示对应的滑块*/
    $(".dot_list").mouseenter(function () {
      var index = $(this).index();
      oSliderBoxLeft = index *  oSliderBoxItemWidth;
      oSliderBox.stop(true).animate({"left":- oSliderBoxLeft + "px"});
      switchSlider(index);
    })  
})
});
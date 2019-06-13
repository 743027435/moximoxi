$(function(){
  //加号
    $(".wrap-input").on("click" ,".btn-reduce",function(){
      var num = $(this).next().val();
      // console.log(num);
      num--;
      if(num <= 1) {
      num = 1;
    }
    // console.log(1111)
    $(this).next().val(num);
     stotal($(this));
    })
    //减号
    $(".wrap-input").on("click" ,".btn-add",function(){
      var num = $(this).prev().val();
      // console.log(num);
      num++;
      if(num >= 10) {
      num = 10;
    }
    // console.log(1111)
    $(this).prev().val(num);
     stotal($(this));
    })
    //手动改数量
    $(".wrap-input").on("blur",".buy-num",function(){
      var num = $(this).val();
      // var kuncun = $(this).data("num");
      if(num <= 1) {
      num = 1;
      } else if(num >= 10) {
        num = 10;
      }
      $(this).val(num);
       stotal($(this));
    })
    //小计
    function stotal (now){
      var num = $(now).parent().find(".buy-num").val();
      var price = $(now).parent().find(".p-price").text();
      console.log(num ,price);
      var statol = (num * price*1);
      $(".stotal").html(statol);
    }
    // 删除当行
    $(".p-action").on("click" ,".btn-delete",function(){
    var res = confirm('您确定要删除吗？');
    console.log(111);
      if(res) {
        $(this).parent().parent().remove();
      }
    })
    //全部结算
    var arr = [];
    $(".submit-btn").click(function(){

    })
})
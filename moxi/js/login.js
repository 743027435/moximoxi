$(function(){
            var isOk1 = true;
            var isOk2 = true;
            var isOk3 = true;
            var isOk4 = true;
            var isOk5 = true;
            var isOk6 = true;
     //邮箱注册
      $("#txtuserEmail").blur(function(){
          let email = $(this).val();
          if(email){
            if(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(email)){
               $(".sp-login_reg:eq(0)").text("验证通过").css("color","green")
                isOk1 = true;
            }else{
               $(".sp-login_reg:eq(0)").text("请输入合法的信息").css("color","red"); 
            }
          }else{
                $(".sp-login_reg:eq(0)").text("请输入信息").css("color","red");
          }
      });
      //昵称：
      $("#txtuserLoginName").blur(function(){
          let nName = $(this).val();
          if(nName){
            if(/^[\u4e00-\u9fa5]+$/.test(nName)){
               $(".sp-login_reg:eq(1)").text("验证通过").css("color","green")
                isOk2 = true;
            }else{
               $(".sp-login_reg:eq(1)").text("请输入合法的信息").css("color","red"); 
            }
          }else{
                $(".sp-login_reg:eq(1)").text("请输入信息").css("color","red");
          }
      });
      //密码：
     $("#txtuserPwd").blur(function(){
          let password = $(this).val();
          if(password){
            if(/^\S{6,20}$/.test(password)){
               $(".sp-login_reg:eq(2)").text("验证通过").css("color","green")
                isOk3 = true;
            }else{
               $(".sp-login_reg:eq(2)").text("请输入合法的信息").css("color","red"); 
            }
          }else{
                $(".sp-login_reg:eq(2)").text("请输入信息").css("color","red");
          }
      });
     // 请再次输入密码：
     $("#txtrptPwd").blur(function(){
        let password = $("#txtuserPwd").val();
        let ptpwd = $(this).val();
        if(ptpwd){
            if(ptpwd == password){
                isOk4 = true;
                $("#spRptPwd").text("与上面代码密码一致").css("color","green"); 
            }else{
            $("#spRptPwd").text("请重试").css("color","red"); 
            }
          }else{
                $("#spRptPwd").text("请输入信息").css("color","red");
          }
     })
     //从何处得知我们网站：
      $("#txt_FromWhereLearn").blur(function(){
         let WhereLearn =  $(this).val();
         if(WhereLearn){
            $(".table-tit01").text("谢谢您的资料").css("color","green");
                isOk5 = true;
         }else{
            $(".table-tit01").text("这对我们很重要，请你填写").css("color","red");
         }
      });
     //验证码
        function randomCode() {
                //随机验证码
                let html = '0987654321zxcvbnmkjhgfdsaqwertyuioplZXCVBNMLKJHGFDSAQWERTYUIOP';
                let num = '';//存四位数的
                for(let i = 0; i < 4; i++) {
                    //随机数范围：0-html.length-1
                    let now = parseInt(Math.random() * html.length);//0-html.length-1
                    num += html[now];
                }
                
                return num;//返回
            }
            let yangzhengma = randomCode();
            $(".regimage").html(yangzhengma);
       $(".again").click(function() {
         let yangzhengma = randomCode();
         // console.log(yangzhengma)
          $(".regimage").html(yangzhengma);
       });
       $(".square-input-short").blur(function(){
           let reg = $(".regimage").text().toLowerCase();
           let squ = $(this).val().toLowerCase();
           if(reg == squ){
            $("#spcode").text("验证成功").css("color","green"); 
            isOk6 = true;
           }else{
            $("#spcode").text("验证码不正确,请重新获取").css("color","red"); 
           }
       })







     //注册
     let  useremail = $("#txtuserEmail");
     let  pwd       = $("#txtuserPwd");
     
     function register(){
       $.ajax({
            "url": "../php/register.php",
            "data": {
                "usenameemail": useremail.val(),
                "passwd": pwd.val(),
            },
            "success": function (res, status, xhr) {
              // console.log(111);
                if (status == "success") {
                    
                    if (xhr.responseText == "ok") {
                        alert("注册成功！请登录");
                      location.href = "../tpl/index.html";
                    }

                    if (xhr.responseText == "用户已经存在") {
                       alert("该账号已经注册,请直接登录");
                    }
                }
            }
        });
    }

     

      $("#submit-btn").click(function() {
          if (isOk1 && isOk2 && isOk3 && isOk4 && isOk5 && isOk6 ) {
              alert('注册成功');
          }else{
              alert('请填写完整的信息');
          }
          register();
      });





      //链接php与数据库链接
      // id="txt_usernameLogin" class="square-input-short">
      // id="txt_pwdLogin" class="square-input-short
      function netWork(queryString){
          $.get({
            url: "../php/login.php",
            data: queryString,
            success(res) {
                if (JSON.parse(res) == "success") {
                    location.href = "../tpl/index.html";
                };
            }
          });
        }
      
      
      let username = $("#txt_usernameLogin");
      let password = $("#txt_pwdLogin");
      //class="loginbtn"
      $(".loginbtn").click(function(){
        let unameval = $.trim(username.val());
        let pwdval = $.trim(password.val());
        netWork(`username=${unameval}&userPwd=${pwdval}`);
      })



      //注册
      

}) 
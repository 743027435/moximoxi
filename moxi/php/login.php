<?php
      require "../php/logocommon.php";
       $uname = $_REQUEST["username"];
       $pwd = $_REQUEST["userPwd"];
       //    判断是否存在用户
        $isHasuser = select("select passwd from users where userName='$uname'");

        $res = "";

         if(!$isHasuser){
        $res = "用户不存在";
        }elseif($isHasuser[0]["passwd"] != $pwd){
            $res = "密码不正确";
        }else{
            $res = "success";
        }
        echo json_encode($res,JSON_UNESCAPED_UNICODE);
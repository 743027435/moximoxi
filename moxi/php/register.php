<?php
 require "../php/logocommon.php";
    $usenameemail = $_REQUEST["username"];
    $pwd = $_REQUEST["userPwd"];
   
       // 判断是否存在用户
      
    $isHasusenameemail = select("select * from users where userName='$uname'");
    
    if($isHasusenameemail){
        echo "用户已经存在";
        return;
    }

    // 插入用户的数据
     $res1 = mysqli_query($conn,"insert into users(passWd,userName) values('$pwd','$usenameemail')");
     // $sql = "INSERT INTO users(passWd,userName) VALUES('$pwd','$usenameemail')";
    
    //2.执行语句
    // $res = $conn->query($sql);
   
      if($res){
        echo "ok";
    }
   
   
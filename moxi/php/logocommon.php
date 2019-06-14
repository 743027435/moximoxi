
<?php
    $conn=null;
   function query($sql){
       //empty 判断一个变量的值是否为空
       global $conn;
       $conn=mysqli_connect("localhost","root","root");//连接数据库服务器
       mysqli_select_db($conn,'moxi');//选中要操作的数据库
       mysqli_query($conn,'set names utf8');//执行一个SQL语句
       $result=mysqli_query($conn,$sql);//设置指定编码格式
       return $result;   
   }
    function select($sql,$isnum=false){
       $result=query($sql);
       if($result){
           $resultArray=array();
           if($isnum){
               while($arr=mysqli_fetch_row($result)){
                   array_push($resultArray,$arr);
               }
           }else{
               while($arr=mysqli_fetch_assoc($result)){
                   array_push($resultArray,$arr);
               }
           }
           return $resultArray;           
       }else{
           return false;
       }
   }
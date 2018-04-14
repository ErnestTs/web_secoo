<?php
	header("content-type:text/html;charset=utf-8");
	$username = $_POST["username"];
	$password = $_POST["password"];
	$con = mysql_connect("localhost", "root", "123456");
	$qwe = mysql_select_db("erstudents");
	$sql1 = "select userID from user where userID='$username';";
	$is_ok1 = mysql_query($sql1);
	if(mysql_num_rows($is_ok1)){
		echo 0;
	}else{
		$sql2 = "INSERT INTO user VALUES('$username','$password');";
		$is_ok2 = mysql_query($sql2);
		if($is_ok2){
			echo 1;
		}else{
			echo 2;
		}
	}
?>



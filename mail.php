<?php
header("Content-Type: text/html; charset=utf-8");
$email = htmlspecialchars($_POST["email"]);
$name = htmlspecialchars($_POST["name"]);
$tel = htmlspecialchars($_POST["tel"]);
$mmasage = htmlspecialchars($_POST["mmasage"]);



$check = is_array($_POST['check']) ? $_POST['check'] : array();
$check = implode (', ', $check );

$radio = htmlspecialchars($_POST["radio"]);

$radios = htmlspecialchars($_POST["radios"]);

$refferer = getenv('HTTP_REFERER');
$date=date("d.m.y"); // число.месяц.год  
$time=date("H:i"); // часы:минуты:секунды 
$myemail = "artemkravetsf@gmail.com"; // e-mail администратора info@prepcenter.us


// Отправка письма администратору сайта

$tema = "Order";
$message_to_myemail = "Information:
<br><br>
Full name: $name<br>
Email: $email<br>
Tel: $tel<br>
Message: $mmasage<br>";


mail($myemail, $tema, $message_to_myemail, "From: PrepCenter <reg@info.com> \r\n Reply-To: PrepCenter \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );


// Отправка письма пользователю

$tema = "Thanks! Your application has been received";
$message_to_myemail = "
We are already getting acquainted with your application<br>";
$myemail = $email;
mail($myemail, $tema, $message_to_myemail, "From: PrepCenter <reg@info.com> \r\n Reply-To: PrepCenter \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );



?>
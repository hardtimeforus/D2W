<?php
/* Принимаем данные из формы */
$name = $_POST['name']; 
$email = $_POST['email'];
$count = $_POST['count'];

/* Подключаемся к БД */
$db = mysqli_connect('localhost', 'root','', 'test2'); 
 
/* Записываем данные из формы в БД */
$sql = "INSERT INTO tab(name, email, count) VALUES ('$name', '$email', '$count')";
$result=mysqli_query($db, $sql);
header('Location: https://project/index.html');
exit;
?>
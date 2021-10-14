<?php
function connectMySQLi(){
    $host = "127.0.0.1";
    $user = "root";
    $pass = "";
    $base = "simpazon";
    $conn = new mysqli ($host, $user, $pass, $base) or die ("Connection to MySQL failed.");
    return $conn;
}
function disconnectMySQLi($conn){
    $conn -> close();
}
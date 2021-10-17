<?php
declare(strict_types=1);
use Firebase\JWT\JWT;
require_once('./vendor/autoload.php');
include "./inc/inc_mysqli.php";
$conn = connectMySQLi();
$cid = $_POST['cid'];
$pid = $_POST['pid'];
$sub = $_POST['submit'];
$sql = "SELECT * FROM users WHERE cid='" . $cid . "'";
$result = $conn->query($sql);
$result2 = $result->fetch_assoc();
$valid = false;
if ($result->num_rows > 0) {
    if (isset($cid)){
        if (isset($pid)){
            $valid = true;
        }
    }
} else {
    Header("Location: ");
}
if ($valid){
    $secretKey  = 'bGS6lzFqvvSQ8ALbOxatm7/Vk7mLQyzqaS34Q4oR1ew=';
    $issuedAt   = new DateTimeImmutable();
    $expire     = $issuedAt->modify('+6 days')->getTimestamp();
    $serverName = "simpazon.udos";
    $username   = $result2['username'] . "." . $result2['pid'] . "." . $result2['cid'] . "." . $result2['address'];
    //echo $username;
    $data = [
        'iat'  => $issuedAt->getTimestamp(),         // Issued at: time when the token was generated
        'iss'  => $serverName,                       // Issuer
        'nbf'  => $issuedAt->getTimestamp(),         // Not before
        'exp'  => $expire,                           // Expire
        'userName' => $username,                     // User name
    ];
    $token = JWT::encode(
        $data,
        $secretKey,
        'HS512'
    );
    echo $token;
    $dtoken = JWT::decode($token, $secretKey, ['HS512']);
    echo $dtoken->username . PHP_EOL;
}
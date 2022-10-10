<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'connection.php';
$objDb = new connection;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
$path = explode('/', $_SERVER['REQUEST_URI']);
switch($method) {
    case "GET":
        $status="active";
        $sql = "SELECT id, type FROM users WHERE email = :email and password= :password and status= :status";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':email', $path[2]);
        $stmt->bindParam(':password', $path[3]);
        $stmt->bindParam(':status', $status);
        if($stmt->execute()){
             $response = $stmt->fetch(PDO::FETCH_ASSOC);
        }

        echo json_encode($response);
        break;
}
?>
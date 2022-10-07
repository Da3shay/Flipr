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
switch($method) {
    case "POST":
        $user = json_decode( file_get_contents('php://input') );
        $sql = "SELECT id, type FROM user WHERE username = :username and password= :password and status='active'";
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':username', $user->username);
        $stmt->bindParam(':password', $user->password);
        $stmt->execute();
        $response = $stmt->fetch(PDO::FETCH_ASSOC);
        if($response){
            echo json_encode($response);
        }
        
        break;
}
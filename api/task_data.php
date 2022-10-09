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
    case "GET":
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[4]) && is_numeric($path[4])) {
            $today=date("Y-m-d");
            $yesterday=date("Y-m-d", strtotime("-1 days"));
            $sql2="SELECT SUM(duration), type, date from tasks where emp_id=:emp_id GROUP BY date,type ORDER BY date DESC LIMIT 7";
            $stmt2 = $conn->prepare($sql2);
            $stmt2->bindParam(':emp_id', $path[4]);
           // $stmt2->bindParam(':date', $today);
            $stmt2->execute();
            $users2 = $stmt2->fetchAll(PDO::FETCH_ASSOC);
        }
        echo json_encode($users2);
        break;
    }
?>
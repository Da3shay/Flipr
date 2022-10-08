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
        $yesterday=date("Y-m-d", strtotime("-1 days"));
        $status="active";
        $sql = "SELECT count(*) as user_count FROM users where status=:status";       
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':status', $status);
        $stmt->execute();
        $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $count=$users[0]["user_count"];
        /*---------------*/
        $type="work";
        $sql1 = "SELECT IFNULL(AVG(work),0)as Avg_work from (SELECT SUM(duration) as work FROM tasks where date = :date and type= :type GROUP BY emp_id) t";
        $stmt1 = $conn->prepare($sql1);
        $stmt1->bindParam(':date', $yesterday);
        $stmt1->bindParam(':type', $type);
        $stmt1->execute();
        $work = $stmt1->fetchAll(PDO::FETCH_ASSOC);
        /*--------------------*/
        $type="break";
        $sql2 = "SELECT IFNULL(AVG(work),0) as Avg_break from (SELECT SUM(duration) as work FROM tasks where date = :date and type= :type GROUP BY emp_id) t";
        $stmt2 = $conn->prepare($sql2);
        $stmt2->bindParam(':date', $yesterday);
        $stmt2->bindParam(':type', $type);
        $stmt2->execute();
        $break = $stmt2->fetchAll(PDO::FETCH_ASSOC);
        /*--------------------*/
        $type="meeting";
        $sql3 = "SELECT IFNULL(AVG(work),0)as Avg_meet from (SELECT SUM(duration) as work FROM tasks where date = :date and type= :type GROUP BY emp_id) t";
        $stmt3 = $conn->prepare($sql3);
        $stmt3->bindParam(':date', $yesterday);
        $stmt3->bindParam(':type', $type);
        $stmt3->execute();
        $meet = $stmt3->fetchAll(PDO::FETCH_ASSOC);
        /*--------------------*/
        $result=array_merge($users[0],$work[0],$break[0],$meet[0]);
        echo json_encode($result);
        break;
}
?>


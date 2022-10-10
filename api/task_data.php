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
            $last_date=date("Y-m-d", strtotime("-6 days"));

            $sql2="SELECT SUM(duration) as time, type, date from tasks where emp_id=:emp_id and date>:dates GROUP BY date,type ORDER BY date DESC";
            $stmt2 = $conn->prepare($sql2);
            $stmt2->bindParam(':emp_id', $path[4]);
           $stmt2->bindParam(':dates', $last_date);
            $stmt2->execute();
            $users2 = $stmt2->fetchAll(PDO::FETCH_ASSOC);
        }
        
       
        $result=array();
        for($i=0;$i<7;$i++){
            $result[$i]["name"]="Day ".($i+1);
            $result[$i]["label"]=date("Y-m-d", strtotime(-$i." days"));;
            $result[$i]["work"]=0;
            $result[$i]["break"]=0;
            $result[$i]["meeting"]=0;
        }
        
        foreach($users2 as $key=>$value){
            $t=strtotime($today);
            $d=strtotime($users2[$key]['date']);
            $diff=(($t-$d)/60/60/24);
            $result[$diff][$users2[$key]['type']]=$users2[$key]['time'];
        }
        echo json_encode($result);
        break;
    }
?>
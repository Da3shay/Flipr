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
        $sql = "SELECT * FROM tasks";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[4]) && is_numeric($path[4])) {
            $sql .= " WHERE emp_id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[4]);
            $stmt->execute();
            $tasks = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $tasks = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($tasks);
        break;
        case "POST":
            $path = explode('/', $_SERVER['REQUEST_URI']);
            $id=$path[4];
            $user = json_decode( file_get_contents('php://input') );
            $sql = "INSERT INTO tasks(id, emp_id, type, description, start_time, duration, date) VALUES(null, :emp_id, :type, :desc, :start, :duration, :date)";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':emp_id', $id);
            $stmt->bindParam(':type', $user->type);
            $stmt->bindParam(':desc', $user->desc);
            $stmt->bindParam(':start', $user->start);
            $stmt->bindParam(':duration', $user->duration);
            $stmt->bindParam(':date', $user->date);
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record created successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to create record.'];
            }
            echo json_encode($response);
            break;
            case "DELETE":
                $sql = "DELETE FROM tasks WHERE id = :id";
                $path = explode('/', $_SERVER['REQUEST_URI']);
        
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':id', $path[4]);
        
                if($stmt->execute()) {
                    $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
                } else {
                    $response = ['status' => 0, 'message' => 'Failed to delete record.'];
                }
                echo json_encode($response);
                break;
        }
?>
    

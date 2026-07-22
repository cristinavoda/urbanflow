<?php
use Core\Response;
require_once __DIR__ . '/../core/Response.php';


class Database
{
    private string $host;
    private string $database;
    private string $username;
    private string $password;

    public function __construct()
    {
     
     if (
    $_SERVER['SERVER_NAME'] === 'localhost' ||
    $_SERVER['SERVER_NAME'] === '127.0.0.1'
) {

    $this->host = 'localhost';
    $this->database = 'urbanflow';
    $this->username = 'root';
    $this->password = '';

} else {
$this->host = 'sql202.infinityfree.com';
$this->database = 'if0_42357728_XXX'; // aquí va el nombre exacto
$this->username = 'if0_42357728';
$this->password = 'mR101dN3BUiv0';
}    
    }
    public function getConnection(): PDO
    {
        try {

            return new PDO(
                "mysql:host={$this->host};dbname={$this->database};charset=utf8mb4",
                $this->username,
                $this->password,
                [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    PDO::ATTR_EMULATE_PREPARES => false,
                ]
            );

        } catch (PDOException $e) {

            Response::json([
                "status" => "error",
                "message" => $e->getMessage()
            ], 500);

            exit;
        }
    }
}
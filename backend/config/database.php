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
     
         if ($_SERVER['SERVER_NAME'] === 'localhost') {

            $this->host = 'localhost';
            $this->database = 'urbanflow';
            $this->username = 'root';
            $this->password = '';

        } else {

        $this->host = getenv('DB_HOST');
        $this->database = getenv('DB_NAME');
        $this->username = getenv('DB_USER');
        $this->password = getenv('DB_PASSWORD');

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
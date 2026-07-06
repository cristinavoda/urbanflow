<?php
require_once __DIR__ . '/../core/Response.php';
class Database
{
    private string $host = "localhost";
    private string $database = "urbanflow";
    private string $username = "root";
    private string $password = "";

    public function getConnection(): PDO
    {
        try {

            return new PDO(
                "mysql:host={$this->host};dbname={$this->database};charset=utf8",
                $this->username,
                $this->password
            );

        } catch (PDOException $e) {

            Response::json([
                "status" => "error",
                "message" => $e->getMessage()
            ],500);

        }
    }

}
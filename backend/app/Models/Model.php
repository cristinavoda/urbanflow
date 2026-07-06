<?php

namespace App\Models;

use PDO;

abstract class Model
{
    protected PDO $db;


    public function __construct()
{
    $database = new \Database();

    $this->db = $database->getConnection();
}

    public function all(): array
    {
        $table = static::$table;

        $stmt = $this->db->query("SELECT * FROM {$table}");

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

 public function find(int $id): array|null
{
    $table = static::$table;

    $stmt = $this->db->prepare(
        "SELECT * FROM {$table} WHERE id = ?"
    );

    $stmt->execute([$id]);

    return $stmt->fetch(PDO::FETCH_ASSOC) ?: null;
}


public function create(array $data): bool
{
    $table = static::$table;

    $columns = implode(', ', array_keys($data));

    $placeholders = implode(', ', array_fill(0, count($data), '?'));

    $stmt = $this->db->prepare(
        "INSERT INTO {$table} ($columns)
         VALUES ($placeholders)"
    );

    return $stmt->execute(array_values($data));
}
}
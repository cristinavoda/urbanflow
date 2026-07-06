<?php

require_once __DIR__ . '/config/database.php';

$db = (new Database())->getConnection();

echo "<h2>Base de datos:</h2>";
echo $db->query("SELECT DATABASE()")->fetchColumn();

echo "<h2>Tablas:</h2>";

$stmt = $db->query("SHOW TABLES");

foreach ($stmt->fetchAll(PDO::FETCH_NUM) as $table) {
    echo $table[0] . "<br>";
}
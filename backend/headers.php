<?php

header("Access-Control-Allow-Origin: *");
header("X-Test: UrbanFlow");
header("Content-Type: application/json");

echo json_encode([
    "ok" => true
]);
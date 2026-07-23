<?php

namespace Core;

class Response
{
    public static function json($data, int $status = 200): void
    {
        http_response_code($status);

        if (isset($_SERVER['HTTP_ORIGIN'])) {
            header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
        } else {
            header('Access-Control-Allow-Origin: *');
        }

        header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type, Authorization');
        header('Content-Type: application/json; charset=UTF-8');

        echo json_encode(
            $data,
            JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE
        );

        exit;
    }
}
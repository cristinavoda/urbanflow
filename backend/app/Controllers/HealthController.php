<?php

namespace App\Controllers;

use Core\Response;

class HealthController
{
    public function index(): void
    {
        Response::json([
            "status" => "success",
            "application" => "UrbanFlow",
            "version" => "1.0.0",
            "database" => "connected"
        ]);
    }
}
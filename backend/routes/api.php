<?php

use Core\Router;
use App\Controllers\HealthController;
use App\Controllers\IncidentController;

$router = new Router();

$router->get('/', [HealthController::class, 'index']);
$router->get('/api/health', [HealthController::class, 'index']);
$router->get('/api/incidents', [IncidentController::class, 'index']);
$router->get('/api/incidents/show',[IncidentController::class, 'show']);
$router->post('/api/incidents', [IncidentController::class, 'store']);
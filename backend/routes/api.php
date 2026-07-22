<?php

use Core\Router;
use App\Controllers\HealthController;
use App\Controllers\IncidentController;
use App\Controllers\MaterialController;

$router = new Router();

$router->get('/', [HealthController::class, 'index']);
$router->get('/api/health', [HealthController::class, 'index']);
$router->get('/api/incidents', [IncidentController::class, 'index']);
$router->get('/api/incidents/show',[IncidentController::class, 'show']);
$router->post('/api/incidents', [IncidentController::class, 'store']);
$router->get('/api/materiales', [MaterialController::class, 'index']);
$router->get('/api/materiales/show',[MaterialController::class, 'show']);
$router->get('/api/materiales/low-stock',[MaterialController::class, 'lowStock']);
$router->post('/api/materiales', [MaterialController::class, 'store']);
<?php

namespace Core;

class Router
{
    private array $routes = [];

    public function get(string $uri, array $action): void
    {
        $this->routes['GET'][$uri] = $action;
    }

    public function post(string $uri, array $action): void
    {
        $this->routes['POST'][$uri] = $action;
    }

    public function dispatch(string $method, string $uri): void
    {
        if (!isset($this->routes[$method][$uri])) {

            Response::json([
                "status" => "error",
                "message" => "Ruta no encontrada"
            ], 404);
        }

        $action = $this->routes[$method][$uri];

        $controller = new $action[0];

        $controller->{$action[1]}();
    }
}


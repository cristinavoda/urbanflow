<?php

namespace Core;

class Request
{
    public function method(): string
    {
        return $_SERVER['REQUEST_METHOD'];
    }

    public function path(): string
    {
        return $_GET['route'] ?? '/';
    }
}
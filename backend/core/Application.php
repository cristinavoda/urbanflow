<?php

namespace Core;

class Application
{
    public function run(): void
    {
        global $router;

        $request = new Request();

        $router->dispatch(
            $request->method(),
            $request->path()
        );
    }
}
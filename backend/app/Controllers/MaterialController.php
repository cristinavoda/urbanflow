<?php

namespace App\Controllers;

use App\Models\Material;
use Core\Response;

class MaterialController
{
    public function index(): void
    {
        $material = new Material();

        Response::json(
            $material->all()
        );
    }


 public function show(): void
{
    $id = (int) ($_GET['id'] ?? 0);

    $material = new Material();

    Response::json(
        $material->find($id)
    );
}


public function lowStock()
{
    $material = new Material();

    Response::json(
        $material->lowStock()
    );
}

public function store()
{
    $data = json_decode(file_get_contents('php://input'), true);

    $material = new Material();

    $material->create($data);

    Response::json([
        'status' => 'success',
        'message' => 'Material creado correctamente'
    ]);
}

}
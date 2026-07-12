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


    
    public function show()
{
    $id = (int) ($_GET['id'] ?? 0);

    $material = new Material();

    echo json_encode(
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

    $incident = new Material();

    $material->create($data);

    header('Content-Type: application/json');

    echo json_encode([
        'status' => 'success',
        'message' => 'Incidencia creada correctamente'
    ]);
}

}
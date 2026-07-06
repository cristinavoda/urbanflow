<?php

namespace App\Controllers;

use App\Models\Incident;

class IncidentController
{
    public function index()
    {
        $incident = new Incident();

        header('Content-Type: application/json');

        echo json_encode($incident->all());
    }

    public function show()
{
    $id = (int) ($_GET['id'] ?? 0);

    $incident = new Incident();

    echo json_encode(
        $incident->find($id)
    );
}


public function store()
{
    $data = json_decode(file_get_contents('php://input'), true);

    $incident = new Incident();

    $incident->create($data);

    header('Content-Type: application/json');

    echo json_encode([
        'status' => 'success',
        'message' => 'Incidencia creada correctamente'
    ]);
}

}
<?php

namespace App\Models;

class Material extends Model
{
    protected  static string $table = 'materiales';

    
    public function lowStock(): array
{
    $stmt = $this->db->prepare(
        "SELECT *
         FROM materiales
         WHERE stock <= minimum_stock"
    );

    $stmt->execute();

    return $stmt->fetchAll();
}
}
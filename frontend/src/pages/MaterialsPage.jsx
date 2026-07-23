import { useEffect, useState } from 'react'
import api from '../services/api'
import MaterialsTable from '../components/materials/MaterialsTable'
import MaterialsSearch from '../components/materials/MaterialsSearch'
import MaterialsStats from '../components/materials/MaterialsStats'

export default function MaterialsPage() {

    const [materials, setMaterials] = useState([])
    const [search, setSearch] = useState('')

    // Fallback loader for local materials when API is unavailable
    const getMaterials = async () => {
        // Return an empty array or provide sample local materials
        return []
    }

    useEffect(() => {

        const fetchMaterials = async () => {

            try {

                const response = await api.get('/api/materiales')

                setMaterials(response.data)

            } catch (error) {

                console.warn("API no disponible. Cargando materiales locales...", error);

    const data = await getMaterials();

    setMaterials(data);

            }

        }

        fetchMaterials()

    }, [])

    const filteredMaterials = materials.filter(material =>
        material.name.toLowerCase().includes(search.toLowerCase()) ||
        material.category.toLowerCase().includes(search.toLowerCase()) ||
        material.warehouse.toLowerCase().includes(search.toLowerCase()) ||
        material.supplier.toLowerCase().includes(search.toLowerCase())
    )

    return (

        <div className="materials-toolbar">

            <h1>Materiales</h1>

            <MaterialsSearch search={search} setSearch={setSearch} />
              <span className="results-count">

        {filteredMaterials.length} materiales

    </span>

            <MaterialsStats materials={filteredMaterials} />

            {filteredMaterials.length > 0 ? (
                <MaterialsTable materials={filteredMaterials} />
            ) : (
                <div className="empty-state">
                    <h3>🔍 Sin resultados</h3>
                    <p>No se ha encontrado ningún material.</p>
                </div>
            )}


        </div>

    )

}
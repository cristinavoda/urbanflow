import { useEffect, useState } from 'react'
import api from '../services/api'
import MaterialsTable from '../components/materials/MaterialsTable'
import MaterialsSearch from '../components/materials/MaterialsSearch'
import MaterialsStats from '../components/materials/MaterialsStats'

export default function MaterialsPage() {

    const [materials, setMaterials] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {

        const fetchMaterials = async () => {

            try {

                const response = await api.get('/api/materiales')

                setMaterials(response.data)

            } catch (error) {

                console.error(error)

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
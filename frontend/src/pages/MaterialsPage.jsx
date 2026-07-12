import { useEffect, useState } from 'react'
import api from '../services/api'

import MaterialsTable from '../components/materials/MaterialsTable'

export default function MaterialsPage() {

    const [materials, setMaterials] = useState([])

    useEffect(() => {

        const fetchMaterials = async () => {

            try {

                const response = await api.get('/api/materiales' , "/api/materials/low-stock")

                setMaterials(response.data)

            } catch (error) {

                console.error(error)

            }

        }

        fetchMaterials()

    }, [])

    return (

        <div>

            <h1>Materials</h1>

            <MaterialsTable materials={materials} />

        </div>

    )

}
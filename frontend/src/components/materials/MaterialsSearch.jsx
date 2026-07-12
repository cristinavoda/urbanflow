
import '../../styles/MaterialsSearch.css'

export default function MaterialsSearch({ search, setSearch }) {

    return (

        <div className="material-search">

            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="🔍 Buscar material, categoría, almacén o proveedor..."
            />

        </div>

    )

}
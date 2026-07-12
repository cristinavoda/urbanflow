export default function MaterialsStats({ materials }) {

    const totalMaterials = materials.length

    const lowStock = materials.filter(
        material => Number(material.stock) <= Number(material.minimum_stock)
    ).length
    const lowStockClass =
    lowStock > 0
        ? 'danger'
        : 'success'

    const warehouses = new Set(
        materials.map(material => material.warehouse)
    ).size

    const categories = new Set(
        materials.map(material => material.category)
    ).size

    return (

        <div className="materials-stats">

            <div className="kpi-card ">

                <h4>📦 Materiales</h4>

                <div className="kpi-value">
                    {totalMaterials}
                </div>

            </div>

            <div className={`kpi-card ${lowStockClass}`}>

                <h4>📉 Stock bajo</h4>

                <div className="kpi-value">
                    {lowStock}
                </div>

            </div>

            <div className="kpi-card">

                <h4>🏬 Almacenes</h4>

                <div className="kpi-value">
                    {warehouses}
                </div>

            </div>

            <div className="kpi-card">

                <h4>🏷 Categorías</h4>

                <div className="kpi-value">
                    {categories}
                </div>

            </div>

        </div>

    )

}
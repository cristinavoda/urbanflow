export default function MaterialsTable({ materials }) {

    return (

        <table>

            <thead>

                <tr>

                    <th>Name</th>

                    <th>Category</th>

                    <th>Stock</th>

                    <th>Warehouse</th>

                    <th>Supplier</th>

                </tr>

            </thead>

            <tbody>

                {materials.map(material => (

                    <tr key={material.id}>

                        <td>{material.name}</td>

                        <td>{material.category}</td>

                        <td>{material.stock}</td>

                        <td>{material.warehouse}</td>

                        <td>{material.supplier}</td>

                    </tr>

                ))}

            </tbody>

        </table>

    )

}
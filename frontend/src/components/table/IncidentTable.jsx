function IncidentTable({ incidents }) {

    return (

        <section className="incident-table">

            <h2>Recent Incidents</h2>

            <table>

                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Status</th>
                        <th>Priority</th>
                    </tr>

                </thead>

                <tbody>

                    {incidents.map((incident) => (

                        <tr key={incident.id}>

                            <td>{incident.id}</td>

                            <td>{incident.title}</td>

                            <td>{incident.status}</td>

                            <td>{incident.priority}</td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </section>

    )

}

export default IncidentTable
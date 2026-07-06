import KpiCard from './KpiCard'

function KPIs() {

    return (

        <section className="kpis">

            <KpiCard
                title="Incidents"
                value="20"
                color="#2563EB"
            />

            <KpiCard
                title="Pending"
                value="8"
                color="#EF4444"
            />

            <KpiCard
                title="In Progress"
                value="7"
                color="#F59E0B"
            />

            <KpiCard
                title="Resolved"
                value="5"
                color="#10B981"
            />

        </section>

    )

}

export default KPIs
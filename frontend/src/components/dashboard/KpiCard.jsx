function KpiCard({ title, value, color }) {
    return (
        <div className="kpi-card">

            <h4>{title}</h4>

            <span
                className="kpi-value"
                style={{ color }}
            >
                {value}
            </span>

        </div>
    )
}

export default KpiCard
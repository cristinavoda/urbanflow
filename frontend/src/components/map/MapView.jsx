import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function MapView({ incidents = [] }) {
    return (
        <section className="map-container">

            <h2>City Incidents Map</h2>

            <MapContainer
                center={[41.6176, 0.6200]}
                zoom={13}
                style={{
                    height: "420px",
                    borderRadius: "18px"
                }}
                
            >
                <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {incidents
    .filter(
        incident =>
            incident.latitude &&
            incident.longitude
    )
    .map(incident => (

        <Marker
            key={incident.id}
            position={[
                Number(incident.latitude),
                Number(incident.longitude)
            ]}
        >
            <Popup>

                <strong>{incident.title}</strong>

                <br />

                {incident.status}

                <br />

                Priority: {incident.priority}
            </Popup>

        </Marker>

))}
            </MapContainer>

        </section>
    )
}

export default MapView
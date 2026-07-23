const dashboard = {
    stats: {
        incidents: 50,
        pending: 21,
        inProgress: 16,
        resolved: 13,
        urgent: 9
    },

    resources: {
        materials: 25,
        lowStock: 5,
        workers: 15,
        availableWorkers: 9,
        busyWorkers: 5,
        unavailableWorkers: 1,
        vehicles: 10,
        availableVehicles: 6,
        busyVehicles: 3,
        maintenanceVehicles: 1
    },

    charts: {
        incidentsByCategory: [
            { name: "Alumbrado", value: 8 },
            { name: "Infraestructura", value: 10 },
            { name: "Limpieza", value: 7 },
            { name: "Tráfico", value: 6 },
            { name: "Parques", value: 5 },
            { name: "Agua", value: 6 },
            { name: "Mobiliario", value: 4 },
            { name: "Otros", value: 4 }
        ],

        incidentsByPriority: [
            { name: "Urgent", value: 9 },
            { name: "High", value: 14 },
            { name: "Medium", value: 17 },
            { name: "Low", value: 10 }
        ],

        incidentsByStatus: [
            { name: "Pending", value: 21 },
            { name: "In Progress", value: 16 },
            { name: "Resolved", value: 13 }
        ]
    }
};

export default dashboard;
import api from "./api";

import incidents from "../../data/incidents";
import materials from "../../data/materials";

const USE_LOCAL_DATA = true;
export async function getIncidents() {
    if (USE_LOCAL_DATA) {
        return incidents;
    }

    const response = await api.get("/api/incidents");

    return response.data;
}
export async function getMaterials() {

    if (USE_LOCAL_DATA) {

        return materials;
    }

    const response = await api.get("/api/materiales");

    return response.data;
}
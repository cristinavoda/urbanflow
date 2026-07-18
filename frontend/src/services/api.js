import axios from "axios";

const api = axios.create({
  baseURL: "https://urbanflow.freepage.cc/backend/index.php?route="
});

export default api;
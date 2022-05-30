import axios from "axios";

let apiUrl = "http://localhost:3000";

export class ApiService {
    async getCollection() {
        const url = `${apiUrl}/apis/database`;
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (e) {
            return e;
        }
    }
}
import {domain} from "../constants";
import axios from "axios";

export default class FirstService {
    static async GetFirstList() {
        const response = await axios.get(`${domain}/first`)
        console.log(response.data)
        return response.data
    }

    static async create(name,type) {
        debugger;
        const response = await axios.post(`${domain}/first`, {
            full_name: name,
            boat_type: type
        })
        return response.data
    }

}

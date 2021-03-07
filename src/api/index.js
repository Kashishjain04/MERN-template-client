import axios from "axios";

const appURL = "http://localhost:8080/app";

export const appInstance = axios.create({ baseURL: appURL });

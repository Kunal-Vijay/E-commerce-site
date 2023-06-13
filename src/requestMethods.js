import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN = process.env.REACT_APP_ADMIN_TOKEN;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `${TOKEN}` },
});
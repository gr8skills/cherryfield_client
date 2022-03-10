import axios from "axios";

// const httpClient = axios.create({
//   baseURL: `${process.env.baseUrl}/api`
// });

export const fetcher = async (url) => await axios.get(url).then(resp => resp.data);
export const serverUrl = process.env.baseUrl;


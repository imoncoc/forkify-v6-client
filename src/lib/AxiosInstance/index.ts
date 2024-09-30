import axios from "axios";
import { cookies } from "next/headers";

import envConfig from "@/src/config/envConfig";

const axiosInstance = axios.create({
  baseURL: envConfig.baseApi,
});

export default axiosInstance;

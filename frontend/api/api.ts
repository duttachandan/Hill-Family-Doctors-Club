import axios from "axios";
import { loadEnvConfig } from "@next/env";

const projectDir = process.cwd();
loadEnvConfig(projectDir);

const api = axios.create({
  baseURL: `${process.env.NODE_ENV}`,
  withCredentials: true,
});



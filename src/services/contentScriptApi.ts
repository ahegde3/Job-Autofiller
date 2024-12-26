import { Client } from "./../utils/crossContextCommunication/client";
export const contentScriptAPI = new Client(process.env.CONTENT_SCRIPT_URL)
import { Account, Client } from "appwrite";

const client = new Client();

const endPoint = process.env.NEXT_PUBLIC_SETENDPOINT;
const project = process.env.NEXT_PUBLIC_SETPROJECT;

if (!endPoint || !project) {
  throw new Error("Missing endpoint or project configuration");
}

client.setEndpoint(endPoint).setProject(project);

export const account = new Account(client);

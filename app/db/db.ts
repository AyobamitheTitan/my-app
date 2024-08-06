// import { drizzle } from "drizzle-orm/neon-http";
import {drizzle} from "drizzle-orm/postgres-js"
// import { neon } from "@neondatabase/serverless";
import postgres from 'postgres'
import { config } from "dotenv";

config({ path: ".env" }); // or .env.local

// const sql = neon(process.env.DATABASE_URL!);
const sql = postgres(process.env.DATABASE_URL!, {prepare:false});
export const db = drizzle(sql);
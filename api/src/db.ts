import mysql from "mysql2";
import * as dotenv from "dotenv";
dotenv.config();

export const db = mysql.createConnection({
  host: "localhost",
  user: "sakthi",
  password:"Admin",
  database: "lims"
}); 
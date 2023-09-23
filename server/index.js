import express, { json } from "express";
import { config } from "dotenv";
import user_routes from "./routes/users.js";
config();

const app = express();
app.use(json());

const port = 3000 || process.env.PORT;
app.use("/api/users", user_routes);

app.listen(port, () => {
  console.log("listening on port", port);
});

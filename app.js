import "dotenv/config";
import fastify from "fastify";
import cors from "@fastify/cors";

import { usersRoutes } from "./src/routes/usersRoutes.js";

const app = fastify();

// Register router with prefix
app.register(usersRoutes, { prefix: "/api/v1/users" });

app.register(cors, { origin: "*" });

app.listen(
  { port: process.env.PORT || 3000, host: process.env.HOST || "0.0.0.0" },
  (err) => {
    if (err) {
      throw new Error(err);
    }
    console.log(`server listening on http://localhost:${app.server.address().port}`);
  }
);

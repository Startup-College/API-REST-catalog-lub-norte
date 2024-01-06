import fastify from "fastify";
import exempleRoutes from "./src/routes/exempleRoutes.js";
import cors from "@fastify/cors";
import "dotenv/config";

const app = fastify();

// Register router with prefix
app.register(exempleRoutes, { prefix: "/" });

app.register(cors, { origin: "*" });

app.listen(
  { port: process.env.PORT || 3000, host: process.env.HOST || "0.0.0.0" },
  (err) => {
    if (err) {
      throw new Error(err);
    }
    console.log(`server listening on http://localhost:3000`);
  }
);

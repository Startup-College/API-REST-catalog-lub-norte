import fastify from "fastify";
import cors from "@fastify/cors";
import "dotenv/config";
import productsRoutes from "./src/routes/ProductsRoutes.js";

const app = fastify();

// Register router with prefix
app.register(productsRoutes, { prefix: "/" });

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

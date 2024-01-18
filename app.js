import "dotenv/config";
import fastify from "fastify";
import cors from "@fastify/cors";

import { usersRoutes } from "./src/routes/usersRoutes.js";
import productsRoutes from "./src/routes/ProductsRoutes.js";
import categoriesRoutes from "./src/routes/CategoriesRoutes.js";

const app = fastify();

app.register(usersRoutes, { prefix: "/api/v1/users" });
app.register(productsRoutes, { prefix: "/api/v1/products" });
app.register(categoriesRoutes, { prefix: "/api/v1/categories" })

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

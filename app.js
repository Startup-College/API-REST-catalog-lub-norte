import fastify from "fastify";
import productRoutes from "./src/routes/productRoutes.js";
import cors from "@fastify/cors";
import "dotenv/config";
import { prisma } from "./lib/database.js";

const app = fastify({ logger: true });

app.post("/create-user", async (request, reply) => {
  const query = await prisma.user.create({
    data: {
      name: request.body.name,
      email: request.body.email,
    },
  });
  return reply.status(201).send(query);
});

app.register(productRoutes, { prefix: "/products" });

app.register(cors, { origin: "*" });

app.listen(
  { port: process.env.PORT | 3000, host: process.env.HOST | "0.0.0.0" },
  (err, address) => {
    if (err) {
      app.log.error(err);
      process.exit(1);
    }
    app.log.info(`server listening on ${address}`);
  }
);

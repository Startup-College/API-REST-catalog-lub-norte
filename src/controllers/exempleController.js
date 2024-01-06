import { prisma } from "../../lib/database.js"; // Connect DB, manipulation tables - Model entity

const exempleController = {

  async exempleFunction (request, reply) {
    try {
      return reply.status(200).send(JSON.stringify({ message: "Hello World!" }));
    } catch (error) {
      return reply.status(500).send({ error: "Internal Server Error" });
    }
  },  
};

export default exempleController;

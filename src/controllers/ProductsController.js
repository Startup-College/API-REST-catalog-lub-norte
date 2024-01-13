import { prisma } from "../../lib/database.js";

const productsController = {

  async index(request, reply) {
    try {

      const list = await prisma.products.findMany()


      return reply.status(200).send(JSON.stringify(list));

    } catch (error) {

      return reply.status(500).send({ error: "erro ao procurar" });

    }

  },
};

export default productsController;
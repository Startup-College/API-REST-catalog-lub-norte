import { prisma } from "../../lib/database.js";

const productsController = {

  async index(request, reply) {
    const queryParams = request.query;

    try {


      const API = queryParams.API;


      const list = await prisma.products.findMany({
        where: { API_ACAE: API },
      });


      return reply.status(200).send(JSON.stringify(list));

    } catch (error) {

      return reply.status(500).send({ error: "erro ao procurar" });

    }

  },

  async create(request, reply) {

    const {
      name,
      API_ACAE,
      base,
      SAE,
      brand,
      description,
      liter,
      id_category
    } = request.body

    try {
      const newProducts = await prisma.products.create({
        data: {
          name,
          API_ACAE,
          base,
          SAE,
          brand,
          description,
          liter,
          id_category
        }
      });

      return reply.status(201).send(newProducts);
    } catch (error) {
      return reply.status(500).send(error.message);
    }
  }
};

export default productsController;
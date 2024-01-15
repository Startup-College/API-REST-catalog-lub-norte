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

  async create( request, reply) {

   const {
      name,
		  API_ACAE,
		  base,
		  SAE,
		  brand,
		  description,
		  liter,
		  id_user,
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
          id_user,
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
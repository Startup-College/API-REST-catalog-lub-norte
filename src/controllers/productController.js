import { prisma } from "../../lib/database.js";

const productController = {

  async listProduct(request, reply) {
    try {
      const products = await prisma.product.findMany();
      return reply.status(200).send(products);
    } catch (error) {
      console.error(error);
      return reply.status(500).send({ error: "Internal Server Error" });
    }
  },

  async createProduct(request, reply) {
    try {
      const { name, price } = request.body;
      const query = await prisma.product.create({ data: { name, price } });
      return reply.status(201).send(query);
    } catch (error) {
      console.error(error);
      return reply.status(500).send({ error: "Internal Server Error" });
    }
  },
  
};

export default productController;

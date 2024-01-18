import { prisma } from "../../lib/database.js";

const categoriesController = {
    async index(request, reply) {
        try {
            const listCategories = await prisma.categories.findMany();

            return reply.status(200).send(JSON.stringify(listCategories));
        }
        catch (error) {

            return reply.status(500).send({ error: "Erro ao procurar a categoria" });
        }
    }
};

export default categoriesController;

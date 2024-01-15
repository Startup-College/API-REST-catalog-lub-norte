import { prisma } from "../../lib/database.js";
import { authService } from "../middlewares/authService.js";
import bcrypt from "bcrypt";

export const usersControllers = {

  async register(request, reply) {
    const { name, surname, email, password, CPF_CNPJ, birth_date } =
      request.body;

    try {
      const userExists = await prisma.users.findFirst({
        where: {
          email: email,
        },
      });

      if (userExists) {
        return reply.status(400).send({ message: "Usuário Existente" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUsers = await prisma.users.create({
        data: {
          name,
          surname,
          email,
          password: hashedPassword,
          CPF_CNPJ,
          birth_date,
        },
      });

      return reply.status(201).send(newUsers);
    } catch (error) {
      console.log(error);
      return reply.status(500).send({ message: "Erro interno do servidor" });
    }
  },

  async login(request, reply) {
    const { email, password } = request.body;

    try {
      const user = await prisma.users.findFirst({
        where: {
          email,
        },
      });

      if (!user || !(await bcrypt.compare(password, user.password))) {
        
        return reply.status(400).send({
            message: "Verifique se as credenciais informadas estão corretas!",
        });
    }

      const token = await authService.generateToken({ id_user: user.id_user });

      user.password = undefined;

      return reply.status(200).send({ user, token });

    } catch (error) {
      console.log(error);
      return reply.status(500).send({ message: "Erro no Servidor" });
    }
  },
};

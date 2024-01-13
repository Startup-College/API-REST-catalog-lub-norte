import "dotenv/config";
import JWT from "jsonwebtoken";
import { prisma } from "../../lib/database.js";

export const authService = {
  generateToken(payload) {
    return new Promise((resolve, reject) => {
      JWT.sign(payload, process.env.SECRET_KEY, { expiresIn: "1d" },

       function (err, token) {
          if (err) {
            reject(new Error("ERR_INVALID_TOKEN"));
          } else {
            resolve(token);
          }
        }

      );
    });
  },

  verifyToken(token) {
    try {
      const decodedToken = JWT.verify(token, process.env.SECRET_KEY);
  
      if (!decodedToken.id) {
        throw new Error("ID do usuário não encontrado no token");
      }
  
      const user = prisma.users.findUnique({
        where: {
          id_user: decodedToken.id,
        },
      });
  
      return user;
    } catch (error) {
      return null;
    }
  },

  authenticateRequest: async (request, reply, done) => {
    const token = request.headers.authorization?.replace(/^Bearer /, "");

    if (!token) {
      reply.status(401).send({ message: "Rota não autorizado!" });
      return done();
    }

    const user = await authService.verifyToken(token);

    if (!user) {
      reply.status(404).send({ message: "Não autorizado: Token Inválido" });
      return done();
    }

    request.user = user;

    done();
  },
};

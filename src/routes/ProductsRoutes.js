import { authService } from "../middlewares/authService.js";
import productsController from "../controllers/ProductsController.js";

const productsRoutes = async (app) => {
  app.get("/lists", { preHandler: authService.authenticateRequest }, productsController.index);
  app.post("/create", { preHandler: authService.authenticateRequest }, productsController.create);
};

export default productsRoutes;

import { authService } from "../middlewares/authService.js";
import categoriesController from "../controllers/CategoriesController.js";

const categoriesRoutes = async (app) => {
    app.get("/categories", { preHandler: authService.authenticateRequest }, categoriesController.index);

}
export default categoriesRoutes;
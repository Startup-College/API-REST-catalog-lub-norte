import productsController from "../controllers/ProductsController.js";

// Router register

const productsRoutes = async (app) => {
    app.get("/produtos", productsController.productsFunction);
};

export default productsRoutes;
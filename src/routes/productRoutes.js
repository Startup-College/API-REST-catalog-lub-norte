import productController from "../controllers/productController.js";

const productRoutes = async (app) => {
    app.get("/list-product", productController.listProduct);
    app.post("/create-product", productController.createProduct);
};

export default productRoutes;
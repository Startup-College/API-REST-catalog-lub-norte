import exempleController from "../controllers/exempleController.js";

// Router register

const exempleRoutes = async (app) => {
    app.get("/exemple", exempleController.exempleFunction);
};

export default exempleRoutes;
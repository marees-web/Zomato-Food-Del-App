import express from "express"
import { param } from "express-validator";
import RestaurantController from "../controllers/RestaurantController";

const router=express.Router();
router.get('/:restaurantId',param('restaurantId').isString().trim().notEmpty().withMessage("RestaurantId Parameter must be a valid String"),
RestaurantController.getRestaurant)
router.get('/search/:city',param('city').isString().trim().notEmpty().withMessage("City Parameter must be a valid String"),
   RestaurantController.searchRestaurants);

   export default router;
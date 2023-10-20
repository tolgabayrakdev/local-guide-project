import express from "express";
import { CityController } from "../controllers/city-controller";


const router = express.Router();
const cityController = new CityController();

router.get("/", cityController.listCities);


export default router;
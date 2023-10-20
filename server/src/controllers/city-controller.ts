import { Request, Response } from "express";
import { CityService } from "../services/city-service";



export class CityController {
    private cityService = new CityService();

    public listCities = async (req: Request, res: Response): Promise<void> => {
        try {
            const result = await this.cityService.list();
            res.status(200).json({ cities: result });
        } catch (err) {
            res.status(500).json(err);
        }
    }

}
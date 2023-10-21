import pool from "../db";

export class CityService {

    public async list(): Promise<object> {
        const text = `
        SELECT name FROM city;
        `
        const result = await pool.query(text);
        const cities = result.rows;
        return cities;
    }
}
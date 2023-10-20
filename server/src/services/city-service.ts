import pool from "../db";

export class CityService {

    public async list(): Promise<object> {
        const text = `
        SELECT * FROM cities;
        `
        const result = await pool.query(text);
        const cities = result.rows[0];
        return cities;
    }
}
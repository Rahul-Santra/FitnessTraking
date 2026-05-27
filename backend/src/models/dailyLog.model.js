import { pool } from "../config/db.js";

export const createDailyLog =
  async (logData) => {
    const {
      userId,
      logDate,
      mood,
      energyLevel,
      notes,
    } = logData;

    const query = `
      INSERT INTO daily_logs (
        user_id,
        log_date,
        mood,
        energy_level,
        notes
      )
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *
    `;

    const values = [
      userId,
      logDate,
      mood,
      energyLevel,
      notes,
    ];

    const result = await pool.query(
      query,
      values
    );

    return result.rows[0];
  };

export const getDailyLogs =
  async (userId) => {
    const query = `
      SELECT *
      FROM daily_logs
      WHERE user_id = $1
      ORDER BY log_date DESC
    `;

    const result = await pool.query(
      query,
      [userId]
    );

    return result.rows;
  };

export const getTodayLog =
  async (
    userId,
    logDate
  ) => {
    const query = `
      SELECT *
      FROM daily_logs
      WHERE user_id = $1
      AND log_date = $2
    `;

    const result = await pool.query(
      query,
      [userId, logDate]
    );

    return result.rows[0];
  };
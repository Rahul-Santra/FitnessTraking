import { pool } from "../config/db.js";

export const createWorkoutLog =
  async (userId, workoutId) => {
    const query = `
      INSERT INTO workout_logs (
        user_id,
        workout_id,
        completed,
        completed_at
      )
      VALUES ($1, $2, $3, NOW())
      RETURNING *
    `;

    const values = [
      userId,
      workoutId,
      true,
    ];

    const result = await pool.query(
      query,
      values
    );

    return result.rows[0];
  };

export const getWorkoutHistory =
  async (userId) => {
    const query = `
      SELECT
        w.*,
        wl.completed,
        wl.completed_at
      FROM workouts w
      LEFT JOIN workout_logs wl
      ON w.id = wl.workout_id
      WHERE w.user_id = $1
      ORDER BY w.workout_date DESC
    `;

    const result = await pool.query(
      query,
      [userId]
    );

    return result.rows;
  };

  export const getCompletedWorkoutCount =
  async (userId) => {
    const query = `
      SELECT COUNT(*) AS count
      FROM workout_logs
      WHERE user_id = $1
      AND completed = true
    `;

    const result = await pool.query(
      query,
      [userId]
    );

    return parseInt(
      result.rows[0].count
    );
  };

export const getWorkoutLogs =
  async (userId) => {
    const query = `
      SELECT *
      FROM workout_logs
      WHERE user_id = $1
      ORDER BY completed_at DESC
    `;

    const result = await pool.query(
      query,
      [userId]
    );

    return result.rows;
  };
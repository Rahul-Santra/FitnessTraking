import { pool } from "../config/db.js";

export const createWorkout =
  async (workoutData) => {
    const {
      userId,
      workoutDate,
      workoutType,
      intensity,
      durationMinutes,
      plan,
    } = workoutData;

    const query = `
      INSERT INTO workouts (
        user_id,
        workout_date,
        workout_type,
        intensity,
        duration_minutes,
        plan
      )
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
    `;

    const values = [
      userId,
      workoutDate,
      workoutType,
      intensity,
      durationMinutes,
      plan,
    ];

    const result = await pool.query(
      query,
      values
    );

    return result.rows[0];
  };

export const getWorkoutByDate =
  async (
    userId,
    workoutDate
  ) => {
    const query = `
      SELECT *
      FROM workouts
      WHERE user_id = $1
      AND workout_date = $2
    `;

    const result = await pool.query(
      query,
      [userId, workoutDate]
    );

    return result.rows[0];
  };

  export const getWorkoutCount =
  async (userId) => {
    const query = `
      SELECT COUNT(*) AS count
      FROM workouts
      WHERE user_id = $1
    `;

    const result = await pool.query(
      query,
      [userId]
    );

    return parseInt(
      result.rows[0].count
    );
  };
import { pool } from "../config/db.js";

export const createCycle = async (
  cycleData
) => {
  const {
    userId,
    lastPeriodDate,
    cycleLength,
  } = cycleData;

  const query = `
    INSERT INTO cycles (
      user_id,
      last_period_date,
      cycle_length
    )
    VALUES ($1, $2, $3)
    RETURNING *
  `;

  const values = [
    userId,
    lastPeriodDate,
    cycleLength,
  ];

  const result = await pool.query(
    query,
    values
  );

  return result.rows[0];
};

export const getCycleByUserId =
  async (userId) => {
    const query = `
      SELECT *
      FROM cycles
      WHERE user_id = $1
    `;

    const result = await pool.query(
      query,
      [userId]
    );

    return result.rows[0];
  };

export const updateCycle = async (
  userId,
  cycleData
) => {
  const {
    lastPeriodDate,
    cycleLength,
  } = cycleData;

  const query = `
    UPDATE cycles
    SET
      last_period_date = $1,
      cycle_length = $2
    WHERE user_id = $3
    RETURNING *
  `;

  const values = [
    lastPeriodDate,
    cycleLength,
    userId,
  ];

  const result = await pool.query(
    query,
    values
  );

  return result.rows[0];
};
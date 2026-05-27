import { pool } from "../config/db.js";

export const createProfile = async (
  profileData
) => {
  const {
    userId,
    age,
    weight,
    height,
    gender,
    fitnessGoal,
    experienceLevel,
  } = profileData;

  const query = `
    INSERT INTO profiles (
      user_id,
      age,
      weight,
      height,
      gender,
      fitness_goal,
      experience_level
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *
  `;

  const values = [
    userId,
    age,
    weight,
    height,
    gender,
    fitnessGoal,
    experienceLevel,
  ];

  const result = await pool.query(
    query,
    values
  );

  return result.rows[0];
};

export const getProfileByUserId = async (
  userId
) => {
  const query = `
    SELECT *
    FROM profiles
    WHERE user_id = $1
  `;

  const result = await pool.query(
    query,
    [userId]
  );

  return result.rows[0];
};

export const updateProfile = async (
  userId,
  profileData
) => {
  const {
    age,
    weight,
    height,
    gender,
    fitnessGoal,
    experienceLevel,
  } = profileData;

  const query = `
    UPDATE profiles
    SET
      age = $1,
      weight = $2,
      height = $3,
      gender = $4,
      fitness_goal = $5,
      experience_level = $6
    WHERE user_id = $7
    RETURNING *
  `;

  const values = [
    age,
    weight,
    height,
    gender,
    fitnessGoal,
    experienceLevel,
    userId,
  ];

  const result = await pool.query(
    query,
    values
  );

  return result.rows[0];
};
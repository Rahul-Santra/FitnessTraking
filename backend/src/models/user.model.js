import { pool } from "../config/db.js";

export const createUser = async (email, password) => {
  const query = `
    INSERT INTO users (email, password)
    VALUES ($1, $2)
    RETURNING id, email, created_at
  `;

  const values = [email, password];

  const result = await pool.query(query, values);

  return result.rows[0];
};

export const findUserByEmail = async (email) => {
  const query = `
    SELECT * FROM users
    WHERE email = $1
  `;

  const result = await pool.query(query, [email]);

  return result.rows[0];
};

export const saveResetToken = async (
  email,
  token,
  expiry
) => {
  const query = `
    UPDATE users
    SET reset_token = $1,
        reset_token_expiry = $2
    WHERE email = $3
  `;

  await pool.query(query, [token, expiry, email]);
};

export const findUserByResetToken = async (token) => {
  const query = `
    SELECT * FROM users
    WHERE reset_token = $1
    AND reset_token_expiry > NOW()
  `;

  const result = await pool.query(query, [token]);

  return result.rows[0];
};

export const updatePassword = async (
  userId,
  newPassword
) => {
  const query = `
    UPDATE users
    SET password = $1,
        reset_token = NULL,
        reset_token_expiry = NULL
    WHERE id = $2
  `;

  await pool.query(query, [newPassword, userId]);
};
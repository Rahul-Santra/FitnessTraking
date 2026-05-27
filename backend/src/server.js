import app from "./app.js";

import { env } from "./config/env.js";

import { pool } from "./config/db.js";

const startServer = async () => {
  try {
    await pool.query("SELECT 1");

    console.log(
      "✅ Database Connected Successfully"
    );

    app.listen(
      env.PORT,
      () => {
        console.log(
          `🚀 Server running on port ${env.PORT}`
        );
      }
    );
  } catch (error) {
    console.error(
      "❌ Server Startup Failed"
    );

    console.error(
      error.message
    );

    process.exit(1);
  }
};

startServer();
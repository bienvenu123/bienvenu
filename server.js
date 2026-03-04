require("dotenv").config();
const connectDB = require("./config/db");
const app = require("./app");

const PORT = Number.parseInt(process.env.PORT || "3001", 10);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.error("DB connection failed:", err.message);
    process.exit(1);
  });


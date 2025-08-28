import express from "express";
import cors from "cors";
import db from "~/models";
import routes from "~/routes";
import compression from "compression";
import fileUpload from "express-fileupload";

const app = express();

// Middleware
app.use(cors());
app.use(compression());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

// Sync DB
db.sequelize.sync();

// Routes
routes.forEach(({ path, router }) => {
  app.use(path, router);
});

// Root route
app.get("/", (req, res) => {
  res.json({ response_status: "SUCCESS", message: "Gscm Service API !" });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    response_status: "ERROR",
    message: "Route not found",
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    response_status: "ERROR",
    message: err.message || "Internal Server Error",
  });
});

// Start server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

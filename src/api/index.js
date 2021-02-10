const adminRoutes = require("./admin");
const managerRoutes = require("./manager");
const clerkRoutes = require("./clerk");
const customerRoutes = require("./customer");


const endPointsHandler = (app) => {
  app.use("/api/admin/", adminRoutes);
  app.use("/api/manager/", managerRoutes);
  app.use("/api/clerk/", clerkRoutes);
  app.use("/api/clerk/", customerRoutes);
};

module.exports = { endPointsHandler };

import userRoutes from "./user.routes.js";
import dashboardRoutes from "./dashboard.routes.js";
import aboutRoutes from "./about.routes.js";
import innovationBannerRoutes from "./innovationBanner.routes.js";
import innovationTypeRoutes from "./innovationType.routes.js";
import communityOverviewRoutes from "./communityOverview.routes.js";
import communityTypeRoutes from "./communityType.routes.js";
import lifeLongLearningBannerRoutes from "./lifeLongLearningBanner.routes.js";
import courseRoutes from "./course.routes.js";
import academicNetworkRoutes from "./academicNetwork.routes.js";
import contactRoutes from "./contact.routes.js";

export default [
  { path: "/users", router: userRoutes },
  { path: "/dashboard", router: dashboardRoutes },
  { path: "/about", router: aboutRoutes },
  { path: "/innovationBanner", router: innovationBannerRoutes },
  { path: "/innovation-types", router: innovationTypeRoutes },
  { path: "/community-overview", router: communityOverviewRoutes },
  { path: "/community-types", router: communityTypeRoutes },
  { path: "/life-long-learning-banner", router: lifeLongLearningBannerRoutes },
  { path: "/courses", router: courseRoutes },
  { path: "/academic-network", router: academicNetworkRoutes },
  { path: "/contact", router: contactRoutes },
];

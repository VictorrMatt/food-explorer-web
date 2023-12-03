import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { AdminRoutes } from "./admin.routes";

import { useAuth } from "../hooks/auth";

export function Routes() {
  const { user } = useAuth();

  let routesToRender;

  if (user) {
    if (user.role === "admin") {
      routesToRender = <AdminRoutes />;
    } else {
      routesToRender = <AppRoutes />;
    }
  } else {
    routesToRender = <AuthRoutes />;
  }

  return <BrowserRouter>{routesToRender}</BrowserRouter>;
}

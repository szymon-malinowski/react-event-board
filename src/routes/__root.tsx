import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navbar from "../components/organisms/Navbar";

const RootLayout = () => (
  <>
    <Navbar />
    <main>
      <Outlet />
    </main>
    <TanStackRouterDevtools />
  </>
);

export const Route = createRootRoute({ component: RootLayout });

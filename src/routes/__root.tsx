import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Navbar from "../components/organisms/Navbar";
import ClerkHeader from "../components/organisms/ClerkHeader";

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

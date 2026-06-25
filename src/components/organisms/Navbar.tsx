import { Link } from "@tanstack/react-router";
import ClerkHeader from "./ClerkHeader";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start p-2 flex gap-2 items-center">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>
          <Link to="/dashboard" className="[&.active]:font-bold">
            Dashboard
          </Link>
          <Link to="/dashboard/events" className="[&.active]:font-bold">
            Events
          </Link>
          <Link to="/dashboard/calendar" className="[&.active]:font-bold">
            Calendar
          </Link>
          <Link to="/about" className="[&.active]:font-bold">
            About
          </Link>
        </div>
        <div className="navbar-end p-2">
          <ClerkHeader />
        </div>
      </div>
    </>
  );
}

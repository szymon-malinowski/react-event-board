import { Link } from "@tanstack/react-router";

export default function HeroSection() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Event Board</h1>
            <p className="py-6">Plan and track important Events easly.</p>
            <button className="btn btn-primary">
              <Link to="/dashboard">Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

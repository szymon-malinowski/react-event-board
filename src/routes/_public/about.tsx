import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/about")({
  component: About,
});

function About() {
  return (
    <div className="p-2">
      <h2>About us</h2>
      <p>This is a website that allows to plan events, and track them easly.</p>
    </div>
  );
}

import HeroSection from "../../components/organisms/HeroSection";
import "../../index.css";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <HeroSection />
    </>
  );
}

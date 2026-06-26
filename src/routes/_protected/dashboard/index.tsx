import { createFileRoute } from "@tanstack/react-router";
import CardBorder from "../../../components/molecules/SimpleCard";
import { initialEvents } from "../../../data/InitialEvents";

export const Route = createFileRoute("/_protected/dashboard/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex gap-6">
      {initialEvents.map((item) => (
        <div key={item.id}>
          <CardBorder title={item.status} description="0" />
        </div>
      ))}
    </div>
  );
}

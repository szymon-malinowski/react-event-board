import { createFileRoute, Link } from "@tanstack/react-router";
import { initialEvents } from "../../../../data/InitialEvents";
import EventCard from "../../../../components/molecules/EventCard";

export const Route = createFileRoute("/_protected/dashboard/events/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="flex flex-wrap gap-4">
        {initialEvents.map((item) => (
          <div key={item.id} className="flex flex-col">
            <EventCard
              id={item.id}
              title={item.title}
              description={item.description}
              date={item.date}
              time={item.time}
              location={item.location}
              category={item.category}
              status={item.status}
              maxAttendees={item.maxAttendees}
              attendees={item.attendees}
              createdAt={item.createdAt}
            />
            <Link to="/dashboard/events/$eventId" params={{ eventId: item.id }}>
              Details
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

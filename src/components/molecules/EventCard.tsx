import type { Event } from "../../data/types";

export default function EventCard({
  title,
  description,
  date,
  time,
  location,
  category,
  status,
  maxAttendees,
  attendees,
}: Event) {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="text-sm space-y-1">
            <p>
              <strong>Date:</strong> {date}
            </p>
            <p>
              <strong>Time:</strong> {time}
            </p>
            <p>
              <strong>Location:</strong> {location}
            </p>
            <p>
              <strong>Category:</strong> {category}
            </p>
            <p>
              <strong>Status:</strong> {status}
            </p>
            <p>
              <strong>Attendees:</strong> {attendees.length}/{maxAttendees}
            </p>
          </div>
          <div className="card-actions justify-end"></div>
          <button className="btn btn-primary">Edit</button>
          <button className="btn btn-secondary">Delete</button>
        </div>
      </div>
    </>
  );
}

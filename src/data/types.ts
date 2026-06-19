type EventStatus = "draft" | "published" | "cancelled" | "completed";

type EventCategory = "workshop" | "talk" | "networking" | "review" | "other";

type Attendee = {
  id: string;
  name: string;
  email: string;
};

type Event = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: EventCategory;
  status: EventStatus;
  maxAttendees: number;
  attendees: Attendee[];
  createdAt: string;
};

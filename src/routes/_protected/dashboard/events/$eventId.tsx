import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/dashboard/events/$eventId')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/dashboard/events/$eventId"!</div>
}

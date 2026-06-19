import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_protected/dashboard/events/$eventId/edit',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_protected/dashboard/events/$eventId/edit"!</div>
}

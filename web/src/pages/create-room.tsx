import { CreateRoomForm } from '@/components/create-room-form'
import { RoomList } from '@/components/room-list'

export function CreateRoom() {
  return (
    <main className="min-h-screen px-4 py-8">
      <section className="mx-auto max-w-4xl">
        <div className="grid grid-cols-2 items-start gap-8">
          <CreateRoomForm />
          <RoomList />
        </div>
      </section>
    </main>
  )
}

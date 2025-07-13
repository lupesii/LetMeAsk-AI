import { useRooms } from '@/http/use-room'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import { Link } from 'react-router-dom'
import { Badge } from './ui/badge'
import { dayjs } from '@/lib/dayjs'
import { ArrowRight } from 'lucide-react'

export function RoomList() {
  const { data, isLoading } = useRooms()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Salas recentes</CardTitle>
        <CardDescription>
          Acesso rápido para as salas criadas recentemente
        </CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-3">
        {isLoading && (
          <p className="text-muted-foreground text-sm">Carregando salas...</p>
        )}

        {data?.map((room) => {
          return (
            <Link
              className="flex items-center justify-between rounded-lg border p-3 hover:bg-accent/50"
              key={room.id}
              to={`/room/${room.id}`}
            >
              <section className="flex flex-1 flex-col gap-1">
                <h3 className="font-medium">{room.name}</h3>

                <div className="flex items-center gap-2">
                  <Badge className="text-xs" variant="secondary">
                    {dayjs(room.createAt).toNow()}
                  </Badge>
                  <Badge className="text-xs" variant="secondary">
                    {room.questionsCount} pergunta(s)
                  </Badge>
                </div>
              </section>

              <span className="flex items-center gap-1 text-sm">
                Entrar
                <ArrowRight className="size-3" />
              </span>
            </Link>
          )
        })}
      </CardContent>
    </Card>
  )
}

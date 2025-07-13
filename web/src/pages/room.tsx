import { QuestionForm } from '@/components/question-form'
import { QuestionItem } from '@/components/question-item'
import { Button } from '@/components/ui/button'
import type { RoomParams } from '@/http/types/room-params'
import { ArrowLeft, Radio } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'

export function Room() {
  const params = useParams<RoomParams>()

  if (!params.roomId) {
    return <Navigate replace to="/" />
  }

  return (
    <main className="min-h-screen px-4 py-8">
      <section className="container mx-auto max-w-4xl px-4 py-8">
        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="mr-1 size-4" />
                Volar ao inicio
              </Button>
            </Link>

            <Link to={`/room/${params.roomId}/audio`}>
              <Button variant="secondary">
                <Radio className="size-4" />
                Gravar Audio
              </Button>
            </Link>
          </div>
          <h1 className="mb-2 font-bold text-3xl text-foreground">
            Sala de Perguntas
          </h1>
          <p className="text-muted-foreground">
            Faça perguntas e receba respostas com IA
          </p>
        </div>

        <div className="mb-8">
          <QuestionForm roomId={params.roomId} />
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-2xl text-foreground">
              Perguntas e Respostas
            </h2>
          </div>

          <div>
            <QuestionItem
              question={{
                id: '1',
                question: 'Pergunta 1',
                createAt: new Date().toISOString(),
              }}
            />
          </div>
        </div>
      </section>
    </main>
  )
}

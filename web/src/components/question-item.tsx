import { Bot, Loader2, MessageSquare } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { dayjs } from '@/lib/dayjs'
import type { Question } from '@/http/types/question'

interface QuestionItemProps {
  question: Question
}

export function QuestionItem({ question }: QuestionItemProps) {
  return (
    <Card>
      <CardContent className="space-y-4">
        <section className="flex items-start space-x-3">
          <div className="flex-shrink-0">
            <div className="flex size-8 items-center justify-center rounded-full bg-primary/10">
              <MessageSquare className="size-4 text-primary" />
            </div>
          </div>

          <div className="flex-1">
            <p className="mb-1 font-medium text-foreground">Pergunta</p>
            <p className="whitespace-pre-line text-muted-foreground text-sm leading-relaxed">
              {question.question}
            </p>
          </div>
        </section>
        {(!!question.answer || question.isGeneratingAnswer) && (
          <section className="flex items-start space-x-3">
            <div className="flex size-8 items-center justify-center rounded-full bg-primary/10">
              <Bot className="size-4 text-secondary-foreground" />
            </div>
            <div className="flex-1">
              <p>Resposta da IA</p>
              <div className="text-muted-foreground">
                {question.isGeneratingAnswer ? (
                  <div className="flex items-center space-x-2">
                    <Loader2 className="size-4 animate-spin text-primary" />
                    <span className="text-primary text-sm italic">
                      Gerando resposta...
                    </span>
                  </div>
                ) : (
                  <p className="whitespace-pre-line text-sm leading-relaxed">
                    {question.answer}
                  </p>
                )}
              </div>
            </div>
          </section>
        )}

        <section className="flex justify-end">
          <span className="text-muted-foreground text-xs">
            {dayjs(question.createAt).toNow()}
          </span>
        </section>
      </CardContent>
    </Card>
  )
}

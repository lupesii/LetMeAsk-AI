import { z } from 'zod/v4'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

const createQuestionSchema = z.object({
  question: z
    .string()
    .min(1, { message: 'Pergunta é obrigatória' })
    .min(10, { message: 'Pergunta deve ter pelo menos 10 caracteres' })
    .max(500, { message: 'Pergunta deve ter menos de 500 caracteres' }),
})

type CreateQuestionFormData = z.infer<typeof createQuestionSchema>

interface QuestionFormProps {
  roomId: string
}

export function QuestionForm({ roomId }: QuestionFormProps) {
  const form = useForm<CreateQuestionFormData>({
    resolver: zodResolver(createQuestionSchema),
    defaultValues: {
      question: '',
    },
  })

  function handleCreateQuestion(data: CreateQuestionFormData) {
    // biome-ignore lint/suspicious/noConsole: dev
    console.log(data, roomId)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Fazer uma pergunta</CardTitle>
        <CardDescription>
          Digite sua pergunta abaixo para receber uma resposta gerada por I.A.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form
            className="flex flex-col gap-4"
            onSubmit={form.handleSubmit(handleCreateQuestion)}
          >
            <FormField
              control={form.control}
              name="question"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sua Pergunta</FormLabel>
                  <FormControl>
                    <Textarea
                      className="min-h-[100px]"
                      placeholder="O que você gostaria de saber?"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button className="w-full" type="submit">
              Enviar pergunta
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

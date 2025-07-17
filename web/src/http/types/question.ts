export interface Question {
  id: string
  question: string
  answer?: string | null
  createAt: string
  isGeneratingAnswer?: boolean
}

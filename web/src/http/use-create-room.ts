import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { createRoomRequest } from './types/create-room-request'
import type { createRoomResponse } from './types/create-room-response'

export function UseCreateRoom() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (data: createRoomRequest) => {
      const response = await fetch('http://localhost:3333/rooms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result: createRoomResponse = await response.json()
      return result
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['get-rooms'] })
    },
  })
}

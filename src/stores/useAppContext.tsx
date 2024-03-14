import { createContext } from 'react'

export const AppContext = createContext<{
  name?: string
  getName?: () => string
}>({
  name: '',
  getName: () => ''
})

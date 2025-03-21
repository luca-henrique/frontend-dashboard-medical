import {

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

interface ReactQueryClientProps {
  children: React.ReactNode
}

export const ReactQueryClient = ({ children }: ReactQueryClientProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
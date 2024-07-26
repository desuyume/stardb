import { QueryClientProvider } from 'react-query'

export interface QueryProviderProperties
	extends React.ComponentProps<typeof QueryClientProvider> {
	children: React.ReactNode
}

export function QueryProvider({ children, client }: QueryProviderProperties) {
	return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

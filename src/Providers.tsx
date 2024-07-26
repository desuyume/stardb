import { FC } from 'react'
import { QueryProvider, QueryProviderProps } from 'utils/contexts/query'

export interface ProvidersProps {
	children: React.ReactNode
	query: Omit<QueryProviderProps, 'children'>
}

const Providers: FC<ProvidersProps> = ({ query, children }) => {
	return <QueryProvider {...query}>{children}</QueryProvider>
}

export default Providers

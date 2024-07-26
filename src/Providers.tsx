import { FC } from 'react'
import { QueryProvider, QueryProviderProps } from 'utils/contexts/query'

export interface ProvidersProperties {
	children: React.ReactNode
	query: Omit<QueryProviderProps, 'children'>
}

const Providers: FC<ProvidersProperties> = ({ query, children }) => {
	return <QueryProvider {...query}>{children}</QueryProvider>
}

export default Providers

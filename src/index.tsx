import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Providers from './Providers'
import type { ProvidersProps } from './Providers'
import { QueryClient } from 'react-query'

const queryClient = new QueryClient({
	defaultOptions: { queries: { refetchOnWindowFocus: false } }
})

const providersProps: Omit<ProvidersProps, 'children'> = {
	query: { client: queryClient }
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<Providers {...providersProps}>
			<App />
		</Providers>
	</React.StrictMode>
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient } from 'react-query'
import App from './App'
import Providers from './Providers'
import type { ProvidersProps as ProvidersProperties } from './Providers'

const queryClient = new QueryClient({
	defaultOptions: { queries: { refetchOnWindowFocus: false } }
})

const providersProperties: Omit<ProvidersProperties, 'children'> = {
	query: { client: queryClient }
}

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement)
root.render(
	<React.StrictMode>
		<Providers {...providersProperties}>
			<App />
		</Providers>
	</React.StrictMode>
)

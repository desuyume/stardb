import { generateQueryString } from 'lib/utils'
import { api } from 'utils/api/instance'
import { ENDPOINTS } from 'utils/constants/endpoints'

interface GetStarshipsResponse {
	count: number
	next: string
	previous: string | null
	results: Starship[]
}

export interface GetStarshipsParams {
	query?: {
		search: string | null
		page: number | null
	}
}

type GetStarshipsRequestConfig = RequestConfig<GetStarshipsParams>

export const getStarships = ({ params, config }: GetStarshipsRequestConfig) => {
	const queryString = generateQueryString(params.query)
	return api.get<GetStarshipsResponse>(
		`${ENDPOINTS.STARSHIPS}${queryString}`,
		config
	)
}

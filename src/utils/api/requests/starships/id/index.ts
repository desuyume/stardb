import { api } from 'utils/api/instance'
import { ENDPOINTS } from 'utils/constants/endpoints'

export interface GetStarshipsIdParams {
	id: string
}

type GetStarshipsIdRequestConfig = RequestConfig<GetStarshipsIdParams>

export const getStarshipsId = (parameters?: GetStarshipsIdRequestConfig) =>
	api.get<Starship>(
		`${ENDPOINTS.STARSHIPS}/${parameters?.params.id}`,
		parameters?.config
	)

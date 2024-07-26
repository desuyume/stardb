import { api } from 'utils/api/instance'
import { ENDPOINTS } from 'utils/constants/endpoints'

export interface GetStarshipsIdParameters {
	id: string
}

type GetStarshipsIdRequestConfig = RequestConfig<GetStarshipsIdParameters>

export const getStarshipsId = (parameters?: GetStarshipsIdRequestConfig) =>
	api.get<Starship>(
		`${ENDPOINTS.STARSHIPS}/${parameters?.params.id}`,
		parameters?.config
	)

import { useQuery } from 'react-query'
import { STARSHIPS_QUERY_KEYS } from 'utils/constants/queryKeys'
import {
	getStarshipsId,
	GetStarshipsIdParams as GetStarshipsIdParameters
} from '../requests/starships/id'

export const useGetStarshipsIdQuery = (
	parameters: GetStarshipsIdParameters,
	settings?: QuerySettings<typeof getStarshipsId>
) =>
	useQuery({
		queryKey: [STARSHIPS_QUERY_KEYS.GET_STARSHIPS_ID, parameters.id],
		queryFn: () =>
			getStarshipsId({ params: parameters, config: settings?.config }),
		...settings?.options
	})

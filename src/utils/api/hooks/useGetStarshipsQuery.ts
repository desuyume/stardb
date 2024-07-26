import { useQuery } from 'react-query'
import { STARSHIPS_QUERY_KEYS } from 'utils/constants/queryKeys'
import {
	getStarships,
	GetStarshipsParam as GetStarshipsParameter
} from '../requests/starships'

export const useGetStarshipsQuery = (
	parameters: GetStarshipsParameter,
	settings?: QuerySettings<typeof getStarships>
) =>
	useQuery({
		queryKey: [STARSHIPS_QUERY_KEYS.GET_STARSHIPS, parameters.query],
		queryFn: () =>
			getStarships({ params: parameters, config: settings?.config }),
		...settings?.options
	})

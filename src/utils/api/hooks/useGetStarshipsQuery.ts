import { useQuery } from 'react-query'
import { getStarships, GetStarshipsParam } from '../requests/starships'
import { STARSHIPS_QUERY_KEYS } from 'utils/constants/queryKeys'

export const useGetStarshipsQuery = (
	params: GetStarshipsParam,
	settings?: QuerySettings<typeof getStarships>
) =>
	useQuery({
		queryKey: [STARSHIPS_QUERY_KEYS.GET_STARSHIPS, params.query],
		queryFn: () => getStarships({ params, config: settings?.config }),
		...settings?.options
	})

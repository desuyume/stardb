import { useQuery } from 'react-query'
import { STARSHIPS_QUERY_KEYS } from 'utils/constants/queryKeys'
import { getStarships, GetStarshipsParams } from '../requests/starships'

export const useGetStarshipsQuery = (
	params: GetStarshipsParams,
	settings?: QuerySettings<typeof getStarships>
) =>
	useQuery({
		queryKey: [STARSHIPS_QUERY_KEYS.GET_STARSHIPS, params.query],
		queryFn: () => getStarships({ params: params, config: settings?.config }),
		...settings?.options
	})

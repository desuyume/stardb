import { useQuery } from 'react-query'
import { STARSHIPS_QUERY_KEYS } from 'utils/constants/queryKeys'
import { getStarshipsId, GetStarshipsIdParams } from '../requests/starships/id'

export const useGetStarshipsIdQuery = (
	params: GetStarshipsIdParams,
	settings?: QuerySettings<typeof getStarshipsId>
) =>
	useQuery({
		queryKey: [STARSHIPS_QUERY_KEYS.GET_STARSHIPS_ID, params.id],
		queryFn: () => getStarshipsId({ params, config: settings?.config }),
		...settings?.options
	})

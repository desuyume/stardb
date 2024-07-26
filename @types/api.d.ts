interface MutationSettings<Params = void, Func = unknown> {
	config?: ApiRequestConfig
	options?: import('react-query').UseMutationOptions<
		Awaited<ReturnType<Func>>,
		any,
		Params,
		any
	>
}

interface QuerySettings<Func = unknown> {
	config?: ApiRequestConfig
	options?: Omit<
		import('react-query').UseQueryOptions<
			Awaited<ReturnType<Func>>,
			any,
			Awaited<ReturnType<Func>>,
			any
		>,
		'queryKey'
	>
}

type ApiRequestConfig = import('axios').AxiosRequestConfig

type RequestConfig<Params = undefined> = Params extends undefined
	? { config?: ApiRequestConfig }
	: { params: Params; config?: ApiRequestConfig }

interface BaseResponse {
	message: string
}

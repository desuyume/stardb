interface MutationSettings<Parameters_ = void, Function_ = unknown> {
	config?: ApiRequestConfig
	options?: import('react-query').UseMutationOptions<
		Awaited<ReturnType<Function_>>,
		any,
		Parameters_,
		any
	>
}

interface QuerySettings<Function_ = unknown> {
	config?: ApiRequestConfig
	options?: Omit<
		import('react-query').UseQueryOptions<
			Awaited<ReturnType<Function_>>,
			any,
			Awaited<ReturnType<Function_>>,
			any
		>,
		'queryKey'
	>
}

type ApiRequestConfig = import('axios').AxiosRequestConfig

type RequestConfig<Parameters_ = undefined> = Parameters_ extends undefined
	? { config?: ApiRequestConfig }
	: { params: Parameters_; config?: ApiRequestConfig }

interface BaseResponse {
	message: string
}

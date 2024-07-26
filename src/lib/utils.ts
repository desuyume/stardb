export const formatCredits = (value: string) => {
	if (!isNumber(value)) return 'unknown'
	const dollars = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	}).format(+value)
	return dollars.split('.')[0].replaceAll(',', '.')
}

export const formatDate = (value: string) => {
	if (!value) return 'unknown'

	return value.split('T')[0].split('-').reverse().join('.')
}

export const isNumber = (value: string) => {
	return !isNaN(Number(value))
}

export const getStarshipId = (url: string) => {
	const urlArray = url.split('/')
	return urlArray.at(-2)
}

export const generateQueryString = (searchParams?: {
	[key: string]: any
}): string => {
	if (!searchParams) return ''

	const queryParameters: string[] = []

	for (const key in searchParams) {
		if (!searchParams[key]) continue

		if (
			searchParams.hasOwnProperty.call(searchParams, key) &&
			searchParams[key] !== undefined
		) {
			const parameterValue = searchParams[key]
			if (Array.isArray(parameterValue)) {
				for (const value of parameterValue) {
					queryParameters.push(
						`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
					)
				}
			} else {
				queryParameters.push(
					`${encodeURIComponent(key)}=${encodeURIComponent(parameterValue)}`
				)
			}
		}
	}

	return queryParameters.length > 0 ? `?${queryParameters.join('&')}` : ''
}

export const generatePagination = (c: number, m: number) => {
	const current = c
	const last = m
	const delta = 2
	const left = current - delta
	const right = current + delta + 1
	const range = []
	const rangeWithDots = []
	let l

	for (let index = 1; index <= last; index++) {
		if (index === 1 || index === last || (index >= left && index < right)) {
			range.push(index)
		}
	}

	for (const index of range) {
		if (l) {
			if (index - l === 2) {
				rangeWithDots.push(l + 1)
			} else if (index - l !== 1) {
				rangeWithDots.push('...')
			}
		}
		rangeWithDots.push(index)
		l = index
	}

	return rangeWithDots
}

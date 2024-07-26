export const formatCredits = (value: string) => {
	if (!isNumber(value)) return 'unknown'
	let dollars = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD'
	}).format(+value)
	return dollars.split('.')[0].replace(/,/g, '.')
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
	return urlArray[urlArray.length - 2]
}

export const generateQueryString = (params?: {
	[key: string]: any
}): string => {
	if (!params) return ''

	const queryParams: string[] = []

	for (const key in params) {
		if (!params[key]) continue

		if (params.hasOwnProperty(key) && params[key] !== undefined) {
			let paramValue = params[key]
			if (Array.isArray(paramValue)) {
				paramValue.forEach(value => {
					queryParams.push(
						`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
					)
				})
			} else {
				queryParams.push(
					`${encodeURIComponent(key)}=${encodeURIComponent(paramValue)}`
				)
			}
		}
	}

	return queryParams.length > 0 ? '?' + queryParams.join('&') : ''
}

export const generatePagination = (c: number, m: number) => {
	let current = c,
		last = m,
		delta = 2,
		left = current - delta,
		right = current + delta + 1,
		range = [],
		rangeWithDots = [],
		l

	for (let i = 1; i <= last; i++) {
		if (i === 1 || i === last || (i >= left && i < right)) {
			range.push(i)
		}
	}

	for (let i of range) {
		if (l) {
			if (i - l === 2) {
				rangeWithDots.push(l + 1)
			} else if (i - l !== 1) {
				rangeWithDots.push('...')
			}
		}
		rangeWithDots.push(i)
		l = i
	}

	return rangeWithDots
}

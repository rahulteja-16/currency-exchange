import { API } from '../constants'
import { ReqHeaders } from '../types'

const fetchApi = async (obj: ReqHeaders) => {
	const { url, ...reqObj } = obj
	return await fetch(url, { ...reqObj }).then((res) => res.json())
}

export const getHeaders = () => {
	return {
		Authorization: `ApiKey ${API.KEY}`,
	}
}

export default fetchApi

export enum Status {
	IDLE,
	LOADING,
	FETCHED,
	ERROR,
}
export interface ReqHeaders {
	method: string
	url: string
	[name: string]: any
}

export enum RequestTypes {
	GET = 'get',
	POST = 'post',
}

export enum DeviceTypes {
	MOBILE = 'mobile',
	TAB = 'tab',
	DESKTOP = 'desktop',
}

export interface WindowResizeType {
	width: undefined | number
	height: undefined | number
}

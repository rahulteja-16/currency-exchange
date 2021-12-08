import { createSlice } from '@reduxjs/toolkit'
import { DeviceTypes, MetaType } from '../../types'

const initialState: MetaType = {
	deviceType: DeviceTypes.MOBILE,
	isLoading: false,
	isError: false,
	errorMessage: '',
}

export const metaSlice = createSlice({
	name: 'meta',
	initialState,
	reducers: {
		// updateDeviceType: (state, action: PayloadAction<WindowResizeType>) => {
		// 	if (
		// 		action.payload.width === undefined ||
		// 		action.payload.width <= 481
		// 	) {
		// 		state.deviceType = DeviceTypes.MOBILE
		// 	} else if (action.payload.width > 481 && action.payload.width <= 961) {
		// 		state.deviceType = DeviceTypes.TAB
		// 	} else {
		// 		state.deviceType = DeviceTypes.DESKTOP
		// 	}
		// },
		// setLoadingStatus: (state, action: PayloadAction<boolean>) => {
		// 	state.isLoading = action.payload
		// },
		// setErrorStatus: (state, action: PayloadAction<ErrorObjType>) => {
		// 	state.isError = action.payload.status
		// 	state.errorMessage = action.payload.message
		// },
	},
})

// export const { updateDeviceType, setLoadingStatus, setErrorStatus } =
// 	metaSlice.actions

export default metaSlice.reducer

import { SET_DATE_STAMP } from '../actions/setDateStamp';
import { DateStampAction } from '../types';

export const initialState = '';

export const dateStamp = (state = initialState, action:DateStampAction) => {
	switch (action.type) {
		case SET_DATE_STAMP:
			return action.payload;

		default:
			return state;
	}
};

export default dateStamp;

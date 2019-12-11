import { SET_IS_ERROR } from '../actions/setIsError';
import { IsErrorAction } from '../types';

export const initialState = false;

export const isError = (state = initialState, action:IsErrorAction) => {
	switch (action.type) {
		case SET_IS_ERROR:
			return action.payload;

		default:
			return state;
	}
};

export default isError;

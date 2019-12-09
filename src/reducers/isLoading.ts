import { IsLoadingAction } from '../types';
import { SET_IS_LOADING } from '../actions/setIsLoading';

export const initialState = true;

export const isLoading = (state = initialState, action:IsLoadingAction) => {
	switch (action.type) {
		case SET_IS_LOADING:
			return action.payload;

		default:
			return state;
	}
};

export default isLoading;
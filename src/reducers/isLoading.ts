import { SET_IS_LOADING } from '../actions/setIsLoading';
import { IsLoadingAction } from '../types';

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

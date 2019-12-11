import { SET_IS_LOADING } from '../actions/setIsLoading';
import { IsLoadingAction } from '../types';
import isLoading from './isLoading';

describe('isLoading reducer', () => {

	it('returns default state if not type is given', () => {
		const newState = isLoading(undefined, ({} as IsLoadingAction));
		expect(newState).toEqual(true);
	});

	it('returns new state if receiving type', () => {
		const mockIsLoadingAction:IsLoadingAction = {
			type: SET_IS_LOADING,
			payload: false,
		};

		const newState = isLoading(true, mockIsLoadingAction);
		expect(newState).toEqual(false);
	});

});

import { SET_IS_ERROR } from '../actions/setIsError';
import { IsErrorAction } from '../types';
import isError from './isError';

describe('isError reducer', () => {

	it('returns default state if not type is given', () => {
		const newState = isError(undefined, ({} as IsErrorAction));
		expect(newState).toEqual(false);
	});

	it('returns new state if receiving type', () => {

		const mockIsErrorAction:IsErrorAction = {
			type: SET_IS_ERROR,
			payload: true,
		};

		const newState = isError(false, mockIsErrorAction);
		expect(newState).toEqual(true);
	});

});

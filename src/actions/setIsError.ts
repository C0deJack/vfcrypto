import { IsError, IsErrorAction } from '../types';

export const SET_IS_ERROR = 'SET_IS_ERROR';

export const setIsError = (payload:IsError):IsErrorAction => ({
	type: SET_IS_ERROR,
	payload,
});

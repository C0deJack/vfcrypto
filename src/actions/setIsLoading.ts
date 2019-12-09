import { IsLoading, IsLoadingAction } from "../types";

export const SET_IS_LOADING = 'SET_IS_LOADING';

export const setIsLoading = (payload:IsLoading):IsLoadingAction => ({
	type: SET_IS_LOADING,
	payload,
});

import { DateStampAction } from '../types';

export const SET_DATE_STAMP = 'SET_DATE_STAMP';

export const setDateStamp = (payload:Date):DateStampAction => ({
	type: SET_DATE_STAMP,
	payload,
});

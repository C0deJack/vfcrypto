import { DisplayCurrency, DisplayCurrencyAction } from "../types";

export const SET_DISPLAY_CURRENCY = 'SET_DISPLAY_CURRENCY';

export const setDisplayCurrency = (payload:DisplayCurrency):DisplayCurrencyAction => ({
	type: SET_DISPLAY_CURRENCY,
	payload,
});

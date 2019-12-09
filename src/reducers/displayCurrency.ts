import { DisplayCurrencyAction } from '../types';
import { SET_DISPLAY_CURRENCY } from '../actions/setDisplayCurrency';

export const initialState = 'USD';

export const displayCurrency = (state = initialState, action:DisplayCurrencyAction) => {
	switch (action.type) {
		case SET_DISPLAY_CURRENCY:
			return action.payload;

		default:
			return state;
	}
};

export default displayCurrency;
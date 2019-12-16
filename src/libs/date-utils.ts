import { format } from 'date-fns';
import en_GB from 'date-fns/locale/en-GB';

type SupportedLocale = 'en-GB';

const localeDateFormat = {
	'en-GB': {
		format: 'do MMM h:mm a',
		localisation: en_GB,
	},
};

export const getLocalisedDateString = (inputDate:string | Date, locale:SupportedLocale ):string => {
	const date = inputDate instanceof Date ?
		inputDate :
		new Date(inputDate);

	const localeDateFormatString = localeDateFormat[locale].format;

	return format(date, localeDateFormatString, {locale: localeDateFormat[locale].localisation});
};

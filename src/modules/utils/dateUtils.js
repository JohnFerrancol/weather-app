import { format } from 'date-fns';

const getDayOfTheWeek = (date) => format(date, 'EEEEEEEEE');
const formatDate = (date) => format(date, 'dd LLLL, yyyy');

export { getDayOfTheWeek, formatDate };

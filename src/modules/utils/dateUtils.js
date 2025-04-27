import { format } from 'date-fns';

const getDayOfTheWeek = (date) => format(date, 'EEEEEEEEE');
const formatDate = (date) => format(date, 'dd LLLL, yyyy');
const formatTime = (time) => format(time, 'h a');

export { getDayOfTheWeek, formatDate, formatTime };

import { format } from 'date-fns';

// Functions used to get the current day of the week, formatting the dates and the time
const getDayOfTheWeek = (date) => format(date, 'EEEEEEEEE');
const formatDate = (date) => format(date, 'dd LLLL, yyyy');
const formatTime = (time) => format(time, 'h a');

export { getDayOfTheWeek, formatDate, formatTime };

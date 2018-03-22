import { DateTime } from 'luxon';

const dateToLocaleString = (date, format = DateTime.DATE_MED) =>
  DateTime.fromISO(date, { zone: 'utc' }).toLocaleString(format);

export default dateToLocaleString;

import {
  differenceInCalendarDays,
  endOfDay,
  format,
  startOfDay,
} from 'date-fns';
import { UTCDate } from '@date-fns/utc';

export const toDateRange = (startDate: string, endDate: string) => ({
  startDate: startOfDay(new UTCDate(startDate)).toISOString(),
  endDate: endOfDay(new UTCDate(endDate)).toISOString(),
});

export const toDateInputValue = (date: string) =>
  format(new UTCDate(date), 'yyyy-MM-dd');

export const getDaysLeft = (endDate: string) =>
  Math.max(
    0,
    differenceInCalendarDays(new UTCDate(endDate), new UTCDate()),
  );

import { dayKey, startOfDay } from './dates';

export const sumCups = (records) => records.reduce((total, record) => total + Number(record.times), 0);

/** Groups records (already sorted newest first) into `[{ key, date, records, total }]`. */
export const groupRecordsByDay = (records) => {
  const groups = new Map();
  records.forEach((record) => {
    const key = dayKey(record.date_added);
    if (!groups.has(key)) {
      groups.set(key, { key, date: startOfDay(record.date_added), records: [] });
    }
    groups.get(key).records.push(record);
  });
  return [...groups.values()].map((group) => ({ ...group, total: sumCups(group.records) }));
};

/** Cups per drink, e.g. `[{ list: 'water', icon, total }]`, biggest first. */
export const totalsByDrink = (records) => {
  const totals = new Map();
  records.forEach(({ list, icon, times }) => {
    const current = totals.get(list) ?? { list, icon, total: 0 };
    current.total += Number(times);
    totals.set(list, current);
  });
  return [...totals.values()].sort((a, b) => b.total - a.total);
};

/** Totals for the last `days` days (oldest first), including empty days. */
export const lastDaysTotals = (records, days = 7, now = new Date()) => {
  const byDay = new Map();
  records.forEach((record) => {
    const key = dayKey(record.date_added);
    byDay.set(key, (byDay.get(key) ?? 0) + Number(record.times));
  });
  return Array.from({ length: days }, (_, index) => {
    const date = startOfDay(now);
    date.setDate(date.getDate() - (days - 1 - index));
    return { key: dayKey(date), date, total: byDay.get(dayKey(date)) ?? 0 };
  });
};

export const DAILY_GOAL_CUPS = 8;

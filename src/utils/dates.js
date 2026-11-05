/** Date helpers built on `Intl` (no external date library needed). */
const DAY_MS = 24 * 60 * 60 * 1000;

export const startOfDay = (value) => {
  const date = new Date(value);
  date.setHours(0, 0, 0, 0);
  return date;
};

/** `YYYY-MM-DD` key in local time, used to group records by day. */
export const dayKey = (value) => {
  const date = new Date(value);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
};

const daysBetween = (from, to) => Math.round((startOfDay(to) - startOfDay(from)) / DAY_MS);

const weekdayFormat = new Intl.DateTimeFormat('en-US', { weekday: 'long' });
const longFormat = new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'short', day: 'numeric' });
const timeFormat = new Intl.DateTimeFormat('en-US', { hour: 'numeric', minute: '2-digit' });
const shortWeekday = new Intl.DateTimeFormat('en-US', { weekday: 'narrow' });

/** "Today", "Yesterday", "Monday" (this week) or "Monday, Nov 3". */
export const formatDayLabel = (value, now = new Date()) => {
  const diff = daysBetween(value, now);
  if (diff === 0) return 'Today';
  if (diff === 1) return 'Yesterday';
  if (diff > 1 && diff < 7) return weekdayFormat.format(new Date(value));
  return longFormat.format(new Date(value));
};

export const formatTime = (value) => timeFormat.format(new Date(value));

export const formatNarrowWeekday = (value) => shortWeekday.format(new Date(value));

export const isSameDay = (a, b) => dayKey(a) === dayKey(b);

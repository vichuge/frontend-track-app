import { groupRecordsByDay, lastDaysTotals, sumCups, totalsByDrink } from './records';
import { formatDayLabel } from './dates';

const now = new Date(2026, 10, 5, 15, 0);
const at = (daysAgo, hour) => {
  const date = new Date(now);
  date.setDate(date.getDate() - daysAgo);
  date.setHours(hour, 0, 0, 0);
  return date.toISOString();
};

const records = [
  { id: 3, times: 2, list: 'water', icon: 'fas fa-water', date_added: at(0, 10) },
  { id: 2, times: 1, list: 'coffee', icon: 'fas fa-mug-hot', date_added: at(0, 8) },
  { id: 1, times: 3, list: 'water', icon: 'fas fa-water', date_added: at(2, 9) },
];

describe('record helpers', () => {
  it('sums cups', () => {
    expect(sumCups(records)).toBe(6);
  });

  it('groups records by local day keeping order', () => {
    const groups = groupRecordsByDay(records);
    expect(groups.map((group) => group.total)).toEqual([3, 3]);
    expect(groups[0].records.map((record) => record.id)).toEqual([3, 2]);
  });

  it('totals per drink, biggest first', () => {
    expect(totalsByDrink(records).map(({ list, total }) => [list, total]))
      .toEqual([['water', 5], ['coffee', 1]]);
  });

  it('builds a 7-day series including empty days', () => {
    const week = lastDaysTotals(records, 7, now);
    expect(week).toHaveLength(7);
    expect(week.map((day) => day.total)).toEqual([0, 0, 0, 0, 3, 0, 3]);
  });

  it('labels days in a human way', () => {
    expect(formatDayLabel(at(0, 9), now)).toBe('Today');
    expect(formatDayLabel(at(1, 9), now)).toBe('Yesterday');
    expect(formatDayLabel(at(3, 9), now)).toBe('Monday');
    expect(formatDayLabel(at(10, 9), now)).toMatch(/Oct 26/);
  });
});

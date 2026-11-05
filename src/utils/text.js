export const capitalize = (value = '') => value.charAt(0).toUpperCase() + value.slice(1);

export const pluralize = (count, singular, plural = `${singular}s`) => (
  `${count} ${count === 1 ? singular : plural}`
);

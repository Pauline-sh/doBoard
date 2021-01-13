const days: string[] = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

const months: string[] = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

const formatMonth = (date: Date): string => {
  return months[date.getMonth()];
};

const formatDay = (date: Date): string => {
  return days[date.getDay()];
};

const compareDates = (dateOne: Date, dateTwo: Date): boolean => {
  return (
    dateOne.getDate() === dateTwo.getDate() &&
    dateOne.getMonth() === dateTwo.getMonth() &&
    dateOne.getFullYear() === dateTwo.getFullYear()
  );
};

export const isToday = (date: Date): boolean => {
  const today = new Date();

  return compareDates(date, today);
};

export const isYesterday = (date: Date): boolean => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  return compareDates(date, yesterday);
};

export const isTomorrow = (date: Date): boolean => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return compareDates(date, tomorrow);
};

export const formatDate = (date: Date): string => {
  let dayMarker = '';
  if (isToday(date)) {
    dayMarker = 'Сегодня, ';
  } else if (isYesterday(date)) {
    dayMarker = 'Вчера, ';
  } else if (isTomorrow(date)) {
    dayMarker = 'Завтра, ';
  }

  return `${dayMarker}${formatDay(date)}, ${date.getDate()} ${formatMonth(
    date
  )}`;
};

export const formatTime = (date: Date): string => {
  let minutes = `${date.getMinutes()}`;
  if (date.getMinutes() < 10) {
    minutes = `0${minutes}`;
  }

  return `${date.getHours()}:${minutes}`;
};

function handleTimeYear(data: Date): string {
  const [time, , date, month, year] = getDateTime(data);
  return `${time}, ${date}/${month}/${year}`;
}

function handleTimeMonth(data: Date): string {
  const [time, , date, month] = getDateTime(data);
  return `${time}, ${date} THG ${month}`;
}

function handleTimeWeek(data: Date): string {
  const [time, day] = getDateTime(data);
  return `${time}, TH ${day}`;
}

function handleTimeMinutes(minutes: number): string {
  let time = Math.floor(minutes / 10) * 10;
  return 'Khoảng ' + time + ' phút trước';
}

function handleTimeSeconds(seconds: number): string {
  let time = Math.floor(seconds / 5) * 5;
  return 'Khoảng ' + time + ' giây trước';
}

function getDateTime(data: Date): string[] {
  let a = data.toLocaleString().split(' ');
  let day: string;
  let month: string;
  let date: string;
  let year: string;
  let time: string;
  if (a.length === 6) {
    day = getDayStringToNumber(a[0]);
    month = getMonthStringToNumber(a[1]);
    date = a[3];
    year = a[5];
    time = a[4].slice(0, -3);
  } else {
    day = getDayStringToNumber(a[0]);
    month = getMonthStringToNumber(a[1]);
    date = a[2];
    year = a[4];
    time = a[3].slice(0, -3);
  }
  return [time, day, date, month, year];
}

function getDayStringToNumber(day: string): string {
  //Sun, Mon, Tus, Wed, Thu, Fri, Sat
  if (day === 'Mon') {
    return '2';
  } else if (day === 'Tue') {
    return '3';
  } else if (day === 'Wed') {
    return '4';
  } else if (day === 'Thu') {
    return '5';
  } else if (day === 'Fri') {
    return '6';
  } else if (day === 'Sat') {
    return '7';
  } else if (day === 'Sun') {
    return 'CN';
  } else {
    return day;
  }
}

function getMonthStringToNumber(month: string): string {
  //Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec
  if (month === 'Jan') {
    return '01';
  } else if (month === 'Feb') {
    return '02';
  } else if (month === 'Mar') {
    return '03';
  } else if (month === 'Apr') {
    return '04';
  } else if (month === 'May') {
    return '05';
  } else if (month === 'Jun') {
    return '06';
  } else if (month === 'Jul') {
    return '07';
  } else if (month === 'Aug') {
    return '08';
  } else if (month === 'Sep') {
    return '09';
  } else if (month === 'Oct') {
    return '10';
  } else if (month === 'Nov') {
    return '11';
  } else if (month === 'Dec') {
    return '12';
  } else {
    return month;
  }
}
export {
  handleTimeYear,
  handleTimeMonth,
  handleTimeWeek,
  handleTimeMinutes,
  handleTimeSeconds,
};

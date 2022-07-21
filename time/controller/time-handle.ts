import {
  handleTimeMinutes,
  handleTimeMonth,
  handleTimeSeconds,
  handleTimeWeek,
  handleTimeYear,
} from './components-handle';

function handleTimeToNow(data: string | undefined): string | undefined {
  if (data === undefined) {
    return undefined;
  }
  // let test = '2022-07-06T18:20:40Z';
  //.toLocaleString()
  const now = new Date();
  const time = new Date(data);
  const year = now.getFullYear() - time.getFullYear();
  const month = now.getMonth() - time.getMonth();
  const day = now.getDate() - time.getDate();
  const hours = now.getHours() - time.getHours();
  const minutes = now.getMinutes() - time.getMinutes();
  const seconds = now.getSeconds() - time.getSeconds();
  if (year !== 0) {
    return handleTimeYear(time);
  } else {
    if (month !== 0) {
      return handleTimeMonth(time);
    } else {
      if (day > 7) {
        return handleTimeMonth(time);
      } else if (day > 2 && day <= 7) {
        return handleTimeWeek(time);
      } else if (day === 2) {
        return 'Hai ngày trước';
      } else if (day === 1) {
        return 'Một ngày trước';
      } else {
        if (hours !== 0) {
          return 'Khoảng ' + hours + ' giờ trước';
        } else {
          if (minutes >= 10) {
            return handleTimeMinutes(minutes);
          } else if (minutes < 10 && minutes >= 1) {
            return 'Khoảng ' + minutes + ' phút trước';
          } else {
            if (seconds >= 5) {
              return handleTimeSeconds(seconds);
            } else {
              return 'Vừa xong';
            }
          }
        }
      }
    }
  }
}

export {handleTimeToNow};

function getRandomNumber(max: number, min: number): number {
  console.log(
    'getRandomNumber: ',
    Math.floor(Math.random() * (max - min + 1)) + min,
  );
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getWidth(screen: number, padding: number, other: number): number {
  return screen - 2 * padding - other - getRandomNumber(20, 0);
}

function isTimeStart(time: number | undefined, load: boolean): boolean {
  return time !== undefined && load === true;
}

export {getRandomNumber, getWidth, isTimeStart};

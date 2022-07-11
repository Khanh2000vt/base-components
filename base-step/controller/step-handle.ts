import {WIDTH_STEP} from '../utils';

function getDisabled(
  index: number,
  current: number,
  value: number | undefined,
): boolean {
  if (value !== undefined && current >= value) {
    return true;
  } else {
    if (index > current) {
      return true;
    } else {
      return false;
    }
  }
}

function getPaddingHorizontal(
  length: number,
  windowWidth: number,
  def: number,
): number {
  let size = length * WIDTH_STEP;
  const width = windowWidth - 2 * def;
  if (size >= width) {
    return def;
  } else {
    return (windowWidth - size) / 2;
  }
}

export {getDisabled, getPaddingHorizontal};

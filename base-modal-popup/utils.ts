/* eslint-disable prettier/prettier */
const OFFSET_HEIGHT = 30;

enum KeyCase {
  TOP_LEFT_OF_BOTTOM_LEFT,
  TOP_LEFT_OF_TOP_RIGHT,
  TOP_RIGHT_OF_TOP_LEFT,
  TOP_RIGHT_OF_BOTTOM_RIGHT,
  BOTTOM_LEFT_OF_BOTTOM_RIGHT,
  BOTTOM_LEFT_OF_TOP_LEFT,
  BOTTOM_RIGHT_OF_BOTTOM_LEFT,
  BOTTOM_RIGHT_OF_TOP_RIGHT,
  CENTER_TOP,
  CENTER_BOTTOM,
  CENTER_LEFT,
  CENTER_RIGHT,
  OTHER_TOP_LEFT,
  OTHER_TOP_RIGHT,
  OTHER_BOTTOM_LEFT,
  OTHER_BOTTOM_RIGHT,
  OTHER_LEFT_TOP,
  OTHER_LEFT_BOTTOM,
  OTHER_RIGHT_TOP,
  OTHER_RIGHT_BOTTOM,
}

enum Location {
  ONE,
  TWO,
  THREE,
  FOUR,
}
type Options =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'left-top'
  | 'left-bottom'
  | 'right-top'
  | 'right-bottom'
  | 'center-left'
  | 'center-right'
  | 'center-bottom'
  | 'center-top';

export {KeyCase, Location, OFFSET_HEIGHT};
export type {Options};

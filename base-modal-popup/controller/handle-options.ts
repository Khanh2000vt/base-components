/* eslint-disable prettier/prettier */
import {Layout} from '../model/base-popup-model';
import {KeyCase, OFFSET_HEIGHT, Options} from '../utils';
import {
  getCaseBottomLeft,
  getCaseBottomRight,
  getCaseCenterBottom,
  getCaseCenterLeft,
  getCaseCenterRight,
  getCaseCenterTop,
  getCaseLeftBottom,
  getCaseLeftTop,
  getCaseOtherHeight,
  getCaseOtherWidth,
  getCaseRightBottom,
  getCaseRightTop,
  getCaseTopLeft,
  getCaseTopRight,
} from './handle-case';

function getLayoutFlex(
  option: Options,
  layout: Layout,
  windowWidth: number,
  windowHeight: number,
  widthPopup: number,
  heightPopup: number,
  centerLayoutWidth: number,
  centerLayoutHeight: number,
  layoutXtoWidth: number,
  layoutYtoHeight: number,
) {
  windowHeight = windowHeight - OFFSET_HEIGHT;
  const layoutRightDefault = windowWidth - layoutXtoWidth;
  const layoutBottomDefault = windowHeight - layoutYtoHeight;

  const isWidthCenter =
    centerLayoutWidth > widthPopup / 2 &&
    windowWidth - centerLayoutWidth > widthPopup / 2;
  const isHeightCenter =
    centerLayoutHeight > heightPopup / 2 &&
    windowHeight - centerLayoutHeight > heightPopup / 2;

  const isOverWidth =
    widthPopup > layoutXtoWidth && widthPopup > windowWidth - layout.x;
  const isOverHeight =
    heightPopup > layoutYtoHeight && heightPopup > windowHeight - layout.y;

  if (isOverWidth) {
    return getCaseOtherWidth(layout, windowWidth, windowHeight);
  } else if (isOverHeight) {
    return getCaseOtherHeight(layout, windowWidth, windowHeight);
  } else if (option === 'top-right') {
    return getCaseTopRight(
      widthPopup,
      heightPopup,
      layout,
      layoutRightDefault,
      layoutBottomDefault,
      layoutXtoWidth,
    );
  } else if (option === 'top-left') {
    return getCaseTopLeft(
      widthPopup,
      heightPopup,
      layout,
      layoutBottomDefault,
      layoutXtoWidth,
    );
  } else if (option === 'bottom-right') {
    return getCaseBottomRight(
      widthPopup,
      heightPopup,
      layout,
      layoutRightDefault,
      layoutBottomDefault,
      layoutXtoWidth,
    );
  } else if (option === 'bottom-left') {
    return getCaseBottomLeft(
      widthPopup,
      heightPopup,
      layout,
      layoutBottomDefault,
      layoutXtoWidth,
    );
  } else if (option === 'left-top') {
    return getCaseLeftTop(
      widthPopup,
      heightPopup,
      layout,
      layoutRightDefault,
      layoutYtoHeight,
    );
  } else if (option === 'left-bottom') {
    return getCaseLeftBottom(
      widthPopup,
      heightPopup,
      layout,
      layoutRightDefault,
      layoutBottomDefault,
      layoutYtoHeight,
    );
  } else if (option === 'right-top') {
    return getCaseRightTop(
      widthPopup,
      heightPopup,
      layout,
      layoutRightDefault,
      layoutYtoHeight,
    );
  } else if (option === 'right-bottom') {
    return getCaseRightBottom(
      widthPopup,
      heightPopup,
      layout,
      layoutRightDefault,
      layoutBottomDefault,
      layoutYtoHeight,
    );
  } else if (option === 'center-top') {
    return getCaseCenterTop(
      widthPopup,
      heightPopup,
      layout,
      layoutBottomDefault,
      isWidthCenter,
      isHeightCenter,
      layoutXtoWidth,
      layoutYtoHeight,
    );
  } else if (option === 'center-bottom') {
    return getCaseCenterBottom(
      widthPopup,
      heightPopup,
      layout,
      layoutBottomDefault,
      isWidthCenter,
      isHeightCenter,
      layoutXtoWidth,
      layoutYtoHeight,
    );
  } else if (option === 'center-left') {
    return getCaseCenterLeft(
      widthPopup,
      heightPopup,
      layout,
      layoutRightDefault,
      isWidthCenter,
      isHeightCenter,
      layoutXtoWidth,
      layoutYtoHeight,
    );
  } else if (option === 'center-right') {
    return getCaseCenterRight(
      widthPopup,
      heightPopup,
      layout,
      layoutRightDefault,
      isWidthCenter,
      isHeightCenter,
      layoutXtoWidth,
      layoutYtoHeight,
    );
  }
}

function onSelectOption(
  option: Options,
  layout: Layout,
  windowWidth: number,
  windowHeight: number,
  widthPopup: number,
  heightPopup: number,
) {
  //offset 1st
  const layoutXtoWidth = layout.x + layout.width;
  const layoutYtoHeight = layout.y + layout.height;

  // center ruler
  const centerLayoutWidth = layout.x + layout.width / 2;
  const centerLayoutHeight = layout.y + layout.height / 2;
  const rangeLeftPopup = centerLayoutWidth - widthPopup / 2;
  const rangeTopPopup = centerLayoutHeight - heightPopup / 2;

  let value = getLayoutFlex(
    option,
    layout,
    windowWidth,
    windowHeight,
    widthPopup,
    heightPopup,
    centerLayoutWidth,
    centerLayoutHeight,
    layoutXtoWidth,
    layoutYtoHeight,
  );

  if (value === KeyCase.TOP_LEFT_OF_BOTTOM_LEFT) {
    console.log('option TOP_LEFT_OF_BOTTOM_LEFT');
    return {
      top: layout.y,
      // left: layoutPopup.x - widthPopup,
      left: layout.x - widthPopup,
    };
  } else if (value === KeyCase.TOP_LEFT_OF_TOP_RIGHT) {
    console.log('option TOP_LEFT_OF_TOP_RIGHT');
    return {
      top: layout.y - heightPopup,
      // left: layoutPopup.x,
      left: layout.x,
    };
  } else if (value === KeyCase.TOP_RIGHT_OF_BOTTOM_RIGHT) {
    console.log('option TOP_RIGHT_OF_BOTTOM_RIGHT');
    return {
      top: layout.y,
      // left: layoutPopup.x + layoutPopup.width,
      left: layoutXtoWidth,
    };
  } else if (value === KeyCase.TOP_RIGHT_OF_TOP_LEFT) {
    console.log('option TOP_RIGHT_OF_TOP_LEFT');
    return {
      top: layout.y - heightPopup,
      // left: layoutPopup.x + layoutPopup.width - widthPopup,
      left: layoutXtoWidth - widthPopup,
    };
  } else if (value === KeyCase.BOTTOM_LEFT_OF_BOTTOM_RIGHT) {
    console.log('option BOTTOM_LEFT_OF_BOTTOM_RIGHT');
    return {
      top: layoutYtoHeight,
      // left: layoutPopup.x,
      left: layout.x,
    };
  } else if (value === KeyCase.BOTTOM_LEFT_OF_TOP_LEFT) {
    console.log('option BOTTOM_LEFT_OF_TOP_LEFT');
    return {
      top: layoutYtoHeight - heightPopup,
      // left: layoutPopup.x - widthPopup,
      left: layout.x - widthPopup,
    };
  } else if (value === KeyCase.BOTTOM_RIGHT_OF_BOTTOM_LEFT) {
    console.log('option BOTTOM_RIGHT_OF_BOTTOM_LEFT');
    return {
      top: layoutYtoHeight,
      // left: layoutPopup.x + layoutPopup.width - widthPopup,
      left: layoutXtoWidth - widthPopup,
    };
  } else if (value === KeyCase.BOTTOM_RIGHT_OF_TOP_RIGHT) {
    console.log('option BOTTOM_RIGHT_OF_TOP_RIGHT');
    return {
      top: layoutYtoHeight - heightPopup,
      // left: layoutPopup.x + layoutPopup.width,
      left: layoutXtoWidth,
    };
  } else if (value === KeyCase.CENTER_TOP) {
    console.log('option CENTER_TOP');
    return {
      top: layout.y - heightPopup,
      left: rangeLeftPopup,
    };
  } else if (value === KeyCase.CENTER_BOTTOM) {
    console.log('option CENTER_BOTTOM');
    return {
      top: layoutYtoHeight,
      left: rangeLeftPopup,
    };
  } else if (value === KeyCase.CENTER_LEFT) {
    console.log('option CENTER_LEFT: ', rangeTopPopup, layout.x - widthPopup);
    return {
      top: rangeTopPopup,
      // left: layoutPopup.x - widthPopup,
      left: layout.x - widthPopup,
    };
  } else if (value === KeyCase.CENTER_RIGHT) {
    console.log('option CENTER_RIGHT');
    return {
      top: rangeTopPopup,
      // left: layoutPopup.x + layoutPopup.width,
      left: layoutXtoWidth,
    };
  } else if (value === KeyCase.OTHER_TOP_LEFT) {
    console.log('option OTHER_TOP_LEFT');
    return {
      top: layout.y - heightPopup,
      left: 0,
    };
  } else if (value === KeyCase.OTHER_TOP_RIGHT) {
    console.log('option OTHER_TOP_RIGHT');
    return {
      top: layout.y - heightPopup,
      left: windowWidth - widthPopup,
    };
  } else if (value === KeyCase.OTHER_BOTTOM_LEFT) {
    console.log('option OTHER_BOTTOM_LEFT');
    return {
      top: layoutYtoHeight,
      // left: layoutPopup.x - widthPopup,
      left: 0,
    };
  } else if (value === KeyCase.OTHER_BOTTOM_RIGHT) {
    console.log('option OTHER_BOTTOM_RIGHT');
    return {
      top: layoutYtoHeight,
      // left: layoutPopup.x - widthPopup,
      left: windowWidth - widthPopup,
    };
  } else if (value === KeyCase.OTHER_LEFT_TOP) {
    console.log('option OTHER_LEFT_TOP');
    return {
      top: 0,
      // left: layoutPopup.x - widthPopup,
      left: layout.x - widthPopup,
    };
  } else if (value === KeyCase.OTHER_LEFT_BOTTOM) {
    console.log('option OTHER_LEFT_BOTTOM');
    return {
      top: windowHeight - heightPopup,
      // left: layoutPopup.x - widthPopup,
      left: layout.x - widthPopup,
    };
  } else if (value === KeyCase.OTHER_RIGHT_TOP) {
    console.log('option OTHER_RIGHT_TOP');
    return {
      top: 0,
      // left: layoutPopup.x - widthPopup,
      left: layout.x + widthPopup,
    };
  } else if (value === KeyCase.OTHER_RIGHT_BOTTOM) {
    console.log('option OTHER_RIGHT_BOTTOM');
    return {
      top: windowHeight - heightPopup,
      // left: layoutPopup.x - widthPopup,
      left: layout.x + widthPopup,
    };
  }
}

function getHeightPopup(
  heightPopup: number | undefined,
  length: number,
  maxShow: number,
  heightItem: number,
  windowHeight: number,
): number {
  let height: number;
  if (heightPopup) {
    height = heightPopup;
  } else {
    if (length <= maxShow) {
      height = length * heightItem;
    } else {
      height = 5 * heightItem;
    }
  }
  return height > windowHeight - OFFSET_HEIGHT
    ? windowHeight - OFFSET_HEIGHT
    : height;
}

function getWidthPopup(widthPopup: number, windowWidth: number): number {
  const temp = widthPopup > windowWidth ? windowWidth : widthPopup;
  return temp;
}

export {onSelectOption, getHeightPopup, getWidthPopup};

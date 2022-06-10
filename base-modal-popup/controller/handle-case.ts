import {Layout} from '../model/base-popup-model';
import {KeyCase, Location} from '../utils';

function getCaseTopRight(
  widthPopup: number,
  heightPopup: number,
  layout: Layout,
  layoutRightDefault: number,
  layoutBottomDefault: number,
  layoutXtoWidth: number,
) {
  if (layout.y < heightPopup) {
    if (layoutBottomDefault < heightPopup) {
      if (layout.x < widthPopup) {
        return KeyCase.TOP_RIGHT_OF_BOTTOM_RIGHT;
      } else {
        return KeyCase.TOP_LEFT_OF_BOTTOM_LEFT;
      }
    } else {
      if (layoutXtoWidth < widthPopup) {
        return KeyCase.BOTTOM_LEFT_OF_BOTTOM_RIGHT;
      } else {
        return KeyCase.BOTTOM_RIGHT_OF_BOTTOM_LEFT;
      }
    }
  } else {
    if (layoutRightDefault < widthPopup) {
      return KeyCase.TOP_RIGHT_OF_TOP_LEFT;
    } else {
      return KeyCase.TOP_LEFT_OF_TOP_RIGHT;
    }
  }
}

function getCaseTopLeft(
  widthPopup: number,
  heightPopup: number,
  layout: Layout,
  layoutBottomDefault: number,
  layoutXtoWidth: number,
) {
  if (layout.y < heightPopup) {
    if (layoutBottomDefault < heightPopup) {
      if (layout.x < widthPopup) {
        return KeyCase.TOP_RIGHT_OF_BOTTOM_RIGHT;
      } else {
        return KeyCase.TOP_LEFT_OF_BOTTOM_LEFT;
      }
    } else {
      if (layoutXtoWidth < widthPopup) {
        return KeyCase.BOTTOM_LEFT_OF_BOTTOM_RIGHT;
      } else {
        return KeyCase.BOTTOM_RIGHT_OF_BOTTOM_LEFT;
      }
    }
  } else {
    if (layout.x < widthPopup) {
      return KeyCase.TOP_LEFT_OF_TOP_RIGHT;
    } else {
      return KeyCase.TOP_RIGHT_OF_TOP_LEFT;
    }
  }
}

function getCaseBottomRight(
  widthPopup: number,
  heightPopup: number,
  layout: Layout,
  layoutRightDefault: number,
  layoutBottomDefault: number,
  layoutXtoWidth: number,
) {
  if (layoutBottomDefault < heightPopup) {
    if (layout.y < heightPopup) {
      if (layout.x < widthPopup) {
        return KeyCase.BOTTOM_RIGHT_OF_TOP_RIGHT;
      } else {
        return KeyCase.BOTTOM_LEFT_OF_TOP_LEFT;
      }
    } else {
      if (layoutXtoWidth < widthPopup) {
        return KeyCase.TOP_LEFT_OF_TOP_RIGHT;
      } else {
        return KeyCase.TOP_RIGHT_OF_TOP_LEFT;
      }
    }
  } else {
    if (layoutRightDefault < widthPopup) {
      return KeyCase.BOTTOM_RIGHT_OF_BOTTOM_LEFT;
    } else {
      return KeyCase.BOTTOM_LEFT_OF_BOTTOM_RIGHT;
    }
  }
}

function getCaseBottomLeft(
  widthPopup: number,
  heightPopup: number,
  layout: Layout,
  layoutBottomDefault: number,
  layoutXtoWidth: number,
) {
  if (layoutBottomDefault < heightPopup) {
    if (layout.y < heightPopup) {
      if (layout.x < widthPopup) {
        return KeyCase.BOTTOM_RIGHT_OF_TOP_RIGHT;
      } else {
        return KeyCase.BOTTOM_LEFT_OF_TOP_LEFT;
      }
    } else {
      if (layoutXtoWidth < widthPopup) {
        return KeyCase.TOP_LEFT_OF_TOP_RIGHT;
      } else {
        return KeyCase.TOP_RIGHT_OF_TOP_LEFT;
      }
    }
  } else {
    if (layout.x < widthPopup) {
      return KeyCase.BOTTOM_LEFT_OF_BOTTOM_RIGHT;
    } else {
      return KeyCase.BOTTOM_RIGHT_OF_BOTTOM_LEFT;
    }
  }
}

function getCaseLeftTop(
  widthPopup: number,
  heightPopup: number,
  layout: Layout,
  layoutRightDefault: number,
  layoutYtoHeight: number,
) {
  if (layout.x < widthPopup) {
    if (layoutRightDefault < widthPopup) {
      if (layout.y < heightPopup) {
        return KeyCase.BOTTOM_LEFT_OF_BOTTOM_RIGHT;
      } else {
        return KeyCase.TOP_LEFT_OF_TOP_RIGHT;
      }
    } else {
      if (layoutYtoHeight < heightPopup) {
        return KeyCase.TOP_RIGHT_OF_BOTTOM_RIGHT;
      } else {
        return KeyCase.BOTTOM_RIGHT_OF_TOP_RIGHT;
      }
    }
  } else {
    if (layoutYtoHeight < heightPopup) {
      return KeyCase.TOP_LEFT_OF_BOTTOM_LEFT;
    } else {
      return KeyCase.BOTTOM_LEFT_OF_TOP_LEFT;
    }
  }
}

function getCaseLeftBottom(
  widthPopup: number,
  heightPopup: number,
  layout: Layout,
  layoutRightDefault: number,
  layoutBottomDefault: number,
  layoutYtoHeight: number,
) {
  if (layout.x < widthPopup) {
    if (layoutRightDefault < widthPopup) {
      if (layout.y < heightPopup) {
        return KeyCase.BOTTOM_LEFT_OF_BOTTOM_RIGHT;
      } else {
        return KeyCase.TOP_LEFT_OF_TOP_RIGHT;
      }
    } else {
      if (layoutYtoHeight < heightPopup) {
        return KeyCase.TOP_RIGHT_OF_BOTTOM_RIGHT;
      } else {
        return KeyCase.BOTTOM_RIGHT_OF_TOP_RIGHT;
      }
    }
  } else {
    if (layoutBottomDefault < heightPopup) {
      return KeyCase.BOTTOM_LEFT_OF_TOP_LEFT;
    } else {
      return KeyCase.TOP_LEFT_OF_BOTTOM_LEFT;
    }
  }
}

function getCaseRightTop(
  widthPopup: number,
  heightPopup: number,
  layout: Layout,
  layoutRightDefault: number,
  layoutYtoHeight: number,
) {
  if (layoutRightDefault < widthPopup) {
    if (layout.x < widthPopup) {
      if (layout.y < heightPopup) {
        return KeyCase.BOTTOM_LEFT_OF_BOTTOM_RIGHT;
      } else {
        return KeyCase.TOP_LEFT_OF_TOP_RIGHT;
      }
    } else {
      if (layoutYtoHeight < heightPopup) {
        return KeyCase.TOP_LEFT_OF_BOTTOM_LEFT;
      } else {
        return KeyCase.BOTTOM_LEFT_OF_TOP_LEFT;
      }
    }
  } else {
    if (layoutYtoHeight < heightPopup) {
      return KeyCase.TOP_RIGHT_OF_BOTTOM_RIGHT;
    } else {
      return KeyCase.BOTTOM_RIGHT_OF_TOP_RIGHT;
    }
  }
}

function getCaseRightBottom(
  widthPopup: number,
  heightPopup: number,
  layout: Layout,
  layoutRightDefault: number,
  layoutBottomDefault: number,
  layoutYtoHeight: number,
) {
  if (layoutRightDefault < widthPopup) {
    if (layout.x < widthPopup) {
      if (layout.y < heightPopup) {
        return KeyCase.BOTTOM_LEFT_OF_BOTTOM_RIGHT;
      } else {
        return KeyCase.TOP_LEFT_OF_TOP_RIGHT;
      }
    } else {
      if (layoutYtoHeight < heightPopup) {
        return KeyCase.TOP_LEFT_OF_BOTTOM_LEFT;
      } else {
        return KeyCase.BOTTOM_LEFT_OF_TOP_LEFT;
      }
    }
  } else {
    if (layoutBottomDefault < heightPopup) {
      return KeyCase.BOTTOM_RIGHT_OF_TOP_RIGHT;
    } else {
      return KeyCase.TOP_RIGHT_OF_BOTTOM_RIGHT;
    }
  }
}

function getCaseCenterTop(
  widthPopup: number,
  heightPopup: number,
  layout: Layout,
  layoutBottomDefault: number,
  isWidthCenter: boolean,
  isHeightCenter: boolean,
  layoutXtoWidth: number,
  layoutYtoHeight: number,
) {
  if (layout.y < heightPopup) {
    if (layoutBottomDefault < heightPopup) {
      if (layout.x < widthPopup) {
        if (isHeightCenter) {
          return KeyCase.CENTER_RIGHT;
        } else {
          if (layoutYtoHeight < heightPopup) {
            return KeyCase.TOP_RIGHT_OF_BOTTOM_RIGHT;
          } else {
            return KeyCase.BOTTOM_RIGHT_OF_TOP_RIGHT;
          }
        }
      } else {
        if (isHeightCenter) {
          return KeyCase.CENTER_LEFT;
        } else {
          if (layoutYtoHeight < heightPopup) {
            return KeyCase.TOP_LEFT_OF_BOTTOM_LEFT;
          } else {
            return KeyCase.BOTTOM_LEFT_OF_TOP_LEFT;
          }
        }
      }
    } else {
      if (isWidthCenter) {
        return KeyCase.CENTER_BOTTOM;
      } else {
        if (layoutXtoWidth < widthPopup) {
          return KeyCase.BOTTOM_LEFT_OF_BOTTOM_RIGHT;
        } else {
          return KeyCase.BOTTOM_RIGHT_OF_BOTTOM_LEFT;
        }
      }
    }
  } else {
    if (isWidthCenter) {
      return KeyCase.CENTER_TOP;
    } else {
      if (layoutXtoWidth < widthPopup) {
        return KeyCase.TOP_LEFT_OF_TOP_RIGHT;
      } else {
        return KeyCase.TOP_RIGHT_OF_TOP_LEFT;
      }
    }
  }
}

function getCaseCenterBottom(
  widthPopup: number,
  heightPopup: number,
  layout: Layout,
  layoutBottomDefault: number,
  isWidthCenter: boolean,
  isHeightCenter: boolean,
  layoutXtoWidth: number,
  layoutYtoHeight: number,
) {
  if (layoutBottomDefault < heightPopup) {
    if (layout.y < heightPopup) {
      if (layout.x < widthPopup) {
        if (isHeightCenter) {
          return KeyCase.CENTER_RIGHT;
        } else {
          if (layoutYtoHeight < heightPopup) {
            return KeyCase.TOP_RIGHT_OF_BOTTOM_RIGHT;
          } else {
            return KeyCase.BOTTOM_RIGHT_OF_TOP_RIGHT;
          }
        }
      } else {
        if (isHeightCenter) {
          return KeyCase.CENTER_LEFT;
        } else {
          if (layoutYtoHeight < heightPopup) {
            return KeyCase.TOP_LEFT_OF_BOTTOM_LEFT;
          } else {
            return KeyCase.BOTTOM_LEFT_OF_TOP_LEFT;
          }
        }
      }
    } else {
      if (isWidthCenter) {
        return KeyCase.CENTER_TOP;
      } else {
        if (layoutXtoWidth < widthPopup) {
          return KeyCase.TOP_LEFT_OF_TOP_RIGHT;
        } else {
          return KeyCase.TOP_RIGHT_OF_TOP_LEFT;
        }
      }
    }
  } else {
    if (isWidthCenter) {
      return KeyCase.CENTER_BOTTOM;
    } else {
      if (layoutXtoWidth < widthPopup) {
        return KeyCase.BOTTOM_LEFT_OF_BOTTOM_RIGHT;
      } else {
        return KeyCase.BOTTOM_RIGHT_OF_BOTTOM_LEFT;
      }
    }
  }
}

function getCaseCenterLeft(
  widthPopup: number,
  heightPopup: number,
  layout: Layout,
  layoutRightDefault: number,
  isWidthCenter: boolean,
  isHeightCenter: boolean,
  layoutXtoWidth: number,
  layoutYtoHeight: number,
) {
  if (layout.x < widthPopup) {
    if (layoutRightDefault < widthPopup) {
      if (layout.y < heightPopup) {
        if (isWidthCenter) {
          return KeyCase.CENTER_BOTTOM;
        } else {
          if (layoutXtoWidth < widthPopup) {
            return KeyCase.BOTTOM_LEFT_OF_BOTTOM_RIGHT;
          } else {
            return KeyCase.BOTTOM_RIGHT_OF_BOTTOM_LEFT;
          }
        }
      } else {
        if (isWidthCenter) {
          return KeyCase.CENTER_TOP;
        } else {
          if (layoutXtoWidth < widthPopup) {
            return KeyCase.TOP_LEFT_OF_TOP_RIGHT;
          } else {
            return KeyCase.TOP_RIGHT_OF_TOP_LEFT;
          }
        }
      }
    } else {
      if (isHeightCenter) {
        return KeyCase.CENTER_RIGHT;
      } else {
        if (layoutYtoHeight < heightPopup) {
          return KeyCase.TOP_RIGHT_OF_BOTTOM_RIGHT;
        } else {
          return KeyCase.BOTTOM_RIGHT_OF_TOP_RIGHT;
        }
      }
    }
  } else {
    if (isHeightCenter) {
      return KeyCase.CENTER_LEFT;
    } else {
      if (layoutYtoHeight < heightPopup) {
        return KeyCase.TOP_LEFT_OF_BOTTOM_LEFT;
      } else {
        return KeyCase.BOTTOM_LEFT_OF_TOP_LEFT;
      }
    }
  }
}

function getCaseCenterRight(
  widthPopup: number,
  heightPopup: number,
  layout: Layout,
  layoutRightDefault: number,
  isWidthCenter: boolean,
  isHeightCenter: boolean,
  layoutXtoWidth: number,
  layoutYtoHeight: number,
) {
  if (layoutRightDefault < widthPopup) {
    if (layout.x < widthPopup) {
      if (layout.y < heightPopup) {
        if (isWidthCenter) {
          return KeyCase.CENTER_BOTTOM;
        } else {
          if (layoutXtoWidth < widthPopup) {
            return KeyCase.BOTTOM_LEFT_OF_BOTTOM_RIGHT;
          } else {
            return KeyCase.BOTTOM_RIGHT_OF_BOTTOM_LEFT;
          }
        }
      } else {
        if (isWidthCenter) {
          return KeyCase.CENTER_TOP;
        } else {
          if (layoutXtoWidth < widthPopup) {
            return KeyCase.TOP_LEFT_OF_TOP_RIGHT;
          } else {
            return KeyCase.TOP_RIGHT_OF_TOP_LEFT;
          }
        }
      }
    } else {
      if (isHeightCenter) {
        return KeyCase.CENTER_LEFT;
      } else {
        if (layoutYtoHeight < heightPopup) {
          return KeyCase.TOP_LEFT_OF_BOTTOM_LEFT;
        } else {
          return KeyCase.BOTTOM_LEFT_OF_TOP_LEFT;
        }
      }
    }
  } else {
    if (isHeightCenter) {
      console.log('da di vao day: ', isHeightCenter);
      return KeyCase.CENTER_RIGHT;
    } else {
      if (layoutYtoHeight < heightPopup) {
        return KeyCase.TOP_RIGHT_OF_BOTTOM_RIGHT;
      } else {
        return KeyCase.BOTTOM_RIGHT_OF_TOP_RIGHT;
      }
    }
  }
}

function getLocationLayout(
  layout: Layout,
  windowWidth: number,
  windowHeight: number,
): number {
  if (layout.x < windowWidth / 2) {
    if (layout.y < windowHeight / 2) {
      return Location.ONE;
    } else {
      return Location.THREE;
    }
  } else {
    if (layout.y < windowHeight / 2) {
      return Location.TWO;
    } else {
      return Location.FOUR;
    }
  }
}

function getCaseOtherWidth(
  layout: Layout,
  windowWidth: number,
  windowHeight: number,
) {
  const index = getLocationLayout(layout, windowWidth, windowHeight);
  if (index === Location.ONE) {
    return KeyCase.OTHER_BOTTOM_LEFT;
  } else if (index === Location.TWO) {
    return KeyCase.OTHER_BOTTOM_RIGHT;
  } else if (index === Location.THREE) {
    return KeyCase.OTHER_TOP_LEFT;
  } else if (index === Location.FOUR) {
    return KeyCase.OTHER_TOP_RIGHT;
  }
}

function getCaseOtherHeight(
  layout: Layout,
  windowWidth: number,
  windowHeight: number,
) {
  const index = getLocationLayout(layout, windowWidth, windowHeight);
  if (index === Location.ONE) {
    return KeyCase.OTHER_RIGHT_TOP;
  } else if (index === Location.TWO) {
    return KeyCase.OTHER_LEFT_TOP;
  } else if (index === Location.THREE) {
    return KeyCase.OTHER_RIGHT_BOTTOM;
  } else if (index === Location.FOUR) {
    return KeyCase.OTHER_LEFT_BOTTOM;
  }
}

export {
  getCaseTopRight,
  getCaseTopLeft,
  getCaseBottomRight,
  getCaseBottomLeft,
  getCaseLeftTop,
  getCaseLeftBottom,
  getCaseRightTop,
  getCaseRightBottom,
  getCaseCenterTop,
  getCaseCenterBottom,
  getCaseCenterLeft,
  getCaseCenterRight,
  getCaseOtherWidth,
  getCaseOtherHeight,
};

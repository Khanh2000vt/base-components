function getHeightModal(
  heightPopup: number | undefined,
  length: number,
  maxShow: number,
  heightItem: number,
  windowHeight: number,
) {
  let height: number;
  // const padding = paddingView.top + paddingView.bottom;
  if (heightPopup) {
    height = heightPopup;
  } else {
    if (length <= maxShow) {
      height = length * heightItem;
    } else {
      height = maxShow * heightItem;
    }
  }
  return height > windowHeight ? windowHeight : height;
}

function getCloseThreshold(
  heightModalUpdate: number,
  paddingView: {top: number; bottom: number},
  closeThreshold: number,
) {
  let close: number;
  const height = heightModalUpdate + paddingView.top + paddingView.bottom;
  if (closeThreshold > height) {
    close = height - 20;
  } else {
    close = closeThreshold;
  }
  return close;
}

export {getHeightModal, getCloseThreshold};

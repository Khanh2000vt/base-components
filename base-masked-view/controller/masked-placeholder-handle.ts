function getDestination(direction: string, width: number): number[] {
  const LOCATION: number = direction === 'right' ? -width : width;
  const DESTINATION: number = -1 * LOCATION;
  return [LOCATION, DESTINATION];
}

export {getDestination};

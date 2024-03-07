import ClassRoom from './0-classroom';

export function initializeRooms() {
  const classList = [19, 20, 34];

  return Array.from(classList, (x) => new ClassRoom(x));
}

export default initializeRooms;

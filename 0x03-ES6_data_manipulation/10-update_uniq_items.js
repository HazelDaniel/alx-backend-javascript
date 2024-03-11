function updateUniqueItems(mapArg) {
  if (!mapArg || !(mapArg instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of mapArg) {
    if (value === 1) {
      mapArg.set(key, 100);
    }
  }
}

export default updateUniqueItems;

function updateUniqueItems(mapArg) {
  if (!mapArg) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of mapArg) {
    if (value === 1) {
      mapArg.set(key, 100);
    }
  }
}

export default updateUniqueItems;

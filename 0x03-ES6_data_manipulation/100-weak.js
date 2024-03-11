export const weakMap = new WeakMap();
export const queryAPI = (obj) => {
  if (weakMap.get(obj) === 5) {
    throw new Error('Endpoint load is high');
  }
  if (!weakMap.get(obj)) {
    weakMap.set(obj, 1);
  } else {
    weakMap.set(obj, weakMap.get(obj) + 1);
  }
};

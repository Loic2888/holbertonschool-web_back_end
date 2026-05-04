export default function setFromArray(array) {
  const set = new Set();

  for (const item of array) {
    set.add(item);
  }
  return set;
}

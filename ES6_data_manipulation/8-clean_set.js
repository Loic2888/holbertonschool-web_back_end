export default function cleanSet(set, startString) {
  const newSet = new Set();
  for (const element of set) {
    if (element && element.startsWith(startString)) {
      newSet.add(element.slice(startString.length));
    } else {
      newSet.add(element);
    }
  }
  return newSet;
}

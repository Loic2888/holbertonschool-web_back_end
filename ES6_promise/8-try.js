export default function divideFunction(numerator=Number, denominator=Number) {
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  }
  return numerator / denominator;
}

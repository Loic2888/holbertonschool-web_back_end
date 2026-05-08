import { interpolate } from "eslint/lib/linter";

export default function divideFunction(numerator=Number, denominator=Number) {
  return new Promise((resolve, reject) => {
    if (denominator === 0) {
      reject(new Error('cannot divide by 0'));
    } else {
      resolve(numerator / denominator);
    }
  });
}

export default function uploadPhoto(filename) {
  return new Promise((resolve, reject) => {
    if (filename) {
      resolve(filename);
    } else {
      reject(new Error('$fileName cannot be processed'));
    }
  });
}

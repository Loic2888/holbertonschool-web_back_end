import signUpUser from './4-user-promise.js';
import uploadPhoto from './5-photo-reject.js';


export default function handleProfileSignup(firstName=String, lastName=String, filename=String) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName)
  ]);
}

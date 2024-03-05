import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

/* eslint-disable no-unused-vars */
async function handleProfileSignup(firstName, lastName, fileName) {
  const settled = await Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(),
  ]);
  return settled;
}
/* eslint-enable no-unused-vars */

export default handleProfileSignup;
/* eslint-disable eol-last */

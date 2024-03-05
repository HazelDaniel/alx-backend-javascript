import { createUser, uploadPhoto } from './utils';

async function asyncUploadUser() {
  let res = {};
  try {
    const photo = await uploadPhoto();
    const user = await createUser();
    res = { ...res, user, photo };
  } catch (err) {
    res = { ...res, error: err };
  }
  return res;
}
export default asyncUploadUser;

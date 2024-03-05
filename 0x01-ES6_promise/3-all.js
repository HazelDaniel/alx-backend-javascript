import { createUser, uploadPhoto } from './utils';

async function handleProfileSignup() {
  try {
    const [{ body }, { firstName, lastName }] = await Promise.all([
      uploadPhoto(),
      createUser(),
    ]);
    console.log(`${body} ${firstName} ${lastName}`);
  } catch (err) {
    console.log('Signup system offline');
  }
}

export default handleProfileSignup;

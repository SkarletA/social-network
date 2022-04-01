/**
 * @jest-environment jsdom
*/
// import profile from '../../src/views/profile.js';
import { getUser } from '../../src/user-firestore.js';

jest.mock('../../src/firebase.js');

describe('profile', () => {
  const id = 'zysf456';
  it('Deberia retornar el objeto autenticado', async () => {
    const profiles = await getUser(id);
    expect(profiles).toEqual({});
  });

  it('Debería envíar un error al retornar un objeto', async () => {
    try {
      await getUser(id);
    } catch (error) {
      expect(error).toMatch('error');
    }
  });
});

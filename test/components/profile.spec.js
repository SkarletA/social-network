/**
 * @jest-environment jsdom
*/
// import profile from '../../src/views/profile.js';
import { getUser } from '../../src/user-firestore.js';

jest.mock('../../src/firebase.js');

describe('profile', () => {
  // const userId = 'zysf456';
  // const result = profile();
  // it('deberia devolver una funcion', async () => {
  //   await expect(result.loadProfile(userId)).resolves.toBe('function');
  // });

  // it('Debería mandar un error al cargar el profile', async () => {
  //   try {
  //     await result.loadProfile(userId);
  //   } catch (error) {
  //     expect(error).toMatch('error al cargar profile');
  //   }
  // });

  // document.body.innerHTML = '<div id="root"></div>';
  // it('Deberia renderizar profile', () => {
  //   const root = document.getElementById('root');
  //   root.appendChild(result);
  //   expect(root.innerHTML).toMatchSnapshot();
  // });

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

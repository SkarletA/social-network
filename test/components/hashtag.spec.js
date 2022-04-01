import loadHashtag from '../../src/components/hashtag.js';

jest.mock('../../src/firebase.js');

describe('loadHashtag', () => {
  document.body.innerHTML = '<div id="root"></div>';
  test('render del componente de hashtags', () => {
    const root = document.getElementById('root');
    root.appendChild(loadHashtag());
    expect(root.innerHTML).toMatchSnapshot();
  });
});

/**
 * @jest-environment jsdom
 */
import { listPosts } from '../../src/components/posts.js';

const result = listPosts();

describe('ListPost', () => {
  it('listPost deberia ser una función', () => {
    expect(typeof result).toBe('function');
  });
});

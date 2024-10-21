// Uncomment the code below and write your tests
import { generateLinkedList } from './index';

describe('generateLinkedList', () => {
  const elements = [2, 4, 6];

  const result = {
    value: 2,
    next: { value: 4, next: { value: 6, next: { value: null, next: null } } },
  };

  test('should generate linked list from values 1', () => {
    expect(generateLinkedList(elements)).toStrictEqual(result);
  });

  test('should generate linked list from values 2', () => {
    expect(generateLinkedList(elements)).toMatchSnapshot();
  });
});

import { formatFamily } from './index';
import { Family } from '@prisma/client';

describe('basic', () => {
  const testCases = [
    {
      input: '貓',
      output: Family.Cat
    },
    {
      input: '狗',
      output: Family.Dog
    },
    {
      input: '',
      output: Family.Dog
    },
    {
      input: 'random',
      output: Family.Dog
    }
  ];

  testCases.forEach(({ input, output }) => {
    test(`input: "${input}" returns ${output} expectedly`, () => {
      expect(formatFamily(input)).toBe(output);
    });
  });
});

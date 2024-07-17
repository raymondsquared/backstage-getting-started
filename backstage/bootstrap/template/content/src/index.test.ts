import { getName } from './utils';

describe('basic tests', () => {
  let expected: number = 0;

  beforeAll(async () => {
    expected = 3;
  });

  afterAll(() => {
    expected = 0;
  });

  it('SHOULD return 3 WHEN adding 1 + 2 ', () => {
    const actual = 1 + 2;

    expect(actual).toBe(expected);
  });

  it('SHOULD return correct output WHEN getName is invoked', () => {
    const actual = getName();
    const expected = "${{ values.name | safe | lower | replace(' ', '-') }}";

    expect(actual).toBe(expected);
  });
});

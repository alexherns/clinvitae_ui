import * as utils from './utils';

describe('utils', () => {
  describe('buildQueryString', () => {
    it('should build simple query', () => {
      expect(utils.buildQueryString({ foo: 'bar' })).toBe('foo=bar');
    });

    it('should encode special characters', () => {
      expect(utils.buildQueryString({ '@': '%' })).toBe('%40=%25');
    });

    it('should build complex queries', () => {
      expect(utils.buildQueryString({ foo: 'bar', baz: 'qux' })).toBe('foo=bar&baz=qux');
    });
  });

  describe('flattenStrings', () => {
    it('should flatten multiple lists', () => {
      expect(utils.flattenStrings([['foo'], ['bar'], ['baz', 'qux']])).toEqual(['foo', 'bar', 'baz', 'qux']);
    });

    it('should remove empty elements', () => {
      expect(utils.flattenStrings([['foo', '']])).toEqual(['foo']);
    });

    it('should remove duplicates', () => {
      expect(utils.flattenStrings([['foo', 'foo'], ['bar'], ['bar']])).toEqual(['foo', 'bar']);
    });
  });
});

import assert from 'assert';
import { hasCpuTime } from '../../src/server/utils';

describe('can get CPU time', () => {
  it('CPU time should be larger than 0 at all times', () => {
    const result = hasCpuTime();
    assert.notStrictEqual(result, 0);
    expect(result).not.toBe(0);
  });
});

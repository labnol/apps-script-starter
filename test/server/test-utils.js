import { hasCpuTime } from '../../src/server/utils';
import assert from 'assert';

describe('can get CPU time', () => {

    it('CPU time should be larger than 0 at all times', () => {
      const result = hasCpuTime()
      assert.notStrictEqual(result, 0);
    });
  
  });
  
import { Clock } from '../../index';

describe('Interface: Package', function () {
  describe('global', function () {
    it('global', function () {
      // @ts-ignore
      assert(global['Clock'] !== Clock);
    });
  });

  describe('Clock', function () {
    it('Clock', function () {
      assert(typeof Clock === 'function');
    });
  });

});

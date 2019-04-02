import { LazyThreeModule } from './lazy-three.module';

describe('LazyThreeModule', () => {
  let lazyThreeModule: LazyThreeModule;

  beforeEach(() => {
    lazyThreeModule = new LazyThreeModule();
  });

  it('should create an instance', () => {
    expect(lazyThreeModule).toBeTruthy();
  });
});

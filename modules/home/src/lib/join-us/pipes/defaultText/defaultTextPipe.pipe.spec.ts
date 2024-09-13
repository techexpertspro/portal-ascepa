import { DefaultTextPipe } from './defaultTextPipe.pipe';

describe('DefaultTextPipePipe', () => {
  it('create an instance', () => {
    const pipe = new DefaultTextPipe();
    expect(pipe).toBeTruthy();
  });
});

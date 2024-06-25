import { CurrencyFormatPipe } from './currency-format.pipe';

describe('CurrencyFormatPipe', () => {
  let pipe = new CurrencyFormatPipe();

  beforeEach(() => {
    pipe = new CurrencyFormatPipe();
  });


  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format number to currency format', () => {
    expect(pipe.transform(123.45)).toEqual('$ 123.45');
    expect(pipe.transform(0)).toEqual('$ 0.00');
    expect(pipe.transform(null)).toEqual('$ 0.00');
    expect(pipe.transform(undefined)).toEqual('$ 0.00');
  });
});

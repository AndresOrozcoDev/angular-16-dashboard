import { CurrencyFormatterDirective } from './currency-formatter.directive';
import { ElementRef, Renderer2 } from '@angular/core';
import { DecimalPipe } from '@angular/common';

describe('CurrencyFormatterDirective', () => {
  it('should create an instance', () => {
    const elMock: ElementRef = {} as ElementRef;
    const rendererMock: Renderer2 = {} as Renderer2;
    const decimalPipeMock: DecimalPipe = {} as DecimalPipe;

    const directive = new CurrencyFormatterDirective(elMock, rendererMock, decimalPipeMock);
    expect(directive).toBeTruthy();
  });
});

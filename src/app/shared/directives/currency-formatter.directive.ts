import { DecimalPipe } from '@angular/common';
import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCurrencyFormatter]'
})
export class CurrencyFormatterDirective implements OnInit {

  private currencyChars = new RegExp('[\.,]', 'g'); // we're going to remove commas and dots

  constructor(
    public el: ElementRef,
    public renderer: Renderer2,
    private decimalPipe: DecimalPipe
  ) {}

  ngOnInit() {
    this.format(this.el.nativeElement.value); // format any initial values
  }

  @HostListener('input', ['$event.target.value']) onInput(value: string) {
    this.format(value);
  }

  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const clipboardData = event.clipboardData || (window as any).clipboardData;
    if (clipboardData) {
      const pastedText = clipboardData.getData('text');
      this.format(pastedText);
    }
  }

  private format(value: string) {
    if (!value) return;
    
    // 1. Test for non-number characters and replace/remove them
    const numberFormat = parseInt(String(value).replace(this.currencyChars, ''), 10);
    
    if (isNaN(numberFormat)) {
      this.renderer.setProperty(this.el.nativeElement, 'value', '');
      return;
    }

    // 2. Format the number (add commas)
    const usd = this.decimalPipe.transform(numberFormat, '1.0-0', 'en-US');

    // 3. Replace the input value with formatted numbers
    this.renderer.setProperty(this.el.nativeElement, 'value', usd);
  }

}

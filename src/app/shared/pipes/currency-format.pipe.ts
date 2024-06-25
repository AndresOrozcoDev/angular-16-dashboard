import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: number | null | undefined, ...args: any[]): string {
    if (value !== null && value !== undefined) {
      return `$ ${value.toFixed(2)}`;
    }
    return '$ 0.00';
  }

}

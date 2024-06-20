import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyFormat'
})
export class CurrencyFormatPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    if (value !== null && value !== undefined) {
      // Asegúrate de manejar los casos donde value es null o undefined
      return `$ ${value.toFixed(2)}`;
    }
    return '$ 0.00';
  }

}

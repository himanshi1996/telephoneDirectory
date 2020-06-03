import { Pipe, PipeTransform } from '@angular/core';
import { IPerson } from './IPerson';
@Pipe({
    name: 'filter'
})
export class filterPipe implements PipeTransform {

    transform(value: IPerson[], args?: string): any {
        if (value) {
                return value.filter((person: IPerson) => person.name.toLowerCase().search(args) !== -1 || person.number.toString().search(args)!== -1);
        }
    }

}
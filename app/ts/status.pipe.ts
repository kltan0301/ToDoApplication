import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusFilter',
  pure: false
})
export class StatusPipe implements PipeTransform {
  transform(value: any, statusInput:boolean): any {
    return value.filter((item:any) =>  item.status === statusInput);
  }
}

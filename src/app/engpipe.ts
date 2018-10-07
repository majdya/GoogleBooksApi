import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'engpipe'
})
export class EngPipe implements PipeTransform {

    transform(value: string): string {
        return value.replace(/[\W_]/g, ' ');
    }

}
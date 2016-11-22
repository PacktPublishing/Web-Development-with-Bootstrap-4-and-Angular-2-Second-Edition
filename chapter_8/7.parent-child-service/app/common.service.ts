import {Injectable} from '@angular/core';
import {Subject}    from 'rxjs/Subject';

@Injectable()
export class CommonService {
    // Observable string sources
    private parentSource = new Subject<string>();
    private childSource = new Subject<string>();

    // Observable string streams
    parentQueue = this.parentSource.asObservable();
    childQueue = this.childSource.asObservable();

    // Service message commands
    toParent(value: string) {
        this.parentSource.next(value);
    }
    toChild(value: string) {
        this.childSource.next(value);
    }
}
import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

export class Category {
    //  Unique Id
    id: string;
    // The title
    title: string;
    // Description
    desc: string;
    // Path to small image
    imageS: string;
    // Path to large image
    imageL: string;
}

@Injectable()
export class CategoryService {
    
    // URL to Categories web api
    private categoriesUrl = 'app/categories'; 
    // We keep categories in cache variable
    private categories: Category[] = [];

    constructor(private http: Http) {}

    getCategories(): Observable<Category[]> {
        return this.http
            .get(this.categoriesUrl)
            .map((response: Response) => {
                this.categories = response.json().data as Category[];
                return this.categories;
            })
            .catch(this.handleError);
    }

    getCategory(id: string): Category {
        for (let i = 0; i < this.categories.length; i++) {
            if (this.categories[i].id === id) {
                return this.categories[i];
            }
        }
        return null;
    }

    private handleError(error: any): Observable<any> {
        let errMsg = (error.message) ? error.message : error.status ? 
            `${error.status} - ${error.statusText}` : 'Server error';
        window.alert(`An error occurred: ${errMsg}`);
        return Observable.throw(errMsg);
    }
}

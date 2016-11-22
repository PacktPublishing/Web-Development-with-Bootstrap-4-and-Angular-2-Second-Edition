import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

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

    getCategories(): Promise<Category[]> {
        return this.http
            .get(this.categoriesUrl)
            .toPromise()
            .then((response: Response) => {
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

    private handleError(error: any): Promise<any> {
        window.alert(`An error occurred: ${error}`);
        return Promise.reject(error.message || error);
    }
}

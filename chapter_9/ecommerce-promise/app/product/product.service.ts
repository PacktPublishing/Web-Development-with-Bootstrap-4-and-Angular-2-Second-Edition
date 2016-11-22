import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

export interface Product {
    // Unique Id
    id: string;
    // Ref on category belongs to
    categoryId: string;
    // The title
    title: string;
    // Price
    price: number;
    // Mark product with specialproce
    isSpecial: boolean;
    // Description
    desc: string;
    // Path to small image
    imageS: string;
    // Path to large image
    imageL: string;
}

@Injectable()
export class ProductService {

    // URL to Products web api
    private productsUrl = 'app/products'; 

    constructor(private http: Http) {}

    getProducts(category?: string, search?: string): Promise<Product[]> {
        let url = this.productsUrl;
        if (category) {
            url += `/?categoryId=${category}`;
        } else if (search) {
            url += `/?title=${search}`;
        }
        return this.http
            .get(url)
            .toPromise()
            .then((response: Response) => response.json().data as Product[])
            .catch(this.handleError);
    }

    getProduct(id: string): Promise<Product> {
        return this.http
            .get(this.productsUrl + `/${id}`)
            .toPromise()
            .then((response: Response) => response.json().data as Product)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        window.alert(`An error occurred: ${error}`);
        return Promise.reject(error.message || error);
    }
}

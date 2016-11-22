import {Injectable} from '@angular/core';

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
    categories: Category[] = [
        { id: '1', title: 'Bread & Bakery', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee and more.' },
        { id: '2', title: 'Takeaway', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'It\'s consistently excellent, dishes are superb and healthily cooked with high quality ingredients.' },
        { id: '3', title: 'Dairy', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'A dairy product is food produced from the milk of mammals, primarily cows, water buffaloes, goats, sheep, yaks.' },
        { id: '4', title: 'Meat', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'Only superior quality beef, lamb, pork.' },
        { id: '5', title: 'Seafood', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'Great place to buy fresh seafood.' },
        { id: '6', title: 'Fruit & Veg', imageL: 'http://placehold.it/1110x480', imageS: 'http://placehold.it/270x171', desc: 'A variety of fresh fruits and vegetables.' }
    ];

    getCategories() {
        return this.categories;
    }

    getCategory(id: string): Category {
        for (let i = 0; i < this.categories.length; i++) {
            if (this.categories[i].id === id) {
                return this.categories[i];
            }
        }
        throw new CategoryNotFoundException(`Category ${id} not found`);
    }
}

export class CategoryNotFoundException extends Error {
    constructor(message?: string) {
        super(message);
    }
}

// constructor(@Inject(LANGUAGES) languages: string[]) {
//   console.log(languages);
//   // Log: "['en','fr']"
// }


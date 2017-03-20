import { Injectable }       from '@angular/core';
import { Headers, Http, Response }    from '@angular/http';

import { Item }             from './item.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class ItemService {
    private itemsUrl = 'items';
    private headers = new Headers({'Content-Type': 'application/json'});

    private todos: any;
    private currentItem: any;

    constructor(
        private http: Http,
        private item: Item) {
        this.currentItem = (localStorage.getItem('currentItem')!==null) ? JSON.parse(localStorage.getItem('currentItem')) : [  ];
        this.todos = this.currentItem;
    }

    getItem(id: number): Promise<Item> {
        const url = `${this.itemsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Item)
            .catch(this.handleError);
    }

    // save() {
    //     this.todos.push({
    //         id: this.item.id,
    //         title: this.item.title,
    //         message: this.item.message,
    //         done: false
    //     });

    //     this.todos.title = '';
    //     this.todos.message = '';

    //     localStorage.setItem('currentItem', JSON.stringify(this.todos));
    // }

    private handleError(error: any): Promise<any> {
        console.log('An error occured', error);
        return Promise.reject(error.message || error);
    }

}
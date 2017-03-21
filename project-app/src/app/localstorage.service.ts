import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Item }           from './item.model';

import 'rxjs/Rx';

@Injectable()
export class LocalStorageService {

    currentItem: string;
    todos: any;

    constructor() {
        this.currentItem = (localStorage.getItem('currentItem')!==null) ? JSON.parse(localStorage.getItem('currentItem')) : [  ];
        this.todos = this.currentItem;
    }

    getTodos() {
        JSON.parse(localStorage.getItem('currentItem'));
        return this.todos;
    }

    save(todo){
        this.todos.push(todo);
        localStorage.setItem('currentItem', JSON.stringify(this.todos));
    }

}
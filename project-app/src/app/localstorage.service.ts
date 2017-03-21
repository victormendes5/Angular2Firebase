import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Item }           from './item.model';

import 'rxjs/Rx';

@Injectable()
export class LocalStorageService {

    currentItem: string;
    todos: any;

    oldItem: string;

    constructor() {
        this.currentItem = (localStorage.getItem('currentItem')!==null) ? JSON.parse(localStorage.getItem('currentItem')) : [  ];
        this.todos = this.currentItem;
    }

    getLocalStorage() {
        JSON.parse(localStorage.getItem('currentItem'));
        return this.todos;
    }

    deleteLocalStorage(index){
        this.oldItem = this.todos.splice(index, 1);
        localStorage.setItem('currentItem', JSON.stringify(this.oldItem));
    }

    saveLocalStorage(todo){
        this.todos.push(todo);
        localStorage.setItem('currentItem', JSON.stringify(this.todos));
    }

}
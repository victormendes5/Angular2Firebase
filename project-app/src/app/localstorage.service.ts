import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

    saved: string = localStorage.getItem('currentItem');
    currentItem: string = (localStorage.getItem('currentItem') !== null) ? JSON.parse(this.saved) : [  ];
    todos: any = this.currentItem;

    save(id, title, message, done) {
        this.todos.push({
            id: id,
            title: title,
            message: message,
            done: false
        });
        
        localStorage.setItem('currentItem', JSON.stringify(this.todos));
    }

    // get(title) {
    //     let data = JSON.parse(localStorage.getItem('currentItem'));
    	
    //     if (!data) {
    // 		return undefined;
    // 	}

    //     if (title) {
    //     	if(data[title]) {
    //     		return data[title];
    //     	} else {
    //     		return {};
    //     	}
    //     }
    // 	return data ;
    // }

}
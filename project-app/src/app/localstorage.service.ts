import { Injectable }              from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Item }                    from './item.model';

import 'rxjs/Rx';

@Injectable()
export class LocalStorageService {
    private dataUrl = 'api/data';
    // private headers = new Headers({'Content-Type': 'application/json'});

    private currentData: string;
    private objects: any;
    private oldObject: string;

    constructor(private http: Http) {
        this.currentData = (localStorage.getItem('currentData')!==null) ? JSON.parse(localStorage.getItem('currentData')) : [  ];
        this.objects = this.currentData;
    }

    getLocalStorage() {
        for (var i = this.objects.length - 1; i >= 0; i--) {
            JSON.parse(localStorage.getItem('currentData-' + i));
        }
        return this.objects;
    }

    // getCurrentData(id: number) {
    //   let headers = new Headers();
    //   headers.append("Content-Type", "application/json");

    //   return this.http.get(localStorage.getItem('currentData'), {
    //       headers: headers
    //   })
    //   .toPromise()
    //   .then((res: Response) => {
    //     let data = res.json();
    //     let item = new Item();
    //     item.id = data.id;
    //     item.title = data.title;
    //     item.message = data.message;
    //     item.done = data.done;
        
    //     data.forEach((eachCompanion) => {
    //         item.companions.push({
    //           id: eachCompanion.id
    //         });
    //     });

    //     return item;
    //   })
    //   .catch(this.handleError);
    // }

    deleteLocalStorage(index){
        // tem um erro nesse delete
        this.oldObject = this.objects.splice(index, 1);
        localStorage.setItem('currentData', JSON.stringify(this.oldObject));
    }

    // updateLocalStorage(index){
    // }

    saveLocalStorage(todo){
        this.objects.push(todo);
        for (var i = this.objects.length - 1; i >= 0; i--) {
            localStorage.setItem('currentData-' + i, JSON.stringify(this.objects[i]));
        }
    }

    private handleError(error: any): Promise<any> {
        console.log('An error occured', error);
        return Promise.reject(error.message || error);
    }

}
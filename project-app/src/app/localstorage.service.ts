import { Injectable }              from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Item }                    from './item.model';

import 'rxjs/Rx';

@Injectable()
export class LocalStorageService {
    private dataUrl = 'api/data';
    // private headers = new Headers({'Content-Type': 'application/json'});

    private currentData: any;
    private objects: any;
    private oldObject: string;

    constructor(private http: Http) {
        // if(this.currentData !== null) {
        //
        //     this.currentData = 0;
        //
        //     for (var i = this.currentData.length - 1; i >= 0; i--) {
        //         this.currentData = JSON.parse(localStorage.getItem('currentData-' + i));
        //         console.log('currentData if:' + this.currentData)
        //     }
        // } else {
        //     console.log('currentData else:' + this.currentData)
        // }

        this.currentData = (localStorage.getItem('currentData')!==null) ? JSON.parse(localStorage.getItem('currentData')) : [  ];

        this.objects = this.currentData;
        console.log('objects constructor: ' + this.objects);
    }

    // getLocalStorage() {
    //     if(this.currentData !== null) {
    //         for (var i = this.currentData.length - 1; i >= 0; i--) {
    //             this.currentData = JSON.parse(localStorage.getItem('currentData-' + i));
    //             console.log('currentData if:' + this.currentData)
    //         }
    //     } else {
    //         console.log('currentData else:' + this.currentData)
    //     }
    //     // for (var i = this.objects.length - 1; i >= 0; i--) {
    //     //     JSON.parse(localStorage.getItem('currentData-' + i));
    //     // }
    //     console.log('objects getLocalStorage: ' + this.objects);
    //     return this.objects;
    // }

    // Funcionando com o array
    getLocalStorage() {
        JSON.parse(localStorage.getItem('currentData'));
        console.log('objects getLocalStorage: ' + this.objects);
        return this.objects;
    }

    deleteLocalStorage(index){
        // tem um erro nesse delete
        this.oldObject = this.objects.splice(index, 1);
        localStorage.setItem('currentData', JSON.stringify(this.oldObject));
    }

    // updateLocalStorage(index){
    // }

    saveLocalStorage(todo){
        // this.objects.push(todo);
        for (var i = this.objects.length - 1; i >= 0; i--) {
            localStorage.setItem('currentData-' + i, JSON.stringify(this.objects[i]));
        }
    }

    // Funcionando com o array
    // saveLocalStorage(todo){
    //     this.objects.push(todo);
    //     localStorage.setItem('currentData', JSON.stringify(this.objects));
    // }

    private handleError(error: any): Promise<any> {
        console.log('An error occured', error);
        return Promise.reject(error.message || error);
    }

}

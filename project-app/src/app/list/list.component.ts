import { Component, OnInit }					from '@angular/core';
import { Router }                               from '@angular/router';

import { Item }                                 from './../item.model';
import { FirebaseService }   					from './../../environments/firebase.service';
import { LocalStorageService }                  from './../localstorage.service';

import { AngularFire, FirebaseListObservable }  from 'angularfire2';

@Component({
    moduleId: module.id,
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: [ './list.component.css', './../../assets/css/bootstrap.min.css' ]
})

export class ListComponent implements OnInit {
/*    INICIO FIREBASE    */
	// myList: FirebaseListObservable<any[]>;

 //    constructor(private af: AngularFire) {
 //        this.myList = af.database.list('heroes/')
 //    }
/*    FIM FIREBASE    */
    
    todos: any;

    constructor(private router: Router,
                private storageService: LocalStorageService){
    }

    deleteTodo(index) {
        // this.todos.splice(index, 1);
        this.storageService.deleteLocalStorage(index);
    }

    ngOnInit(): void {
        this.todos = this.storageService.getLocalStorage();
    }

    // gotoDetail(item: Item): void {
    //     let link = ['/detail', item.id];
    //     this.router.navigate(link);
    // }

}

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
	// myList: FirebaseListObservable<any[]>;

 //    constructor(private af: AngularFire) {
 //        this.myList = af.database.list('heroes/')
 //    }
     
    lista: Item[];

    currentItem: string;
    todos: any;

    constructor(private router: Router,
                private locaStorage: LocalStorageService){
        this.currentItem = (localStorage.getItem('currentItem')!==null) ? JSON.parse(localStorage.getItem('currentItem')) : [  ];
        this.todos = this.currentItem;
    }

    deleteTodo(index) {
        this.todos.splice(index, 1);
        localStorage.setItem('currentItem', JSON.stringify(this.todos));
    }

    ngOnInit(): void {
        // this.lista = this.locaStorage.save();
        // console.log('lista: ' + this.lista);
    }

    // gotoDetail(item: Item): void {
    //     let link = ['/detail', item.id];
    //     this.router.navigate(link);
    // }

}

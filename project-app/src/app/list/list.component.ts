import { Component, OnInit }					from '@angular/core';
import { Router }                               from '@angular/router';

import { Item }                                 from './../item.model';
import { FirebaseService }   					from './../../environments/firebase.service';

import { AngularFire, FirebaseListObservable }  from 'angularfire2';

// import { Hero }                 from './hero';
// import { HeroService }          from './hero.service';

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
 
    currentItem: string;
    todos: any;

    constructor(private router: Router){
        this.currentItem = (localStorage.getItem('currentItem')!==null) ? JSON.parse(localStorage.getItem('currentItem')) : [  ];
        this.todos = this.currentItem;
    }

    deleteTodo(index) {
        this.todos.splice(index, 1);
        localStorage.setItem('currentItem', JSON.stringify(this.todos));
    }

    ngOnInit(): void {}

    gotoDetail(item: Item): void {
        let link = ['/detail', item.id];
        this.router.navigate(link);
    }

}

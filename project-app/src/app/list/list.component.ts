import { Component, OnInit }					from '@angular/core';
import { Router }                               from '@angular/router';
import { FirebaseService }   					from './../controller/firebase.service';

import { AngularFire, FirebaseListObservable }  from 'angularfire2';

@Component({
    moduleId: module.id,
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

	myList: FirebaseListObservable<any[]>;

    constructor(private af: AngularFire) {
        this.myList = af.database.list('heroes/')
    }

    ngOnInit() {
    }

}
